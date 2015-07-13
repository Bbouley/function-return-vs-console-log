

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

function greet3(name){
  return 'Hello ' + name;
  console.log('Hello '+ name);
};

greet3('x');

//This will not display anything on the webpage,
//once a function has hit return it will stop what it's doing
//and ignore whatever comes next

function greet4(name){
  console.log('Hello '+ name);
  return 'Hello '+name;
};

greet4('x')

//Here the function is using console log to print out the phrase give
//then using the return statement to say that this is what the function returns

console.log(greet4('x'))

//This prints Hello x twice. Once due to the console log within the function
//and once because it's printing out what the function is actually returning
