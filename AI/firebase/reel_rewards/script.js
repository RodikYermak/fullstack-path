document.addEventListener('DOMContentLoaded', function () {
    // === DOM elements ===
    const promoCodeInput = document.getElementById('promoCode');
    const finalPriceElement = document.getElementById('finalPrice');
    const promoForm = document.getElementById('promoForm');

    // === Base ticket price ===
    const BASE_PRICE = 50;

    // === Promo code discount mapping ===
    const PROMO_CODES = {
        HALF: 0.5,
        SAVE10: 0.1,
        FRIENDS20: 0.2,
    };

    // === Initial price display ===
    finalPriceElement.textContent = `Ticket Price: $${BASE_PRICE.toFixed(2)}`;

    // === Apply discount logic ===
    function applyDiscount(basePrice, userCode) {
        const normalizedCode = userCode.trim().toUpperCase(); // Clean up input
        const discountRate = PROMO_CODES[normalizedCode] || 0; // Look up discount or fallback to 0
        const finalPrice = basePrice * (1 - discountRate);

        return {
            finalPrice,
            discountApplied: discountRate > 0,
        };
    }

    // === Handle form submission ===
    promoForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent page reload

        const userCode = promoCodeInput.value;
        const { finalPrice, discountApplied } = applyDiscount(BASE_PRICE, userCode);

        if (discountApplied) {
            finalPriceElement.textContent = `🎉 Final Ticket Price: $${finalPrice.toFixed(2)}`;
            promoCodeInput.placeholder = ''; // Clear any previous warning
        } else {
            finalPriceElement.textContent = `Ticket Price: $${BASE_PRICE.toFixed(2)}`;
            promoCodeInput.placeholder = 'Invalid Promo Code!';
        }

        promoCodeInput.value = ''; // Clear input
        promoCodeInput.focus(); // Focus input for convenience
    });
});
