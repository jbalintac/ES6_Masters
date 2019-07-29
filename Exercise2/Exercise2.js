/*

A ranking tool was asked to be developed by a local talent contest organizer. The tool must:

- Capture the names and scores of contestants rated 1 to 10 in the order of the contestants' performance
- Sort the order of the scores from highest to lowest
- Display the top 3 winners' names of the talent contest based on the first 3 highest scorers

Acceptance Criteria
1. Input is an array of scores, naming contestants optional
2. Display the output as:

    The winners are: 

    (1st) Foo scored 9 out of 10
    (2nd) Bar scored 7 out of 10
    (3rd) Baz scored 6 out of 10

3. For tied scores (optional handler), the number of tied contestants will appear as:

    (2nd) 3 scored 8 out of 10

4. Use destructuring when retrieving the top 3 winners

*/

class ContestScore
{
    constructor(name, score) {
        this.name = name;
        this.score = score;
    };
}

let result = getResult([
  new ContestScore('Baz', 8),
  new ContestScore('Bar', 7),
  new ContestScore('Bar', 7),
  new ContestScore('Baz', 6),
  new ContestScore('Foo', 9)])

console.log(result);


function getResult(input) {

  let result = 'The winners are: \n';

  resolveOrdinal = (input) => {

    let toArray = input.toString().split('');
    let lastDigit = toArray[toArray.length - 1];

    let ordinal = 'th';

    if(lastDigit == 1) {
      ordinal = 'st'
    }
    else if (lastDigit == 2) {
      ordinal = 'nd'
    }
    else if (lastDigit == 2) {
      ordinal = 'rd'
    }

    return input + ordinal;
  }

  groupByArray = (xs, key) => { 
    return xs.reduce(function (rv, x) { 
      let v = key instanceof Function ? key(x) :
         x[key]; let el = rv.find((r) => r && r.key === v); 
          if (el) { el.values.push(x); } 
          else { rv.push({ key: v, values: [x] }); } return rv; }, []); 
  }

  return result + 
    groupByArray(input, 'score')
      .sort((a, b) => b.key - a.key)
      .map((r, index) => {

        // NOTE: Destructuring AC
        let {name, score} = r.values[0];

        if(r.values.length > 1)   {
          return `${resolveOrdinal(index + 1)} ${r.values.length} scored  ${score} out of 10`;
        }

        return `${resolveOrdinal(index + 1)} ${name} scored  ${score} out of 10`;
        
      })
      .slice(0,3)
      .join('\n');
}