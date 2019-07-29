/*

You are tasked to create a word-processor subroutine that takes in a string of text and returns an output that:

- Counts the number of words
- Counts the vowels, if any
- Counts the consonants, if any

The minimum length of the input string should be at least 50 characters for it to proceed, otherwise show an error.

Acceptance Criteria:

1. Show the number of words, number of vowel and consonant characters, as follows:

    Input: The quick brown QA jumps over the lazy Dev.
    Number of word(s) found: 9
    Number of vowel(s) found: 11
    Number of consonant(s) found: 23

2. Show only the counter of vowels and/or consonants if their respective count is more than zero
3. Strictly use tagged template for this exercise

*/

function wordCounts(input) {

    const consonants = ['B', 'C', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'P', 'Q', 'R', 'S', 'T', 'V', 'W', 'X', 'Y', 'Z'];
  
    const vowels =  ['A', 'E', 'I', 'O', 'U'];
  
    let wordCount = input.split(' ').length;
  
    let vowelCount =  input.split('').filter(
      v => vowels.filter( vow => v.toUpperCase() == vow).length > 0
    ).length;
  
    let consonantCount =  input.split('').filter(
      c => consonants.filter( cons => c.toUpperCase() == cons).length > 0
    ).length;
  
    processorTag = (strings, input, wordCount, vowelCount, consonantCount) => {
  
    
      // We can even return a string built using a template literal
      return `${strings[0]}${input}${strings[1]}${wordCount}${strings[2]}${vowelCount}${strings[3]}${consonantCount}`;
    }
  
  
    let processed =  processorTag`Input: ${input}
    Number of word(s) found: ${wordCount}
    Number of vowel(s) found: ${vowelCount}
    Number of consonant(s) found: ${consonantCount}`
  
    return processed;
  }
  
  console.log(wordCounts('The quick brown QA jumps over the lazy Dev.'));