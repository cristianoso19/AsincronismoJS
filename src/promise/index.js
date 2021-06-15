// Se usa ES6
const somethingWillHappen = () => {
  // Retorna nueva promesa
  return new Promise((resolve, reject) => {
    if (true) {
      resolve("Hey!");
    } else {
      reject("Whooops!");
    }
  });
};

somethingWillHappen()
    .then((response) => console.log(response))
    .catch((err) => console.error(err));

const somethingWillHappen2 = () => {
  return new Promise((resolve, reject) => {
    if (true) {
      setTimeout(() => { resolve("True"); }, 2000);
    } else {
      // Un mejor debugging por que esto nos retornara
      // un error mas completo
      const error = new Error("Whoop!");
      reject(error);
    }
  });
};

somethingWillHappen2()
    .then((response) => console.log(response))
    .catch((err) => console.error(err));
// como correr varias promesas encadenadas
// usamos Promise.all
// Corre promesas
// Regresa un arreglo con las respuestas de
// ambas promesas
Promise.all([somethingWillHappen(), somethingWillHappen2()])
  .then((response) => {
  console.log("Array of results", response);
  })
  .catch((err) => {
    console.error(err);
  });
