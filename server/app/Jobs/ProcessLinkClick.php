<?php

declare(strict_types=1);

namespace App\Jobs;

use App\Models\Click;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;

class ProcessLinkClick implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    /**
     * Cria uma nova instância do job.
     */
    public function __construct(
        public readonly int $linkId,
        public readonly array $clickData
    ) {}

    /**
     * Executa o job.
     */
    public function handle(): void
    {
        Click::create([
            'link_id' => $this->linkId,
            'ip_address' => $this->clickData['ip_address'] ?? null,
            'user_agent' => $this->clickData['user_agent'] ?? null,
            'referer' => $this->clickData['referer'] ?? null,
        ]);
    }
}
