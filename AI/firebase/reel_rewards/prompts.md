## Prompt 1

I'm having an issue running my JavaScript code. Here's the error message I'm getting:

"!TypeError: Cannot set properties of null (setting 'textContent')"

Please help me understand what's wrong.

## Prompt 2

I'm having issues with my JavaScript code. Submitting the promo form refreshes the page and does not run the following code as expected:

```
promoForm.addEventListener('submit', function(event) {
  var userCode = promoCodeInput.value;
  var finalPrice = applyDiscount(basePrice, userCode);

  if (finalPrice < basePrice) {
    finalPriceElement.textContent = `Final Tickets Price: $${finalPrice}`;
    promoCodeInput.disabled = true;
  } else {
    promoCodeInput.placeholder = 'Invalid Promo Code!'
  }

  promoCodeInput.value = '';
});
```

Could you help me debug and fix this?

## Prompt 3

I'm having trouble with this `applyDiscount` function. It isn't correctly applying a 50% discount only when I enter the code "HALF".

###

###

Could you help me debug and fix this function?

## Prompt 5

You are a senior developer reviewing my JavaScript code before I ship it to production. Please provide feedback on how I can improve this code, make it more maintainable, and handle cases where a user enters the promo code in lowercase.
