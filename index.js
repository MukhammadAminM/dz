let name = prompt('Name')

if(name.length % 2 == 0){
    alert('welcome')
}else{
    alert('no')   
}


let even_number = +prompt('Enter number')

if(even_number % 2 == 0){
    alert('this number is even')
}else{
    alert('this number is not even')
}


let number_1 = +prompt('First number')
let method = prompt('method')
let number_2 = +prompt('Second number')

if(method == '+'){
    alert(number_1 + number_2)
}else if(method == '-'){
    alert(number_1 - number_2)
}else if(method == '*'){
    alert(number_1 * number_2)
}else if(method == '/'){
    alert(number_1 / number_2)
}

let month = +prompt('enter your month')

if(month == 12 || month == 1 || month == 2){
    alert('winter')
}else if(month > 0 && month <= 5){
    alert('spring')
}else if(month > 0 && month <= 8){
    alert('summer')
}else if(month > 0 && month <= 11){
    alert('autmn')
}else{
    alert('it is not month')
}