## Prompt 1

You are building a smart home mobile interface using HTML, CSS, and JavaScript.
The interface should allow users to control various aspects of their smart home,
such as lighting, temperature, and music preferences.

First, create the HTML structure for the smart home interface.
Include a header with the title and three main sections for lighting,
temperature, and music.

Each section should include buttons to control lighting, temperature,
and music based on user preferences.

## Prompt 2

Use icon fonts to display light, temperature, and music icons next to
each section heading and for the corresponding buttons.

## Prompt 3

Next, apply CSS styles to achieve a mobile-friendly layout with a
dark and sleek design. Use soft gradients, shadows and the provided colors
(#28074a, #bd4de5, #491088, #6c1dd0, #ff19db, #ff7f1a) for
backgrounds, buttons, and other elements.

Challenge: UI adjustments
_ Center align the content inside each section
and add more spacing around the content
_ Adjust the space between the buttons

## Prompt 4

Update the HTML and CSS code to implement a toggle switch for
the lighting control instead of a button. Keep the switch color
consistent with the rest of the interface.

## Prompt 5
Add a soft glow effect behind a pressed or clicked button. Here is the CSS for my buttons:

button {
    flex: 1 1 30%;
    padding: 0.75rem 0.5rem;
    font-size: 0.9rem;
    font-weight: 500;
    color: #ffffff;
    background: linear-gradient(135deg, #6c1dd0 0%, #bd4de5 100%);
    border: none;
    border-radius: 0.75rem;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.4rem;
    cursor: pointer;
    transition: transform 0.15s ease, box-shadow 0.15s ease;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.35);
}

button i {
    font-size: 1.1rem;
}

button:active {
    transform: scale(0.96);
}

button:hover {
    box-shadow: 0 4px 8px rgba(255, 25, 219, 0.35);
}

button:hover {
  background-color: #ff19db;
}

The glow should match the bright pink background of a hovered button.