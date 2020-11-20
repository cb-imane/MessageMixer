//const msg= require('./messageMixer') //the imported MessageMixer object (it matches with module.exports = MessageMixer) and all the proêrties should be in the form msg.property
//import MessageMixer from './messageMixer';

import { countCharacter, capitalizeFirstCharacterOfWords, reverseWord, reverseAllWords, replaceFirstOccurence, replaceAllOccurrences, encode, palindrome, pigLatin} from './messageMixer';
function displayMessage() {
  console.log(countCharacter("What is the color of the sky?", "t"));
  console.log(capitalizeFirstCharacterOfWords("What is the color of the sky?"));
  console.log(reverseWord("What is the color of the sky?"));
  console.log(reverseAllWords("What is the color of the sky?"));
  console.log(replaceFirstOccurence("What is the color of the sky?", "sky", "water"));
  console.log(encode("What is the color of the sky?"));
  console.log(palindrome("What is the color of the sky?"));
  console.log(pigLatin("What is the color of the sky?", "ay"));
}

displayMessage();
const sentence = "Qui va gagner des millions?"
const words = sentence.split(" ")
console.log(words);
console.log(words.length);
console.log(words.join(" "));
