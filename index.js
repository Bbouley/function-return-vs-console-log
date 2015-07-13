

function greet(name){
  console.log('Hello '+ name);
}

greet('a')
greet('b')
greet('c')
greet('d')

//greets each name, but they are not stored as variables.

greet('a')+ console.log(' , how are you doing today?')

//With this method it will automatically print out onto a new line
//We will have to call greet ('a') every time we want to use that phrase


function greet2(name){
  return 'Hello '+ name;
};

var a = greet2('a')
var b = greet2('b')
var c = greet2('c')
var d = greet2('d')

//stores each name the function is called on as a variable

console.log(a + '\n' + b+ '\n' + c + '\n' + d)

//we can also then reuse these defined variables

console.log(a + ' ,how are you doing today?')

//The return statement doesn't print out anything to the console,
//It simply stores this information, which is why we can use it in variables.
