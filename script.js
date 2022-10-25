alert("Bienvenido a tierra musical");


let menu = prompt("Ingresa tu opcion: 1.Ver productos en descuentos  2.Quieres comprar? ")
const carrito = [
    { nombre: 'Micrófono dinámico Shure MV7', precio: 500},
    { nombre: 'Batería Electrónica TD-17KV', precio: 200},
    { nombre: 'Cable Crossover Roland Systems', precio: 700, descuento: true},
    { nombre: 'Micrófono dinámico Shure MV7', precio: 600},
    { nombre: 'Bajo Fender PRX', precio: 50, descuento: true},
    { nombre: 'Guitarra eléctrica Fender PRS SE', precio: 500},
]
switch(menu){
    case "1": 
        for(let i = 0; i <= 10; i++) {
            if(carrito[i].descuento) {
                console.log(`El articulo ${carrito[i].nombre} Tiene descuento...`);
                continue;
            }
            console.log(carrito[i].nombre);
        }
    break;

    case "2": 
        let edad = prompt("Introduce tu edad: ");

        if (edad > 0 && edad < 18) {
            alert("Eres menor de edad. No puedes comprar");
        }
        
        else{
            alert("Eres mayor de edad. Puedes comprar");
        };
        break;
}