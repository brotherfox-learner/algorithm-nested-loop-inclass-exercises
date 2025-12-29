/* 
ให้เขียน Function ที่ชื่อว่า generatePattern ซึ่งมีคุณสมบัติต่อไปนี้
    1. รับ Parameter 1 ตัวคือ size
        1. size เป็น Data Type ประเภท Number ที่บรรจุตัวเลข 
    2. Function นี้จะนำ size มาสร้างรูปแบบเป็นครึ่งสามเหลี่ยมหัวคว่ำ และ Return ค่าออกมา
    3. เมื่อ Algorithm นี้ทำงานจะเห็นผลลัพธ์ด้านล่าง
*/

// Start coding here
const generatePattern = (num) =>{
    let pattern = ''
    for(let i = num; i > 0; i--){
        for(let j = i; j > 0; j--){
            pattern += '*'
        } pattern += '\n'
    }
    return pattern
}

//Refactor use built in
const generatePattern2 = (num) =>{
    let pattern = ''
    for(let i = num; i > 0; i--){
            pattern += '*'.repeat(i) + '\n'
        }
    return pattern
}

console.log(generatePattern2(3)); 

/* 

* * * 
* * 
*  

*/ 


console.log(generatePattern(5)); 

/*

* * * * * 
* * * * 
* * * 
* * 
* 

*/
