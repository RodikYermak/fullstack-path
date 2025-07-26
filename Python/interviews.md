## Gradient AI coding challenge:
You have csv file where first line consist of header elements. You goal to find new line elements 
const _ = require('lodash');
const csvToArray = require('./dara/csvToArray')

const csv_str =
`claim_number,date_created,subject,note_text 
A123,2020-01-01,Note1,Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod 
    tempo incididunt ut labore et dolore magna\naliqua. Placerat vestibulum lectus mauris 
    ultrices eros in cursus turpis. 
98765,2020-01-01,Note2,Aliquam id diam maecenas ultricies mi eget 
14-0689,2020-01-02,Note3,Vestibulum rhoncus est pellentesque elit.\Etiam tempor orci eu 
    lobortis. 
3892C,2020-01-03,Note4,Tristique senectus et netus et malesuade fames ac turpis egestas. 
    Hendrerit dolor magna eget est lorem.`

function findNewlineElement(element){

}

## ServiceNow 1 coding challenge
Given an Object, flatten the object so that all the properties are at the root level.
Each new property key should be a dot delimited path based on the original object structure.

Example
Input
{
    name: 'John',
    age: 21,
    address: {
        line1: 'Doe',
        country: {
            code: 'US',
            name: 'United States',
        }
    },
    isAwesome: () => true,
}

Output:
{
    name: 'John',
    age: 21,
    "address.line1": 'Doe',
    "address.country.code": 'US',
    "address.country. name": 'United States',
    isAwesome: () => true,
}

## MindBody Codility challenge
Prepare a notification of the given message which will be displayed on a mobile device.

Test cases: 
console.log(solution("And now here is my secret", 15)) // "And now ..."
console.log(solution("There is an animal with four legs", 15)) // "There is an..."
console.log(solution("super dog", 4)) // "..."
console.log(solution("how are you", 20)) // "how are you"

## ServiceNow 2 coding challenge
Write the function that checks if the string is a palindrome
Provide test strings to check

## Pilot Codility challenge
