/*
3 For...of, 
4 Spread
5 Rest
6 Object Initializers 
*/

// AC: Object Initializers 
let result = getResult([
  {name:'Baz', score: 8},
  {name: 'Bar', score: 7},
  {name: 'Bar', score: 7},
  {name: 'Baz', score: 6},
  {name: 'Foo', score: 9}])

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