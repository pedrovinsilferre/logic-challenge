function invert(str) {
  const palavra = str.split("");
  const mix = palavra.reverse();
  const conver = mix.join("");

  return conver;
}

const string = "Pedro Vinicius da Silva Ferreira";
const inverter = invert(string);
console.log(inverter);
