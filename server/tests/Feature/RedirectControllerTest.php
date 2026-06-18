<?php

namespace Tests\Feature;

use App\Jobs\ProcessLinkClick;
use App\Models\Link;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\Queue;
use Tests\TestCase;

class RedirectControllerTest extends TestCase
{
    use RefreshDatabase;

    public function test_redirects_to_destination_url()
    {
        Queue::fake();

        $link = Link::factory()->create([
            'destination_url' => 'https://example.com',
            'is_active' => true,
        ]);

        $response = $this->get("/{$link->code}");

        $response->assertStatus(302);
        $response->assertRedirect('https://example.com');
    }

    public function test_returns_404_if_link_is_inactive()
    {
        Queue::fake();

        $link = Link::factory()->create([
            'destination_url' => 'https://example.com',
            'is_active' => false,
        ]);

        $response = $this->get("/{$link->code}");

        $response->assertStatus(404);
    }

    public function test_returns_404_if_link_is_expired()
    {
        Queue::fake();

        $link = Link::factory()->create([
            'destination_url' => 'https://example.com',
            'expires_at' => now()->subDay(),
            'is_active' => true,
        ]);

        $response = $this->get("/{$link->code}");

        $response->assertStatus(404);
    }

    public function test_dispatches_process_link_click_job()
    {
        Queue::fake();

        $link = Link::factory()->create([
            'destination_url' => 'https://example.com',
            'is_active' => true,
        ]);

        $response = $this->get("/{$link->code}");

        $response->assertStatus(302);

        Queue::assertPushed(ProcessLinkClick::class, function ($job) use ($link) {
            return $job->linkId === $link->id;
        });
    }

    public function test_returns_404_if_code_does_not_exist()
    {
        $response = $this->get('/codigo-invalido-inexistente');

        $response->assertStatus(404);
    }
}
