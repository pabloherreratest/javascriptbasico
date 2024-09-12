const paises = ["Colombia","México","Argentina","Perú"];


console.log("Listado original");
console.table(paises);


console.log("Método .push()");
paises.push("Brasil");
console.table(paises);

console.log("Método .unshift()");
paises.unshift("Ecuador");
console.table(paises);

console.log("Método .shift()");
let eliminado = paises.shift();
console.log("Pais eliminado: ", eliminado);
console.table(paises);

console.log("Método .pop()");
eliminado = paises.pop();
console.log("Pais eliminado: ", eliminado);
console.table(paises);

console.log("Método .sort()");
paises.sort();
console.table(paises);