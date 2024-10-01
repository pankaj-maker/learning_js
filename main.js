// const cartoon= ["doremon","tom& jerry","oggy"]
// cartoon[1]="chota bheem"
// console.log(cartoon);
// function isEmpty(array){
//     return array.length===0;
// }
// let x;
// x =isEmpty([]);
// console.log(x);

// x= isEmpty([1,2,3]);
// console.log(x);
// function lengthyString(str){
//     if(str.length>=5 || str.includes("a")) return true;
//     return false;
// }

// let x;
// x =lengthyString("a");
// console.log(x);

// x= lengthyString("fdsdvsvsda");
// console.log(x);

// const x= "hello,there,is,a"
// console.log(x.split(" ,"));

// const x =[ "hii", "bye"];
// console.log(x.reverse());
// const x = revString("hello there");
// console.log(x);
// function revString(str){
//    const senArray = str.split("");
//    return senArray.reverse().join('');

// }

// const x = revNum(45);
// console.log(x+x);
// function revNum(num){
//     const numArr = String(num);
//     const arrString =numArr.split("").reverse().join("");
//     return Number(arrString);
// }
// console.log(fruit);
// var fruit = "apple"
// function newR(){
//     var str= "hello"
//     console.log(str);

// }
// newR();
// console.log(str);

// function revFunction(num,keepSign=true|| false){
//     // num = Math.abs(num);
//     const numStr = String(num);
//     const arrStr = numStr.split("").reverse().join("");
//    const revFunction = parseFloat(arrStr);
//    return keepSign ? revFunction * Math.sign(num) : revFunction;

// }
// console.log(revFunction(-12,false));
// console.log(revFunction(78644));

// for(var i=0; i<=100;){
// if(i%1==0){
//     console.log(i);

// }
// }
// function printNum(num){
//     const numStr = String(num);
//     for (let i=0; i<numStr.length; i++){
//         console.log(numStr[i]);

//     }
// }
// printNum(12345);

// function toSum(sum){
//     let counter = 0;
//     for(let i=0; i<sum.length; i++){
//         counter += sum[i];
//     }
//     return counter;
// }
// console.log(toSum([1,2,3,4,5]));
// function months(num){
//     const arr =["jan","feb","mar","apr","may","june","jully","aug","sep","oct","nov","dec"];
//     num -= 1;

//    return arr[num] ?? "Invalid";

// }
// console.log(months(1));

// const x= [1,2,3,4,5]
// const y =x.unshift()
// console.log(y);
// const menu={
//     biryani:"$100",
//     fried_rice:"$70",
//     vada_pav:"$15"
// }

// for(let key in menu){

//         const value=menu[key];
//         const tax =Number(value.slice(1))+1
//         console.log(`the price of ${key} is $${tax}`);
// }

// function remove(str){
//      let x=str.slice(1).replace(",","")
//    return x = parseInt(x);

// }
// console.log(remove("$1,000"));

// function itemPurchased(store,wallet){
//     const filteredItem = [];
//     wallet = remove(wallet);

//     for(let item in store){
//         if(remove(store[item])<= wallet){
//             filteredItem.push(item);
//         }
//     }
//     return filteredItem.length>0 ? filteredItem.sort():"Nothing";
// }

// const y=
// itemPurchased({
//     Phone: "$999",
//     Speakers: "$300",
//     Laptop: "$5,000",
//     PC: "$1200"},
//   "$1")

// console.log(y);

// function caesarCipher("string", 2){

// }

// function move1(char,step){
//     const alpha="abcdefghijklmnopqrstuvwxyz"
//     if(!alpha.includes(char)){
//         return char;
//     }
//     const idxChar= alpha.indexOf(char);
//     let finalIdx= idxChar+step;
//     if(finalIdx>25){
//         finalIdx= finalIdx%26;
//     }
//     const finalchar = alpha[finalIdx];
//     return finalchar;
// }
// console.log(move1(",",6));

// func to move a char by step
// function move(char, step) {
//   let alpha = "abcdefghijklmnopqrstuvwxyz";
//   if (alpha.toUpperCase().includes(char)) {
//     alpha = alpha.toUpperCase();
//   }
//   if (!alpha.includes(char)) {
//     return char;
//   }
//   const idxChar = alpha.indexOf(char);
//   let finalIdx = idxChar + step;
//   if (finalIdx > 25) {
//     finalIdx = finalIdx % 26;
//   }
//   const finalchar = alpha[finalIdx];
//   return finalchar;
// }
// // console.log(move("C", 6));

// function caesarCipher(s, k) {
//   let finalStr = "";
//   for (let i = 0; i < s.length; i++) {
//     finalStr += move(s[i],k);
//   }
//   return finalStr; 
        
//     }
//     return finaList;
// }
// console.log(splitBunches([{ name: "grapes", quantity: 2 }]));
// function sayHi(str){
//     return print = str;
// }
// console.log(sayHi("hello"));

// function invoke2Times(func){
// func();
// func();

// }
// const sayHi=()=> console.log('hello');
// invoke2Times(sayHi)

// function functionCall(func,params) {
    
// }

// function redundant(str){
//     return function(){
//         return str;
//     };
  
// }

// const fruit = "apple banana orange".split("");
// const upperCase= word => console.log(word.toUpperCase());
// fruit.forEach(upperCase);

// const willFit =(capacity,weight)=>{
//     const holds={
//         S:50,
//         M:100,
//         L:200
//     };

// let totalCapacity=0;
// capacity.forEach(crate =>{
//     totalCapacity+= holds[crate];
// })
// console.log(totalCapacity);
// }

// willFit(["M", "L", "L", "M"])


// function makePlusFunction(baseNum){
//     return function(argument){
//         return baseNum+argument
//     }
// }
// const x =makePlusFunction(5)
// console.log(x(10));

// function sevenBoom(listOfNums)
// (function () {
//     console.log('hello');
    
//   })();

// function convertToArray(funcstr){
//   const paramStart= funcstr.indexOf("(");
//   const paramEnd= funcstr.indexOf(")")
//   const funcParam= funcstr.slice(paramStart+1,paramEnd) 

// const bracketStart = funcstr.indexOf("{");
// const funcBody=funcstr.slice(bracketStart);
// console.log(funcBody);
// const arrowStr=`(${funcParam})=> ${funcBody}`;
// if(funcstr.includes("function "(")||funcStr.includes("function (")

//Arrays
// const fruit= "apple-banana-orange-mango-kiwi-peach".split("-")
// fruit.splice(3,0,"volvo")
// // console.log(fruit);
// const btnEl=document.querySelector("button")
// const mainEl=document.querySelector("main")
// const URL="https://picsum.photos/20";
// let start=0;

// function handleClick(){
//     const imgeEl=document.createElement('img');
//     imgeEl.src=URL+start;
//     start+=1;
//     imgeEl.src=URL;
//     imgeEl.setAttribute('alt',"random image")
//     imgeEl.style.width='100px'
// mainEl.appendChild(imgeEl)


// }
// btnEl.addEventListener("click",handleClick)
function encrypt(string) {
    function generateKey() {
      const rn = Math.ceil(Math.random() * 1000);
      return rn;
    }
  
    function textIncrement(text, key) {
      let alphabets = "abcdefghijklmnopqrstuvwxyz";
      //   const capsAlphabets = alphabets.toUpperCase();
  
      let encrypted = "";
  
      for (let char of text) {
        // If it is a special character
        if (
          !alphabets.includes(char) &&
          !alphabets.toUpperCase().includes(char)
        ) {
          encrypted += char;
          continue;
        }
  
        // Find index or -1
        let index = alphabets.indexOf(char);
  
        // This will run if the alphabet is uppercase
        if (index === -1) {
          alphabets = alphabets.toUpperCase();
          index = alphabets.indexOf(char);
        }
  
        // Construct new index
        let newIndex = index + key;
  
        // Check for range
        if (newIndex > 25) {
          newIndex %= 26;
        }
  
        const newChar = alphabets[newIndex];
  
        encrypted += newChar;
  
        // Convert alphabets back to lowercase
        alphabets = alphabets.toLowerCase();
      }
  
      return encrypted;
    }
  
    const finalKey = generateKey();
    const finalStr = textIncrement(string, finalKey);
    return {
      str: finalStr,
      key: finalKey,
    };
  }
  
  const x = encrypt("-Hey tom-");
  console.log(x);





