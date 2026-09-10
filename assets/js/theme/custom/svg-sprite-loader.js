import svgInjector from 'svg-injector';

// Loads and injects the icon sprite (assets/img/icon-sprite.svg) referenced by
// <svg data-src="..."> placeholders in the layout templates.
//
// This is bundled into the `head_async` entry (see webpack.common.js) so the
// sprite fetch starts as soon as this script downloads, in parallel with the
// much heavier `main.js` bundle — icons no longer wait on jQuery's
// document.ready or on every other onReady() setup call to finish first.
//
// It also retries on failure: svg-injector removes the `data-src` attribute
// from an element once that element's sprite has been successfully injected,
// so any element still carrying `data-src` after a delay means its fetch
// failed (slow network, CDN hiccup, etc.) — we retry a few times before
// giving up, instead of leaving icons permanently blank.

const MAX_ATTEMPTS = 4;
const RETRY_DELAY_MS = 800;

function pendingSprites() {
    return document.querySelectorAll('svg[data-src]');
}

function injectSprites(attempt = 1) {
    const targets = pendingSprites();

    if (!targets.length) {
        return;
    }

    svgInjector(targets);

    if (attempt >= MAX_ATTEMPTS) {
        return;
    }

    setTimeout(() => {
        if (pendingSprites().length) {
            injectSprites(attempt + 1);
        }
    }, RETRY_DELAY_MS * attempt);
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => injectSprites());
} else {
    injectSprites();
}
