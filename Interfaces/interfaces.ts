interface Usuario{
    nombre: string;
    password: string;
    confirmarPassword?:string;
}

let usuario1: Usuario = {nombre:"Diego",password:"1234"};

console.log(usuario1);
console.log(usuario1.nombre);

interface Abordar{
    abordarTransporte():void;
}

let avion:Abordar = {
    abordarTransporte:function(){
        console.log("Abordando");
        
    }
}

avion.abordarTransporte();