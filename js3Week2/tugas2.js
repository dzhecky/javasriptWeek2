// tugas no 2 melanjutkan program menggunakan callback

const getMonth = (callback) =>{
    setTimeout(()=>{
        let error = false
        let month = ['january', 'february', 'march', 'april', 'june', 'july', 'august', 'september', 'october', 'november', 'december']
        if(!error){
            callback(null, month)
        } else {
            callback(new Error('sorry data not found'), [])
        }
    }, 4000)
}

getMonth((err, month)=>{
    if(err){
        console.log(err);
        return
    }
    month.map((res)=>{
        console.log(res);
    })
})