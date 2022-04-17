// let fs=require('fs')

// })

var a=5;
function fn(a){
    console.log(a);
}
fn(a);
// let obj1={
//     name1:"Akash",
//     class1:"sd",
//     faving:"javascript"
// }
// let {name1,class1,faving}=obj1; // using it we can initilization 
// console.log(name1,class1,f);

                // Aysnc-await

// const readThree=async(file1,file2)=>{
//     let a1=fs.readFile(file1,"utf-8");
//     let a2=fs.readFile(file2,"utf-8");
//     let c1=await(a1);
//     console.log(c1);
//     let c2=await(a2);
//     console.log(c2);
// }
// readThree("file1.txt","file2.txt");

                            // map 
        a=[1,2,3,4,5,7,8]

        // let a1=a.map((value)=>{
        //     return value+2;
        // })
        // console.log(a,a1);
    
                // filter
        // let a2=a.filter((value)=>{
        //     return value>6;
        // })
        

        let a3=a.reduce((val1,val2)=>{
            return val1*val2;
        })
        console.log(a3);

        if(1==='1'){
            console.log("i");
        }
        let user = { 
            'name': 'Alex',
            'address': '15th Park Avenue',
            age: 43
        }
        
        let { name, age} = user;
        
        console.log(name, age); // Output, Alex 43