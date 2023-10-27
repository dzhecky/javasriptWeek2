//tugas no 4 fetching nama saja

// fetch('https://jsonplaceholder.typicode.com/users')

// .then((response) =>{
//     return response.json()
// })
// .then((item)=>{
//     item.map((result)=>{
//         console.log(`name : ${result.name}`);
//     });
// })
// .catch((err)=>{
//     console.log(err);
// })

const url = 'https://jsonplaceholder.typicode.com/users'

let result = async (link) =>{
    let cek = await fetch(link)
    let response = await cek.json()
    return response
}

result(url)
.then((item)=>{
    item.map((res)=>{
        console.log(res.name);
    })
})
.catch((err)=>{
    console.log(err);
})