const sentence = 'my name is sharafat rohoman';
let reverse = '';
for(const letter of sentence){
    // console.log(letter);
    reverse = letter + reverse
}
// console.log(reverse);
let rev = '';
for(let i=0; i<sentence.length; i++){
    // console.log(i)
    // console.log(sentence[i]);
    const letter = sentence[i];
    // console.log(letter)
    rev = letter + rev;;
}
console.log(rev)


// const reversed = sentence.split('').reverse();
const reversed = sentence.split('').reverse().join('');
console.log(reversed)