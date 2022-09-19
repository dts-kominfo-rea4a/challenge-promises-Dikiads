const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = async (emosi) => {
  const theaterIXX = await promiseTheaterIXX();
  const theaterVGC = await promiseTheaterVGC();
  const gabungtheater = [...theaterIXX, ...theaterVGC]
  let jumlahEmosi = 0;
  gabungtheater.forEach((film) => {
    if (film.hasil === emosi) {
      jumlahEmosi++;
    };
  })

 return jumlahEmosi;
};

console.log(promiseOutput('marah'))
console.log(promiseOutput('tidak marah'))
module.exports = {
  promiseOutput,
};
