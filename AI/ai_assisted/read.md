The Joy of Language Models
Get refactor suggestions
Convert code from one format to another
Write tests&documentation
Learn new technologies and advanced topics faster

Prompt example
Please write a javascript function:

function getBookById(bookArr, id)
for each book in bookArr
if book.id === id
return book
else return error object "No book found"

function getBookById(bookArr, id) {
for (let book of bookArr) {
if (book.id === id) {
return book;
}
}
return { error: "No book found" };
}

PROMPT:
Generate some funny boock mock data to test this function.

const books = [
{ id: 1, title: "JavaScript for People Who Cry at Math", author: "Null Pointer" },
{ id: 2, title: "You Don't Need That Framework", author: "Vanilla Ice.js" },
{ id: 3, title: "50 Shades of Undefined", author: "E. L. Oh No" },
{ id: 4, title: "The Lord of the Infinite Loops", author: "J.S. Token" },
{ id: 5, title: "Harry Potter and the Console.log of Secrets", author: "J.K. Scriptling" },
{ id: 6, title: "How to Lose State in 10 Renders", author: "React McHook" },
{ id: 7, title: "The Catcher in the Stack Trace", author: "J.D. TryCatch" }
];

PROMPT
I want to build my own React component library with common components like form fields, nav bars and accordion menus.
-Create a pseudo code language similar to Markdown that will help me quickly describe a React component so you can convert it to example code.
-Respond with a template I can use, as well an example component. Keep the template and the component as simple as possible.

# ComponentName

State:

-   stateVariable: initialValue

Props:

-   propName: propType

Render:

-   Description of render content

Event Handlers:

-   handlerName: Description of handler functionality

# Counter

State:

-   count: 0

Props:

-   incrementValue: number

Render:

-   A button that displays the current count. Each click increases the count by `incrementValue`.

Event Handlers:

-   handleIncrement: Increases the count state by `incrementValue`.

PROMPT
Create a pseudo language that will help me quickly describe to you how to provide sample code and styles
for an HTML form. Respond with a template I can use, as well as sample element.

FORM:

-   ACTION: [URL]
-   METHOD: [GET/POST/PUT/DELETE]
-   INPUTS:
    -   TYPE: [text/password/email/checkbox/radio...]
        LABEL: [Label text]
        ATTRIBUTES: - [Attribute Name]: [Attribute Value]
        STYLES: - [CSS Property]: [CSS Value]
        ...
-   BUTTON:
    -   TEXT: [Button text]
    -   TYPE: [submit/reset/button]
    -   STYLES:
        -   [CSS Property]: [CSS Value]
-   STYLES:
    -   [CSS Property]: [CSS Value]

FORM:

-   ACTION: /submitForm
-   METHOD: POST
-   INPUTS:
    -   TYPE: text
        LABEL: Username
        ATTRIBUTES:
        -   name: username
        -   required: true
            STYLES:
        -   width: 200px
    -   TYPE: password
        LABEL: Password
        ATTRIBUTES:
        -   name: password
            STYLES:
        -   width: 200px
-   BUTTON:
    -   TEXT: Submit
    -   TYPE: submit
    -   STYLES:
        -   background-color: blue
        -   color: white
-   STYLES:
    -   border: 1px solid gray
    -   padding: 10px

# Prompt 1

Write a JavaScript function that takes in an array and returns a new array with any duplicate items fremoved.

# Prompt 2

List 8 edge cases this function should account for, and provide test cases for each.

1. Empty array
2. Array with a single element
3. Array with all elements the same
4. Array with different types of elements (e.g., numbers, strings, booleans).
5. Array with nested arrays: If the array contains other arrays, the function will not work as expected because JavaScript does not allow comparison of arrays like simple data types. For this, a more complex solution that handles deep equality is needed.
6. Array with objects
7. Non-array inputs
8. Array with special numbers: (NaN and Infinity)

# Testing a function for edge cases

1. Take a minute to read and understand the chunkArray function
2. Ask ChatGPT to generate 3 console.log statements to test the function.
3. Prompt ChatGPt for 5 edge cases
4. Read the edge cases and pick a couple you want your function to
   account for (hint: some may involve infinite loops, so don't just run the test cases!)
5. Ask ChatGPT to revise your function based on those edge cases. Be sure
   to include instructions (or ask for suggestions) for how you want to deal with them!


# Document Code
Ask me 10 questions about best practices and style conventions and use my answers to write a style guide.

