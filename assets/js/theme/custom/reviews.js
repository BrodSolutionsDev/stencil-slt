import { api } from '@bigcommerce/stencil-utils';
import { defaultModal } from '../global/modal';

const LOAD_MORE_TEXT = 'Load More Reviews';
const LOADING_TEXT = 'Loading...';

/**
 * Appends the next page of reviews via AJAX when the "Load More Reviews"
 * button is clicked. The next page URL comes from the button's
 * data-next-url; the button is removed once the last page is loaded.
 */
export function initReviewLoadMore() {
    $('body').on('click', '[data-reviews-load-more]', (event) => {
        event.preventDefault();

        const $button = $(event.currentTarget);

        if ($button.prop('disabled')) {
            return;
        }

        const resetButton = () => $button.prop('disabled', false).text(LOAD_MORE_TEXT);

        $button.prop('disabled', true).text(LOADING_TEXT);

        api.getPage($button.data('nextUrl'), { template: 'custom/products/reviews-ajax' }, (err, response) => {
            if (err) {
                resetButton();
                return;
            }

            const $response = $('<div>').html(response);
            const $nextButton = $response.find('[data-reviews-load-more]');
            const $list = $button.closest('.productReviews').find('.productReviews-list');
            const $count = $button.siblings('[data-reviews-count]');
            const total = $count.data('total');

            $list.append($response.find('.productReview'));

            if ($nextButton.length) {
                $button.data('nextUrl', $nextButton.data('nextUrl'));
                $count.text(`Showing ${$list.children('.productReview').length} of ${total} reviews`);
                resetButton();
            } else {
                $count.text(`Showing all ${total} reviews`);
                $button.remove();
            }
        });
    });
}

/**
 * Opens the full review in the theme's shared #modal when a truncated
 * review's "Read More" button is clicked.
 */
export function initReviewReadMore() {
    $('body').on('click', '[data-review-read-more]', (event) => {
        event.preventDefault();

        const $review = $(event.currentTarget).closest('.productReview');
        const content = $review.find('[data-review-full-content]').html();
        const modal = defaultModal();

        modal.open({ size: 'small', pending: false });
        modal.updateContent(`<div class="productReview-modal">${content}</div>`, { wrap: true });
    });
}

/**
 * Smooth-scrolls to the reviews section when the "(N Reviews)" link near
 * the product title is clicked, instead of the default anchor jump.
 */
export function initReviewScrollLink() {
    $('body').on('click', '.productView-reviewLink.scroll-to-view > a', (event) => {
        const $reviews = $('.productReviews');

        if (!$reviews.length) {
            return;
        }

        event.preventDefault();
        $('html, body').animate({ scrollTop: $reviews.offset().top }, 1000);
    });
}

/**
 * The core Review component (theme/product/reviews.js) force-collapses the
 * product reviews section on every page load unless the URL is a
 * "#product-reviews" pagination link. Client wants reviews visible by
 * default, so re-expand the section right after Review's constructor runs.
 */
export default function expandProductReviews() {
    const $toggle = $('#product-reviews [data-collapsible]');
    const $content = $('#productReviews-content');

    if (!$content.length) {
        return;
    }

    $toggle.addClass('is-open').attr('aria-expanded', 'true');
    $content.addClass('is-open').attr('aria-hidden', 'false');
}
