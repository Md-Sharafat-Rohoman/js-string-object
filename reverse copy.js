const numbers = [1,3,5454,7554,4,4343,43,434657,7,6,87,8,79,798,9];


const rev_numbers = [];
for(const num of numbers){
    // console.log(num);
    rev_numbers.unshift(num);
}
console.log(rev_numbers)