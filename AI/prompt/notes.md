Effective Prompting
Be specific
Use Technical Terms
Provide Context
Give Examples
Iterate

Role-based prompting
Use phrases like "Act as a..." and "You are a..." to prompt ChatGPT to assume a certain role
Prompt ChatGPT to ask clarifying questions
Assume a role to define technologies, determine key features, and write user stories

# Recap: Prompt Engineering

## Be Specific, Use Technical Terms, and Provide Context

❌ "How do I center something?"
✅ "What's the best way to center a div element horizontally and vertically on a webpage?"

❌ "Explain reduce"
✅ Specify language/technology and request examples:
"Explain JavaScript's reduce() method, and include two code examples."

✅ Include additional context like audience and project status:
"Explain JavaScript's reduce() method to me as if I am a beginning developer just learning how to code. Provide an example of how I can use reduce() to calculate the total price of several items in a shopping cart"

❌ "How do I create a form?"
✅ "Please create a form in JavaScript with one input that accepts a string and, on submit, prints that word to the webpage in reverse."

❌ "Show me an example React component"
✅ "Please create an example React component that takes in at least one prop and demonstrates how to use hooks like useState and useEffect. The example should not be a typical 'Hello World' example like a counter or a greeting. Assume that I have already set up a React project."

## Control the Length and formatting of the responses

✅ Ask for steps: "Provide a brief 2-step explanation of creating a custom JavaScript event"
✅ Info as a table: "Highlight the differences between React and Vue in a tabular format"
✅ Summarize with bullet points: "Please summarize in 3 bullet points why innerHTML should be avoided"
✅ Prompt for most important concepts: "List the 5 most important JavaScript concepts a beginning developer should know before learning React."
✅ Summarize as flow chart: "Use a flowchart to explain how to make a pull request on Github"
✅ Summarize as pseudo code: "Create pseudo code in the form of code comments describing how I can write a React component that displays the time in a user's local timezone."
✅ Ask for analogy or metaphor: "Explain the concept of a JavaScript event loop using an analogy"

## Break tasks into smaller steps

❌ Avoid very long prompts with many instructions:

"Help me build a small React application to help users visualize their budget. The application should consist of a form with three inputs: a budget title, a total budget, and current expenditures. When the user submits the form, a progress bar should be added to the page. The progress bar should be green if less than 50% ..."

✅ Break project into subtasks, and subtasks into numbered or bulleted lists:

"Help me build a small React application to help users visualize their budget. Make sure it meets the following requirements:

1. Include a form component with three inputs: budget title, budget and spent
2. When the form is submitted, add the new budget to an array of budgets"

## Optimize prompts

1. Prompt ChatGPT to ask clarifying questions about a broad prompt:

"I'm going to give you a prompt, and I want you to ask me clarifying questions to help me optimize it, then suggest a more effective prompt based on my answers that will yield a more accurate and detailed output. The prompt is: Please give me an example prompt for a React accordion menu."

2. Answer ChatGPT's clarifying questions.
3. When ChatGPT returns an optimize prompt, feed the prompt back to ChatGPT
4. Success!

## Role-Base Prompting

✅ Act as a
... product owner or manager and help me define crucial features for my app / write user stories
... software architect and help me determine which technologies to use for my app
... senior engineer and advise me on best practices

## Prompt with Examples

✅ "Please write a function to total an array of numbers and return the value as a dollar amount:

Example input: [5, 40.5, 9, 45, 23, 50]
Example output: $172.50

✅ Please generate some dummy JSON data for music events. Include the following properties:

-   band name
-   event date and time
-   ticket cost
-   venue
-   band genre
