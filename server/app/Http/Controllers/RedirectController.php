<?php

declare(strict_types=1);

namespace App\Http\Controllers;

use App\Services\RedirectService;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;

class RedirectController extends Controller
{
    public function __construct(
        protected RedirectService $redirectService
    ) {
    }

    /**
     * Handle the redirect for the short link and register the click.
     */
    public function __invoke(Request $request, string $code): RedirectResponse
    {
        $destinationUrl = $this->redirectService->processRedirect($code, [
            'ip_address' => $request->ip(),
            'user_agent' => $request->userAgent(),
            'referer' => $request->headers->get('referer'),
        ]);

        return redirect()->away($destinationUrl);
    }
}
