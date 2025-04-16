const age = 21;
const school = 'rifle square';
const isPassed = true;

// console.log(age,school,isPassed);

// const subjects = ['bangla','english','math','physics','chemistry'];
// console.log(subjects);
/* for(let subject of subjects){
    // console.log(subject);
} */


const subjects = {
    name:'biology',
    teacher:'rasheda mam',
    examDate: '30 Feb',
    chapters: ['first', 'second', 'third'],
    exams:{
        name: 'final exam',
        marks: 100
    }
}
/* for(let subject in subjects){
    console.log(subject);
} */
console.log(subjects.name);
delete subjects.name;
console.log(subjects)
    