import {calcularIVA2, Producto} from "./05-desestructura-funciones.ts";

const carrito:Producto[]=[
    {
        desc:'Telefono',
        precio:100
    },
    {
        desc:'Telefono2',
        precio: 150
    },
    {
        desc:'Telefono3',
        precio: 340
    }
]

const[total, iva]=calcularIVA2(carrito);
console.log(`Total: ${total}`);
console.log(`IVA: ${iva}`);
    