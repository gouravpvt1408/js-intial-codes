                                   

                                //    JavaScript engines have two places to store data: 

                                //    Stack: It is a data structure used to store static data. 

                                // Static data refers to data whose size is known by the engine during compile time.
                                //  In JavaScript, static data includes primitive values like strings, numbers,
                                //  boolean, null, and undefined. References that point to objects and functions 
                                // are also included. A fixed amount of memory is allocated for static data.
                                //  This process is known as static memory allocation.



                                // //    Heap: It is used to store objects and functions in JavaScript.
                                //  The engine doesn’t allocate a fixed amount of memory. Instead, 
                                // it allocates more space as required.


            //   STACK
            
            let myName = "gourav"

            let anotherName=myName
                anotherName="Zishan"

                console.log(myName,anotherName)
               


                let user1={
                    email:"gaurav@1425"
                              }

                 let user2=user1 
                 
                 user2.email="Zampa@34500"

                 console.log(user1,user2)