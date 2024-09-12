class AreaCirculo{
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
        console.log(`Los elementos para sacar el área del circulo son: pi = ${this.pi} y r = ${this.radio1}`)
    }
}

class AreaCilindro{
    protected pi2: number;
    protected radio2: number;
    protected altura: number;
    constructor(pi2:number, radio2:number, altura:number){
        this.pi2 = pi2;
        this.radio2 = radio2;
        this.altura = altura;
    }

    public calcularArea2(){
        const area2= (2*this.pi2*this.radio2*this.altura)+(2*this.pi2*this.radio2**2);
        console.log(`El área del circulo es: ${area2}`);

    }

    imprimir(){
        console.log(`Los elementos para sacar el área del circulo son: pi = ${this.pi2}, r = ${this.radio2} y h = ${this.altura}`)
    }
}

let res1 = new AreaCilindro(13.1416, 5, 10); // Ejemplo de ecuación con raíces complejas: x^2 + 2x + 5 = 0
res1.imprimir();
res1.calcularArea2();