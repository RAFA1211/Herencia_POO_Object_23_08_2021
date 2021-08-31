

class espada{
    constructor(arg){
for(let[id,value]of Object.entries(arg)){
    this[id]=value
}
    }
    atacar(){
        return this.ataque;
    }
}
    class espadaHielo extends espada{

    }


    let data= {
        temperatura:"100°Celsius",
        LargodeLlama: "30 cm",
        efecto: "Quemado persistente"
    }


const inst = new espada({ataque:100});
console.log(inst.atacar())


// const espada = {
//     ataque :30,
//     diametro : "30cm",
//     efecto : undefined,
//     atacar(){
//         return this.ataque;
//     }
// }

// const espadaHielo = Object.create(espada);
// Object.defineProperties(espadaHielo,{
//                         "vida":{
//                             value: "+30",
//                             enumerable: true
//                         },
//                         "efecto":{
//                             value: "Congelar",
//                             enumerable: true
//                         },
//                         "ataque":{
//                             value: espada.ataque += 10,
//                             enumerable: true
//                         }
// });
// espadaHielo.atacar = function(){
//     return `${this.ataque} MOD ${this.efecto} y ${this.vida} vida`;
// }
// console.log(espada.atacar());

class lanzarfuego{
    constructor(arg){
        for(let [id, value] of Object.entries(arg)){
            this[id] = value;
        }
    }
    atacar2(){
        return this.ataque;
    }
}
class bocaDeFuego extends lanzarfuego{
    constructor(arg){
        super(arg);
        this.vida = "+30";
        this.efecto = "Quemado";
        this.ataque="+50";
    }
    atacar2(){
        return `Nivel de Vida ${this.ataque} Estado: ${this.efecto} y con ${this.vida} vida`;
    }
}


let data1 = {
    temperatura:"90°C",
    LargodeLlama: "100cm",
    efecto: "Superquemado"
}
const inst2 = new lanzarfuego(data1);
console.log(inst2.atacar2());
console.log(inst2);

const instFuego = new bocaDeFuego(data1);
console.log(instFuego.atacar2());
console.log(instFuego);