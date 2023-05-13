function closureFunc() {
  var t;
  function Increment() {
    t++;
  }
  function Decrement() {
    t--;
  }
  function getValue() {
    return t;
  }
  function init() {
    t = 0;
  }
  init();
  return { Increment, getValue };
}



var ref = closureFunc();
ref.Increment();
ref.Increment();
console.log(ref.getValue());


(function() { console.log("IIFE - immediately invoked function expression")})()


function Person(name, dob, phone) {
    this.name = name
    this.dob = dob
    this.phone = phone
}

var p1 = new Person(1,2,3)
console.log(typeof p1)

function func1() {
  var c = 0
  return {c}
}
function func1(a) {
  var c = a
  return {c}
}

var a = func1()
console.log(a)
var emp1 = {}
Object.defineProperty(emp1,'name',{
  configurable: true,
  enumerable: true,
  writable: true,
  value: 'dhilip'
})
delete emp1.name
console.log(emp1)

var arr = new Array();
arr.push(123)
arr.push(10)
arr.push(2)
arr.push(100)
arr.push(4)
console.log(arr)
arr.sort()
console.log(arr)
arr.sort(comparator)
console.log(arr)

function comparator(val1,val2) {
  if(val1 < val2) {
    return -1
  }else if(val1 > val2){
    return 1
  }else{
    return 0;
  }
}

arr.forEach((index,value) => console.log(value+" is at index "+index))
var arr1 = arr.map((val) => val*2)
console.log(arr1)

var arr1 = arr.filter((val) => val>10)
console.log(arr1)

var arr1 = arr.every((val) => val>10)
console.log(arr1)

var arr1 = arr.some((val) => val>10)
console.log(arr1)

function sumofArray(sum, num) {
  return sum + num;
}

var a = arr.reduce((sum, val) => {return sum+val}, 100)
console.log(a)


function sumOfThreeNumber(...elements) {
  return new Promise((resolve, reject) => {
    if(elements.length > 3) {
      reject("length is greater than 3")
    }else{
      var sum = elements.reduce((initialValue, element) => initialValue+element, 0)
      resolve("sum = "+ sum);
    }
  })
}

sumOfThreeNumber(1,2,4,5).then(result => console.log(result)).catch(error => console.log(error))


function func2() {
  console.log("before settimeout")
  setTimeout(()=>{
    console.log("inside settimeout")
  },2000)
  console.log("after settimeout")
}
func2()


function func3(){
  for(let i = 0; i < 3; i++){
    setTimeout(()=> console.log(i),5000);
}
}
func3();


function add(a) {
  return function (b) {
    return a+b
  }
}

console.log('currying', add(1)(2))