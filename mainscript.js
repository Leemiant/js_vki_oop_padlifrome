let sl = prompt("Введите текст");
console.log(sl)
let ql = sl.replace(/\s/g, '');
console.log(ql)
let arr1=ql.split('') 
let arr2=ql.split('') // сохраняем
let reversed = arr1.reverse() 
let str1=arr2.join('')// используем 
let str2=reversed.join('') 
let lc1 = str1.toLowerCase()
let lc2 = str2.toLowerCase()
console.log(lc1)
console.log(lc2)
if(lc1==lc2){
  console.log("Палиндром")
}else{
  console.log("Не палиндром")
}
