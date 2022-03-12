function thisFn() {
  console.log(this);
}
// this context refers to the global window obj
thisFn();

var thisFn2 = () => {
  return console.log(this);
}
// this context refers to the global window obj (var)
thisFn2();

// this context refers to the HTMLButtonElement object
let btn = document.getElementById('btn').addEventListener('click', thisFn);
// unless you bind this to the fn, then it will refer to the global window obj
let btn2 = document.getElementById('btn').addEventListener('click', thisFn.bind(this));

// this context refers to the global window obj (=> retains context)
let btn3 = document.getElementById('btn').addEventListener('click', thisFn2);