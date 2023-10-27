// tugas no 1 by then catch
// const cekHariKerja = (day) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const dataDay = ["senin", "selasa", "rabu", "kamis", "jumat"];
//       let cek = dataDay.find((item) => {
//         return item === day;
//       });
//       if (cek) {
//         resolve(cek);
//       } else{
//         reject(new Error('Hari ini bukan hari kerja!'))
//       }
//     }, 2000);
//   });
// };

// cekHariKerja("sabtu")
//   .then((response) => {
//     console.log(response);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

//tugas no 1 by try catch
const cekHariKerja = (day) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const dataDay = ["senin", "selasa", "rabu", "kamis", "jumat"];
            let cek = dataDay.find((item)=>{
                return item === day
            })
            if(cek){
                resolve(cek)
            }else{
                reject('Hari ini bukan hari kerja!')
            }
      }, 2000);
    });
  };

  const result = async (day) =>{
    try {
        let waiting = await cekHariKerja(day)
        console.log(`Hari ${waiting} adalah kerja`);
    } catch (error) {
        console.log(error);
    }
  }

  result('senin')
  result('sabtu')