function reverseFunction(sentence) {
    const wordsArray = sentence.split(" ");
    const reversedArray = wordsArray.reverse();
    const reversedSentence = reversedArray.join(" ")

    return reversedSentence;
}
module.exports = reverseFunction; 

// module.export = reverse 
// reverseFunction = (sentence) => {
//     const wordArray = sentence.split(" ");
//     const reversedSentence = wordArray.reverse();
//     const reversedSentence = reversedArray.join(" ");

//     return reversedSentence;
// }