import {AreaCirculo, AreaRectangulo, AreaPentagono} from "./Practica-2-area";

class VolumenCilindro extends AreaCirculo{
    private hcilindro: number;
    constructor(pi:number, radio1:number, hcilindro:number){
        super(pi, radio1);
        this.hcilindro = hcilindro
    }

    calcularVolumen(){
        const volumen1 = (this.pi * (this.radio1**2)) * this.hcilindro;
        console.log(`El volumen del cilindro es: ${volumen1}`);
    }

    imprimir(){
        console.log(`Los elementos para sacar el volumen del cilindro son: 
            pi = ${this.pi}, r = ${this.radio1} y h = ${this.hcilindro}`);
    }
}
const cilindro=new VolumenCilindro(3.1416, 3, 10);//se manda llamar la clase
cilindro.imprimir();
cilindro.calcularVolumen();

class VolumenPrismaRec extends AreaRectangulo{
    private largorec: number;
    constructor(base:number, altura:number, largorec:number){
        super(base, altura);
        this.largorec = largorec
    }

    calcularVolumen2(){
        const volumen2 = this.base * this.altura * this.largorec;
        console.log(`El volumen del prisma rectángular es: ${volumen2}`);
    }

    imprimir(){
        console.log(`Los elementos para sacar el volumen del prisma rectangular son: 
            b = ${this.base}, a = ${this.altura} y l = ${this.largorec}`)
    }
}
const prismarec=new VolumenPrismaRec(15, 7, 12);//se manda llamar la clase
prismarec.imprimir();
prismarec.calcularVolumen2();

class VolumenPrismaPentagonal extends AreaPentagono{
    private hpenta: number;
    constructor(lado:number, apotema:number, hpenta:number){
        super(lado, apotema);
        this.hpenta = hpenta
    }

    // Método para calcular el área de la base pentagonal
    private calcularAreaBase(): number {
        const perimetro = this.lado * 5; // Perímetro de un pentágono regular es 5 veces la longitud de un lado
        const areaBase = (perimetro * this.apotema) / 2; // Fórmula del área de un pentágono regular
        return areaBase;
    }

    public calcularVolumen3(): void {
        const areaBase = this.calcularAreaBase();
        const volumen3 = areaBase * this.hpenta; // Volumen = Área de la base * Altura del prisma
        console.log(`El volumen del prisma pentagonal es: ${volumen3}`);
    }

    imprimir(){
        console.log(`Los elementos para sacar el volumen del prisma pentagonal son: 
            lado = ${this.lado}, apotema = ${this.apotema} y h = ${this.hpenta}`)
    }
}
const prismaPentagonal = new VolumenPrismaPentagonal(5, 3.44, 10); // lado = 5, apotema = 3.44, altura = 10
prismaPentagonal.imprimir();
prismaPentagonal.calcularVolumen3();