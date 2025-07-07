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
