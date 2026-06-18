<?php

namespace Tests\Feature;

use App\Models\Link;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class LinkControllerTest extends TestCase
{
    use RefreshDatabase;

    public function test_user_can_list_only_their_own_links()
    {
        $user1 = User::factory()->create();
        $user2 = User::factory()->create();

        Link::factory()->create(['user_id' => $user1->id, 'destination_url' => 'https://user1.com']);
        Link::factory()->create(['user_id' => $user2->id, 'destination_url' => 'https://user2.com']);

        $response = $this->actingAs($user1)->getJson('/api/links');

        $response->assertStatus(200);

        // Verifica se o link do User1 está lá, e o do User2 NÃO está.
        $response->assertJsonFragment(['destination_url' => 'https://user1.com']);
        $response->assertJsonMissing(['destination_url' => 'https://user2.com']);
    }

    public function test_user_can_create_a_link()
    {
        $user = User::factory()->create();

        $response = $this->actingAs($user)->postJson('/api/links', [
            'destination_url' => 'https://example.com'
        ]);

        $response->assertStatus(201);
        $response->assertJsonStructure(['id', 'destination_url', 'code', 'created_at']);

        // Verifica se o link foi associado ao usuário logado
        $this->assertDatabaseHas('links', [
            'user_id' => $user->id,
            'destination_url' => 'https://example.com'
        ]);
    }

    public function test_user_can_view_their_own_link()
    {
        $user = User::factory()->create();
        $link = Link::factory()->create(['user_id' => $user->id]);

        $response = $this->actingAs($user)->getJson("/api/links/{$link->id}");

        $response->assertStatus(200);
        $response->assertJsonFragment(['id' => $link->id]);
    }

    public function test_user_cannot_view_others_link()
    {
        $owner = User::factory()->create();
        $intruder = User::factory()->create();
        $link = Link::factory()->create(['user_id' => $owner->id]);

        $response = $this->actingAs($intruder)->getJson("/api/links/{$link->id}");

        // Como usamos policies com resource, o Laravel retorna 403 Forbidden
        $response->assertStatus(403);
    }

    public function test_user_can_update_their_own_link()
    {
        $user = User::factory()->create();
        $link = Link::factory()->create(['user_id' => $user->id, 'destination_url' => 'https://old.com']);

        $response = $this->actingAs($user)->putJson("/api/links/{$link->id}", [
            'destination_url' => 'https://new.com'
        ]);

        $response->assertStatus(200);
        $this->assertDatabaseHas('links', [
            'id' => $link->id,
            'destination_url' => 'https://new.com'
        ]);
    }

    public function test_user_cannot_update_others_link()
    {
        $owner = User::factory()->create();
        $intruder = User::factory()->create();
        $link = Link::factory()->create(['user_id' => $owner->id, 'destination_url' => 'https://old.com']);

        $response = $this->actingAs($intruder)->putJson("/api/links/{$link->id}", [
            'destination_url' => 'https://new.com'
        ]);

        $response->assertStatus(403);
    }

    public function test_user_can_delete_their_own_link()
    {
        $user = User::factory()->create();
        $link = Link::factory()->create(['user_id' => $user->id]);

        $response = $this->actingAs($user)->deleteJson("/api/links/{$link->id}");

        $response->assertStatus(204);
        $this->assertDatabaseMissing('links', ['id' => $link->id]);
    }

    public function test_user_cannot_delete_others_link()
    {
        $owner = User::factory()->create();
        $intruder = User::factory()->create();
        $link = Link::factory()->create(['user_id' => $owner->id]);

        $response = $this->actingAs($intruder)->deleteJson("/api/links/{$link->id}");

        $response->assertStatus(403);
        $this->assertDatabaseHas('links', ['id' => $link->id]);
    }

    public function test_user_cannot_create_link_with_invalid_url()
    {
        $user = User::factory()->create();

        $response = $this->actingAs($user)->postJson('/api/links', [
            'destination_url' => 'not-a-valid-url'
        ]);

        $response->assertStatus(422);
        $response->assertJsonValidationErrors(['destination_url']);
    }

    public function test_user_cannot_create_link_without_destination_url()
    {
        $user = User::factory()->create();

        $response = $this->actingAs($user)->postJson('/api/links', []);

        $response->assertStatus(422);
        $response->assertJsonValidationErrors(['destination_url']);
    }

    public function test_unauthenticated_user_cannot_access_links()
    {
        $response = $this->getJson('/api/links');

        $response->assertStatus(401);
    }
}
