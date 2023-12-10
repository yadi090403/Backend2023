const myPromise = new Promise((resolve, reject) => {
    // Operasi asinkron
    const success = true;
  
    if (success) {
      resolve("Berhasil!"); // Panggil resolve jika operasi berhasil
    } else {
      reject("Gagal!"); // Panggil reject jika operasi gagal
    }
  });
  
  // Menggunakan Promise
  myPromise
    .then((result) => {
      console.log(result); // Tindakan ketika Promise terpenuhi (fulfilled)
    })
    .catch((error) => {
      console.error(error); // Tindakan ketika Promise ditolak (rejected)
    });