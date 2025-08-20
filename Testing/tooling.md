# Steps to set up the tooling:

1. Install the testing framework: `vitest`.
```
npm install -D vitest
```

2. Install the React Testing Library and its companions to render React components, add DOM matchers, and initiate user events.
```
npm install -D @testing-library/react @testing-library/jest-dom @testing-library/user-event
```

3. Install a DOM environment to run the tests: `jsdom`.
```
npm install -D jsdom
```

4. Create the setup file in the project root, `test-setup.js`, and in it add:
```
import "@testing-library/jest-dom/vitest";
import { afterEach } from 'vitest'
import { cleanup } from "@testing-library/react";

afterEach(() => {
    cleanup();
});
```

5. In `vite.config.js`, add this `test` config:
```
test: {
    setupFiles: ["./test-setup.js"],
    environment: 'jsdom'
  }
```

6. Add the test script in `package.json`.
```
"test": "vitest"
```

7. Run `vitest` in `watch mode`.
```
npm run test
```


# Challenge:
************

Task: Add a component test for the Main component. 

Description: Check that the Main component shows the actual text lines "One does not simply" and "Walk into Mordor" in the document. It should also check that the img with the src "https://i.imgflip.com/1bij.jpg" is in the document.

Steps:
1. Create a new file `Main.test.jsx` next to `Main.jsx`.
2. Import necessary functions from 'vitest' and '@testing-library/react'.
3. Import the component.
4. Add a test for the meme text lines and image. 
  1. Render the component.
  2. Add 3 assertions using `expect`. For the `img`, expect `src` `toBe` "https://i.imgflip.com/1bij.jpg". 
  3. See the tests in `Header.test.jsx` for reference.
5. See Vitest test runner picking the new test, running it, and passing, all green.

# Challenge:
************

Task: Add another component test for the Main component to cover the rest of the UI of the app. 

Description: Check that the Main component shows the labels "Top Text" and "Bottom Text". In addition, it should show two text input fields with the placeholder texts "One does not simply" and "Walk into Mordor" in the document. Finally, check that it shows a button with the text "Get a new meme image 🖼". Organize all tests in the file in a test suite.

Steps:
1. Add a new test in the file `Main.test.jsx`.
2. Pick a good name that sums up what the test is asserting.
3. Render the component.
4. Add 5 assertions using `expect`. Use the queries `getByText` for querying the labels, `getByPlaceholderText` for querying the text input fields, and `getByRole` for querying the button.
5. What's the accessible role of the button in the DOM? It's `button`. See the list of all available roles here: 
https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Guides/Techniques#roles
6. See Vitest test runner picking up the new test, running it, and passing, all green.
7. Use `describe` to organize all tests in this file in a test suite. What should the name of the test suite be?


# Challenge:
************

Task: Add a test for updating the bottom text. Use the Arrange-Act-Assert pattern.

Description: Check that after the user clears the second textbox and types "Code without coffee" in it, the App component will display the new bottom text in the document.

Steps:
1. Add a new test in the file `App.test.jsx`.
2. Pick a good name that sums up what the test is asserting.
3. Apply the Arrange-Act-Assert pattern.
4. Create a user using `userEvent.setup()`.
5. Render the component.
6. Query the second textbox, using `getAllByRole`, and the role `textbox`.
7. `await` the user `clear`ing the textbox. Make the function `async`.
8. `await` the user `type`ing the text `Code without coffee`.
9. Assert, using `expect` that the text is displayed in the document.
10. See Vitest test runner picking up the new test, running it, and passing, all green.
11. Use `describe` to organize all tests in this file in a test suite. What should the name of the test suite be?

# Challenge:
************

Task: Add a test for getting a new meme image.

Description: The test should check that after the user click the "Get a new meme image 🖼" button, a new image is displayed. Use the Arrange-Act-Assert pattern. Only finish the first two parts of the pattern.

Optional for Extra Credit: Add the Assert part as well. What is the `src` of the meme image that the mock service will return?

Steps:
1. Add a new test in the file `App.test.jsx`.
2. Pick a good name that sums up what the test is asserting.
3. Add the Arrange-Act-Assert pattern skeleton.
4. Create a user using `userEvent.setup()`.
5. Render the component.
6. Query the button, using `getByRole`, and the role `button`.
7. In the Act part, have the user `click` on the button. What does that return? Does the test function need to be `async`? 
8. See Vitest test runner picking up the new test, running it, and passing, all green.


# Challenge:
************

Task: Make the meme image accessible. Use TDD.

Description: First write a test to check that the meme image is accessible and has the alt attribute set to "One Does Not Simply". Watch the test fail, and then get it to pass by making the necessary change in `Main.jsx`. When done, organize both tests in a test suite.

Steps:
1. Add a new test in `a11y.test.jsx`.
2. Render the App component.
3. Using `getByAltText`, query the image using the alt text "One Does Not Simply" and expect that it is in the document.
4. Watch the test fail.
5. Make the change in `Main.jsx` to get the test to pass. Which HTML attribute do you need to add to the meme image `img` element? What should be its value? Do not hard code the value.
6. Save the change and watch the test pass now.
7. Refactor `a11y.test.jsx`, organizing the tests in a test suite.
8. Congratulations! You just did TDD! 