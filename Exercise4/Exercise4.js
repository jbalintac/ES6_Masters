/*
3 For...of, 
4 Spread
5 Rest
6 Object Initializers 
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
  new ContestScore('Foo', 9)]);

console.log(result);


function getResult(input) {

  let result = 'The winners are:';

  resolveOrdinal = (input) => {

    let toArray = input.toString().split('');
    let lastDigit = toArray[toArray.length - 1];

    let ordinal = 'th';

    if(lastDigit == 1) {
      ordinal = 'st';
    }
    else if (lastDigit == 2) {
      ordinal = 'nd';
    }
    else if (lastDigit == 2) {
      ordinal = 'rd';
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

  let ranks = groupByArray(input, 'score')
  .sort((a, b) => b.key - a.key)
  .map((r, index) => {

    let {name, score} = r.values[0];

    if(r.values.length > 1)   {
      return `${resolveOrdinal(index + 1)} ${r.values.length} scored  ${score} out of 10`;
    }

    return `${resolveOrdinal(index + 1)} ${name} scored  ${score} out of 10`;
    
  })
  .slice(0,3);

  // AC: Spread
  return [result, ...ranks ].join('\n');
}