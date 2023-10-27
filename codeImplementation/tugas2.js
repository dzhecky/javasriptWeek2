//cek discount

let pijarFood = (harga, voucher, jarak, pajak) => {
  if (typeof harga == "string" || typeof jarak == "string") {
    console.log("harga dan jarak harus berupa number bukan string!");
  } else {
    let voucherDiskon = 0;
    let biayaKirim = 5000;
    if (pajak == true) {
      pajak = (harga * 5) / 100;
    } else {
      pajak = 0;
    }

    if (voucher === "PIJARCAMPFOODS") {
      voucherDiskon = 50000;
      if (harga > 50000) {
        voucherDiskon = (harga * 50) / 100;
      } else {
        console.log("tidak memenuhi minimum belanja untuk memakai voucher");
        return;
      }
    } else if (voucher === "DITRAKTIRPIJAR") {
      voucherDiskon = 30000;
      if (harga > 25000) {
        voucherDiskon = (harga * 60) / 100;
      } else {
        console.log("tidak memenuhi minimum belanja untuk memakai voucher");
        return;
      }
    }
    if (jarak > 2) {
      biayaKirim = (jarak - 2) * 3000 + 5000;
    }
    console.log(`Harga : ${harga}`);
    console.log(`Potongan : ${voucherDiskon}`);
    console.log(`Biaya antar : ${biayaKirim}`);
    console.log(`pajak : ${pajak}`);
    console.log(`SubTotal : ${harga - voucherDiskon + biayaKirim + pajak}`);
  }
};

pijarFood(70000, "PIJARCAMPFOODS", 4, true);
