//tugas no 3 buat program bebas menggunakan promise

//order pesanan

const orderPesanan = (bayar) =>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            let clear = bayar
            if(clear == true){
                resolve('sudah bayar')
            }else{
                reject('belum bayar')
            }
        })
    })
}
orderPesanan(false)
.then((item)=>{
    console.log(item);
})
.catch((err)=>{
    console.log(err);
})

//cek playlist musik

const cekPlaylist = (playlist) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const dataList = [
        "Rex Orange County",
        "Panturas",
        "Reality Club",
        "The Jansen",
        "Hindia",
      ];
      let cek = dataList.find((item) => {
        return item.toLowerCase().includes(playlist);
      });
      if (cek) {
        resolve(cek);
      } else {
        reject("band yang anda cari tidak ada!");
      }
    }, 2000);
  });
};

cekPlaylist('hindia')
  .then((res) => {
    console.log(res);
  })
  .catch((error) => {
    console.log(error);
  });