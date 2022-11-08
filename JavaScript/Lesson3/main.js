// Є змінна х, якій ви надаєте довільне числове значення.Якщо змінна x не дорівнює нулю, виведіть 'Вірно',
// інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3

let x = 5 ;
if(x!==0){
    console.log('Correct');
}else {
    console.log('Incorrect');
}



// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить,
// до якої четверті години попадає число(в першу, другу, третю или четверту частину години).

let time = 32 ;
if(time >= 0 && time <=15){
    console.log('First period');
} else if (time >= 15 && time <=30) {
    console.log('Second Period');
}  else if (time >= 30 && time <=45) {
    console.log('Third period');
}  else if (time >= 30 && time <=45) {
    console.log('Third period');
} else if (time >= 45 && time <=59) {
    console.log('Forth period');
} else {
    console.log ('Wrong period')
};



// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).

let day = 24 ;
 if (day >= 0 && day <= 10 ) {
    console.log('First Decade');
}
 else if (day >= 10 && day <= 20 ) {
    console.log('Second Decade');
    }
 else if (day >= 20 && day <= 31 ) {
    console.log('Third Decade');
}

// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня
// і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).

let week = +prompt();
 switch (week) {
     case 1 :
         console.log('Sunday')
         break;
     case 2 :
         console.log('Monday')
         break;
     case 3 :
         console.log('Tuesday')
         break;
     case 4 :
         console.log('Wednesday')
         break;
     case 5 :
         console.log('Thursday')
         break;
     case 6 :
         console.log('Friday')
         break;
     case 7 :
         console.log('Saturday')
         break;
     default:
         console.log('Do you have not enough days in the Week?')
         break;
 }



// - Користувач вводить або має два числа. Потрібно знайти та вивести максимальне число з тих двох.Також потрібно врахувати коли введені рівні числа.
 let a = 12 ;
 let b = 31 ;
 if ( a > b ) {
     console.log(a);
 }
     else if( b > a) {
     console.log(b);
 }
      else if( a === b ) {
    console.log('equal');
}
      else {
      console.log('Error');
      }


// - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
// за допомоги  оператора || буде присвоювати змінній х значення "default",якщо значення змінної х являється falsy (хибноподыбне, тобто кастується до false)

let vecna = +prompt() || 'default' ;
      console.log(vecna)