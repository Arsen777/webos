loadWebAssembly('../math.calc/math.calc.wasm')
  .then(
    instance => {
      let exports = instance.exports; // the exports of that instance

      console.log('Log ::: exports', exports);

      let add = exports._add; // the "add" function (note "_" prefix)

      let sub = exports._sub; // the "sub" function (note "_" prefix)

      let dev = exports._dev; // the "dev" function (note "_" prefix)

      let mul = exports._mul; // the "mul" function (note "_" prefix)

      let fib = exports._fib; // the "fib" function (note "_" prefix)

      console.log('Log ::: Result from binary \'add\' ::: ', add(10, 3));
      console.log('Log ::: Result from binary \'sub\' ::: ', sub(10, 3));
      console.log('Log ::: Result from binary \'dev\' ::: ', dev(10, 3));
      console.log('Log ::: Result from binary \'mul\' ::: ', mul(10, 3));
      console.log('Log ::: Result from binary \'fib\' ::: ', fib(15));
    }
  )
  .catch(
    err => {
      console.log('Error ::: ', err);
    }
  );