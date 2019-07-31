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

  let result = 'The winners are: \n';

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

  let sorted = groupByArray(input, 'score')
      .sort((a, b) => b.key - a.key).slice(0,3);

  let index = 1;
  for(let item of sorted) { // AC: for...of

      let {name, score} = item.values[0];

      if(item.values.length > 1)   {
        result +=  `${resolveOrdinal(index)} ${item.values.length} scored  ${score} out of 10 \n`;
        continue;
      }

      result += `${resolveOrdinal(index)} ${name} scored  ${score} out of 10 \n`;

    index++;
  }

  return result
}