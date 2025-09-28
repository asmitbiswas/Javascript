const Naruto_Aot_heros = ["Tsunade", "Eren", "sasuke"]
const ds_Heros = ["Tanjiro", "Inosuke", "Zenitsu"]

 Naruto_Aot_heros.push(ds_Heros)

 console.log(Naruto_Aot_heros);
 console.log(Naruto_Aot_heros[3][1]);

const allHeros = Naruto_Aot_heros.concat(ds_Heros)
 console.log(allHeros);

const all_new_heros = [...Naruto_Aot_heros,  ...ds_Heros]

 console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);

console.log(Array.isArray("Asmit"));
console.log(Array.from("Asmit"));
console.log(Array.from({name:"Asmit"}));

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3))




