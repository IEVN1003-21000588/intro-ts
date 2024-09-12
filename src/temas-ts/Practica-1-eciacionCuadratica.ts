class EcuacionCuadratica{
    protected num1: number;
    protected num2: number;
    protected num3: number;

    constructor(num1: number, num2:number, num3:number){
        this.num1 = num1;
        this.num2 = num2;
        this.num3 = num3;
    }

    public calcularRaices() {
        const ecuacion2 = this.num2 ** 2 - 4 * this.num1 * this.num3;
        if (ecuacion2 > 0) {
            const raiz1 = (-this.num2 + Math.sqrt(ecuacion2)) / (2 * this.num1);
            const raiz2 = (-this.num2 - Math.sqrt(ecuacion2)) / (2 * this.num1);
            console.log(`La ecuación tiene dos raíces: x1 = ${raiz1}, x2 = ${raiz2}`);
        } else if (ecuacion2 === 0) {
            const raiz = -this.num2 / (2 * this.num1);
            console.log(`La ecuación tiene una raíz real de: x = ${raiz}`);
        } else {
            const real = -this.num2 / (2 * this.num1);
            const parteImaginaria = Math.sqrt(-ecuacion2) / (2 * this.num1);
            console.log(`La ecuación tiene dos raíces: x1 = ${real} + ${parteImaginaria}i, x2 = ${real} - ${parteImaginaria}i`);
        }
    }


    public imprimir(){ //acción de imprimir los resultados
        console.log(`Los elementos de la ecuación son: a = ${this.num1}, b = ${this.num2} y c = ${this.num3}`)

    }
}

// Crear una instancia de EcuacionCuadratica
let ecuacion:EcuacionCuadratica;
ecuacion = new EcuacionCuadratica(-3, -2, -1)
ecuacion.imprimir()
ecuacion.calcularRaices();

// Otra instancia con diferentes coeficientes
let ecuacion2 = new EcuacionCuadratica(1, 2, 5); // Ejemplo de ecuación con raíces complejas: x^2 + 2x + 5 = 0
ecuacion2.imprimir();
ecuacion2.calcularRaices();

