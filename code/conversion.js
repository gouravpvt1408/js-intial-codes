            //    conversitions in js // 


   const score = 34
   console.log(typeof score)          
   console.log(typeof (score)); 

   let valueInNumber = Number(score)
   console.log(typeof valueInNumber)
   console.log(valueInNumber)

   let stringvalue = String(valueInNumber)
   console.log (typeof stringvalue)
   console.log(stringvalue)

   let boolvalue = Boolean(stringvalue)
   console.log(typeof boolvalue)
   console.log(boolvalue)

   console.table([boolvalue,stringvalue,valueInNumber,score])


