
var Age = prompt('Enter your age');
console.log(Age);
if(Age > 0 && Age < 18) {
    prompt('Вы еще молоды. Вам нужно учиться');
}else if(Age > 18 && Age < 50) {
    prompt('Вам нужно работать');
}else if(Age > 50 && Age < 59) {
    prompt('Вам скоро на пенсию');
}else if(Age > 59 && Age < 150) {
    prompt('Вы пенсионер');
}else{
    alert('Что-то пошло не так');
}