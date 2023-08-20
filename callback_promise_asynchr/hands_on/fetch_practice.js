

// let data=fetch('https://api.github.com/users/DPR-4');
// console.log(data);
// data.then((result) => {
//     alert(result);
// }).catch((err) => {
    
// });

// async function getUsers(names) {
//     let jobs = [];
  
//     for(let name of names) {
//       let job = fetch(`https://api.github.com/users/${name}`).then(
//         successResponse => {
//           if (successResponse.status != 200) {
//             return null;
//           } else {
//             return successResponse.json();
//           }
//         },
//         failResponse => {
//           return null;
//         }
//       );
//       jobs.push(job);
//     }
  
//     let results = await Promise.all(jobs);
  
//     return results;
//   }

//   console.log(getUsers('DPR-4'));


// let data=fetch('https://catfact.ninja/fact')
// data.then(response=>{
//     //console.log("here is ",response.json().fact)
//     return response.json();
    
// })
// .then(data => 
//    { 
//     console.log(data.fact)
//     console.log(data.length)
// }
//  )

//let data = fetch('https://catfact.ninja/fact');
// data.then(response => {
//     return response.json(); // You need to call the json() function
// })
// .then(data => { 
//     console.log(data.fact);
// })
// .catch(error => {
//     console.error('Error fetching cat fact:', error);
// });





// let's see the post request in the fetch part 
//let's do leran it

//code with harry

//post method is use to send data over the server where the 

// fetch('https://jsonplaceholder.typicode.com/todos/1')
//       .then(response => response.json())
//       .then(json => console.log(json))






// .then((response) => response.json())
// .then((json) => console.log(json));



let createtodo= async ()=>{
    let operation={
        method: 'POST',
        body: JSON.stringify({
          title: 'Best sister Anu',
          body: 'love you lot di',
          userId: 1,
    }),
        headers: {
          'Content-type': 'application/json'
        },
    }
    
    let p=await fetch('https://jsonplaceholder.typicode.com/posts', operation)
    let response=await p.json();
    return response

}

let call_man=async()=>{
    let resp=await createtodo();
    console.log(resp);
}

createtodo()
.then((response)=>{
    console.log(response)
})

// console.log(createtodo());
call_man()



let getid=async (id)=>{
    let response= await  fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    let r= await response.json();
    return r;
}

getid(3)
.then((data)=>{
    console.log(data);
})

