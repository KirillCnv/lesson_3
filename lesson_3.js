console.log(true || true) // || - логическое "или"
console.log(true || false)
console.log(false || true)

console.log(true && true) // логическое "и"
console.log(true && false)

// true - 1
// false - 0

// || - аналогия сложения 
// && - аналогия умножения 

// let item_1 = 3;
// let item_2 = 100;
// let item_3 = 50;  

// if (item_1 > 3 || item_2 < 15 && item_3 == 50){
//     console.log('кушаем ')
// } else {
//     console.log('голодаем')
// }

// let item_1 = 0;

// while(item_1 < 20) {
//     console.log("= кушать")
//     item_1++
// }
// let temperature = 0

// while(temperature < 40){

//     if (temperature < 10){
//         console.log('temperaure =',temperature,'holodno')
//     } else if (temperature >=10 && temperature <30){
//         console.log('temperaure =',temperature,'Norm')
//     } else {
//         console.log('temperaure =',temperature,'die')
//     }
//     temperature++
// }



for(let temperature = 0; temperature < 10; temperature++){
    if (temperature < 3){
        console.log('temperaure =',temperature,'holodno')
    } else if (temperature >=3 && temperature <7){
        console.log('temperaure =',temperature,'Norm')
    } else {
        console.log('temperaure =',temperature,'die')
    }
}

let names = ['kate',
             'alex',
            'Ivan',
            'ignat',
            'andrey',
            'vika']

            for (let item_1 of names){

                if(item_1 == 'ignat'){
                    break;
                }

                console.log(item_1)
            }