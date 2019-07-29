/*

A ranking tool was asked to be developed by a local talent contest organizer. The tool must:

- Capture the names and scores of contestants rated 1 to 10 in the order of the contestants' performance
- Sort the order of the scores from highest to lowest
- Display the top 3 winners' names of the talent contest based on the first 3 highest scorers

Acceptance Criteria
1. Input is an array of scores, naming contestants optional
2. Display the output as:

    The winners are: 

3. For tied scores (optional handler), the number of tied contestants will appear as:

    The winners are: 

    (1st) Foo scored 9 out of 10
    (2nd) Bar scored 7 out of 10
    (3rd) Baz scored 6 out of 10

4. Use destructuring when retrieving the top 3 winners

*/

class ContestScore
{
    constructor(name, score) {
        this.name = name;
        this.score = score;
    };
}

let result = getResult([new ContestScore('Bar', 7),new ContestScore('Baz', 6),new ContestScore('Foo', 9)])
console.log(result);


function getResult(input) {

  let result = 'The winners are: \n';

  return result + input.sort((a, b) => b.score - a.score).map(({name, score}, index) => 
  `${index + 1} ${name} scored  ${score} out of 10`).join('\n');
}