class Persona3{ //clase Padre
    protected nombre: string;
    protected edad: number;
    constructor(nombre: string, edad:number){
        this.nombre = nombre;
        this.edad = edad;
    }
    imprimir(){ //acción de imprimir los resultados
        console.log(`Hola mi nombre es ${this.nombre} y tengo ${this.edad} años`)

    }
}

class Empleado extends Persona3{
    private sueldo: number; //propiedad de la clase Empleado
    constructor(nombre:string, edad:number, sueldo:number){ //nombre y edad pertenecen a Persona3
        super(nombre, edad);
        this.sueldo=sueldo
    }
    imprimir(){
        console.log(`Sueldo ${this.sueldo}`)
    }
    pagarImpuesto(){
        if(this.sueldo>5000)
            console.log(`${this.nombre} debes pagar impuestos NOW`)
        
        else
            console.log(`${this.nombre} no debe pagar impuestos`)
        
    }
}

const persona3=new Persona3('Juan', 34); //pasa el nombre y la edad de la persona3
persona3.imprimir();//se manda imprimir

const empleado3=new Empleado('Ana', 22, 7000);//se manda llamar la clase
empleado3.imprimir();
empleado3.pagarImpuesto();

//Crear un programa que te ayude a realizar la ecuación cuadrática(formula general)
//crear un programa que permita calcular el volumen y el área de: cilindro, el pentágono, 
//prisma pentagonal, circulo, rectángulo y prisma rectangular