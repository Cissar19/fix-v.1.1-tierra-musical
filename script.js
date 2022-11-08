class Producto {
    constructor(nombre, precio, disponible) {
        this.nombre =nombre;
        this.precio =precio;
        this.disponible =disponible;
    }
}
const producto01 = {
    nombre:"fender standard stratocaster", 
    precio: 5000,
    disponible:true
}
const producto02 = new Producto("Batería Electrónica TD-17KV",9000,true);
const producto03 = new Producto("Micrófono dinámico Shure MV7",1000,true);
const producto04 = new Producto("Guitarra eléctrica Fender PRS SE",8760,true);
const producto05 = new Producto("BASS BN5 TRANSPARENT RED 2023",3200,true);
const producto06 = new Producto("Funda Guitarra Electrica Gator 4G 20mm Negro",56000,true);
const producto07 = new Producto("Pedal Efecto Guitarra Fender Compugilist",6700,true);

const inventario = [];

inventario.push(producto01);
inventario.push(producto02);
inventario.push(producto03);
inventario.push(producto04);
inventario.push(producto05);
inventario.push(producto06);
inventario.push(producto07);





    function questionMenu(){
        let menuRes = prompt(" 1.- Solo quiero mirar \n 2.- Quieres ver todo nuestro catologo ?")
        if (menuRes == 1){
            alert("Disfruta lo que verás, te encantara!")     
            }
        else {
            console.table(inventario);
            const BuyRes01 = prompt("Ingresa el indice del elemento que quieres comprar");
                if( BuyRes01 <= 6 ){
                    alert(`Felicitaciones acabas de comprar el articulo con indice ${BuyRes01 }`)
                }
                else{alert("El articulo que seleccionaste no se encuentra disponible")}
                
        }
    
    }

alert("Bienvenido a tierra musical a continuacion te mostraremos nuestro catalogo en la consola.");
questionMenu();



