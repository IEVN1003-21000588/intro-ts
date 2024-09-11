function sumar(){
    let suma = 0;
    for (let i = 0; i < 10; i++){
        suma += i;
    }
    console.log(suma);
}
sumar();

function resta(a:number, b:number):number{
    return a - b;
}
console.log(10, 5);

interface Mascotas{
    nombre: string,
    edad: number,
    raza: string
    mostrarEdad:()=>void;

}

let perro:Mascotas = {
    nombre: 'Rayito',
    edad: 3,
    raza: 'Pastor Alemán',
    mostrarEdad(){
        console.log(`La edad es ${this.edad}`)
    }
    
}

function calcular(mascota:Mascotas, x:number):void{
    mascota.edad+=x;
    console.log(mascota);
}

calcular(perro, 4);

