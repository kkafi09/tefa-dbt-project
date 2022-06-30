const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});
// waktu bersamaan fungsi pertama
const waktuBersamaan = (angka1, angka2) => {
  const fpb = (a, b) => {
    while (b != 0) {
      let temp = a % b;
      a = b;
      b = temp;
    }

    return a;
  };

  return (angka1 * angka2) / fpb(angka1, angka2);
};

// fungsi waktu bersamaan yang ke dua
const waktuBersamaan2 = (angka1, angka2) => {
  let result = angka1 > angka2 ? angka1 : angka2;

  while (true) {
    if (result % angka1 == 0 && result % angka2 == 0) {
      return result;
    }
    result++;
  }
};

readline.question("Siska jogging tiap berapa hari? ", (rInput1) => {
  readline.question("Anton jogging tiap berapa hari? ", (rInput2) => {
    /**
     * Dapat mengganti fungsi dari waktuBersamaan() menjadi waktuBersamaan2()
     *  */
    let hasil = waktuBersamaan(rInput1, rInput2);
    console.log(
      "Anton dan siska akan jogging pada hari yg sama yaitu : " + hasil
    );
    readline.close();
  });
});
