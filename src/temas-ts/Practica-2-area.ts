export class AreaCirculo{
    protected pi: number;
    protected radio1: number;
    constructor(pi:number, radio1:number){
        this.pi = pi;
        this.radio1 = radio1;
    }

    public calcularArea(){
        const area1 = this.pi * (this.radio1**2);
        console.log(`El área del circulo es: ${area1}`);

    }

    imprimir(){
        console.log(`Los elementos para sacar el área del circulo son: pi = ${this.pi} y r = ${this.radio1}`);
    }
}

const circulo = new AreaCirculo(3.1416, 5); // lado = 5, apotema = 3.44
circulo.calcularArea();
circulo.imprimir();

export class AreaRectangulo{
    protected base: number;
    protected altura: number;

    constructor(base:number, altura:number){
        this.base = base;
        this.altura = altura;
    }

    public calcularArea2(){
        const area2= this.base * this.altura;
        console.log(`El área del rectángulo es: ${area2}`);

    }

    imprimir(){
        console.log(`Los elementos para sacar el área del rectángulo son: base = ${this.base}, altura = ${this.altura}`)
    }
}
const rectangulo = new AreaRectangulo(17, 35); // lado = 5, apotema = 3.44
rectangulo.calcularArea2();
rectangulo.imprimir();

export class AreaPentagono{
    protected lado: number;
    protected apotema: number;

    constructor(lado: number, apotema: number) {
        this.lado = lado;
        this.apotema = apotema;
    }

    public calcularArea3() {
        const perimetro = this.lado * 5; // El perímetro de un pentágono regular es 5 veces la longitud de un lado
        const area = (perimetro * this.apotema) / 2;
        console.log(`El área del pentágono es: ${area}`);
    }

    imprimir(){
        console.log(`Los elementos para sacar el área del pentágono son: lado = ${this.lado}, apotema = ${this.apotema}`)
    }
}
const pentagono = new AreaPentagono(5, 3.44); // lado = 5, apotema = 3.44
pentagono.calcularArea3();
pentagono.imprimir();