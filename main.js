class Productos {
    constructor(id, nombre, precio, img){
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.img = img;
        this.cantidad = 1;
    }
    
};

const calzaanimalblack = new Productos (1,"AnimalBlack", 3500, "../fotos/calzayremeblondie.jpg");
const calzaCamuflada = new Productos(2,"Camuflada", 3000, "../fotos/calzacamuflada.jpg" );
const calzaLeopardoB = new Productos(3,"leopardo Black", 4200,"../fotos/animalblack.jpg");
const calzaDurazno = new Productos(4, "Texturizada Durazno", 4200,"../fotos/calzadurazno.jpg");
const calzaClv = new Productos(5,"calza CLV", 4200,"../fotos/celesterosa.jpg");
const calzaGrafito = new Productos(6,"Grafito", 4200,"../fotos/grisgrafito.jpg");
const calzaStart = new Productos(7,"Start Black", 5700,"../fotos/calzastartblack.jpg");
const calzaLeopardoF = new Productos(8,"Leopardo Fucsia", 4200,"../fotos/animalrosada.jpg");
const biker1 = new Productos(9, "Biker Print",3500,"../fotos/bikeranimaladelante.jpg");
const biker2 = new Productos(10, "Biker Animal", 3500,"../fotos/bikerprintgrisadelante.jpg");
const biker3 = new Productos(11,"Biker Rosa",4200,"../fotos/bikerprintmarronadelante.jpg");
const pescadora1 = new Productos(12, "Pescadora Pasteles", 4200,"../fotos/pescadorapastelesadelante.jpg");
const pescadora2 = new Productos(13," pescadora b&w", 4200,"../fotos/calzapesb&w.jpg");
const short1 = new Productos(14, "Shor Caricaturas", 3500,"../fotos/shortcaricaturaatras.jpg");
const short2 = new Productos(15, "short flores pateles", 3500,"../fotos/shortflores222.jpg");
const short3 = new Productos(16, "short humo", 3500,"../fotos/shorthumoyremeadelante.jpg");
const top1 = new Productos(17, "yoga", 3500,"../fotos/fitness-6996772_960_720.jpg");
const top2 = new Productos(18, "fuerza", 3500,"../fotos/womantop.jpg");
const top3 = new Productos(19, "encofrado rosa", 3200,"../fotos/toprosaencofrado.jpg");
const top4 = new Productos(20, "MAMBO",3200,"../fotos/photo_5082548811167017934_y.jpg");
const top5 = new Productos(21, "top bloondlie", 3500,"../fotos/topanimaladelante.jpg");
const top6 = new Productos(22, "encofrado lila", 3200,"../fotos/topencofradolila.jpg");
const top7 = new Productos(23, "ecofrado fit",3200,"../fotos/topencofradoceleste.jpg");
const top8 = new Productos(24, "Vibora", 3500,"../fotos/topviboraadelante.jpg");
const remera1 = new Productos(25,"crotop azul",1600,"../fotos/crotopazul.jpg");
const remera2 = new Productos(26, "crotop bordo",1600,"../fotos/crotopbordo.jpg");
const remera3 = new Productos(27,"crotop rosa",1600,"../fotos/crotoprosa.jpg");
const remera4 = new Productos(28,"remera carita",1800,"../fotos/remecaritaadelante.jpg");
const remera5 = new Productos(29,"musculosa Air wind",3200 ,"../fotos/musconegraadelante.jpg");
const remera6 = new Productos(30,"musculosa basica blanca",1800,"../fotos/muscublanca.jpg");
const remera7 = new Productos(31,"musculosa basica beige",1800,"../fotos/muscubeige.jpg");
const remera8 = new Productos(32,"musculosa Air wind gris",3200,"../fotos/airdwind.jpg");



const producto = [
    calzaanimalblack,
    calzaCamuflada,
    calzaLeopardoB,
    calzaDurazno,
    calzaClv,
    calzaGrafito,
    calzaStart,
    calzaLeopardoF,
    biker1,
    biker2,
    biker3,
    pescadora1,
    pescadora2,
    short1,
    short2,
    short3,
    top1,
    top2,
    top3,
    top4,
    top5,
    top6,
    top7,
    top8,
    remera1,
    remera2,
    remera3,
    remera4,
    remera5,
    remera6,
    remera7,
    remera8
];

let carrito = [];

const ropaUmma = document.getElementById("ropaUmma"); 

const mostrarRopa = () => {
    producto.forEach((producto) => {
        const card = document.createElement("div");
        card.classList.add("col-xl-3", "col-md-6","col-sm-12");
        card.innerHTML = `
        <div class="card mt-5">
            <img src ="${producto.img}" class="card-img-top " alt="${producto.nombre}">
            <div class="card-body">
            <h3 class="card-title">${producto.nombre}</h3>
            <p class="card-text">${producto.precio}</p>
            <button class="btn colorBoton" id="boton${producto.id}">Agregas al carrito</button>
            </div>
        </div>
        `
        ropaUmma.appendChild(card);

        const boton = document.getElementById(`boton${producto.id}`);
        boton.addEventListener("click",() =>{
            agregarAlCarrito(producto.id)
        
        })
    })
}

const agregarAlCarrito = (id) => {
    const producto1 = producto.find((producto1) => producto1.id === id);
    const agregadoAlCarrito = carrito.find((producto1) => producto1.id === id);
    if(agregadoAlCarrito){
        agregadoAlCarrito.cantidad++;
    }else {
        carrito.push(producto1);
        localStorage.setItem("carrito",JSON.stringify(carrito));
    }
}
mostrarRopa();


const divCarrito = document.getElementById(("divCarrito"));
const verCarrito = document.getElementById("verCarrito");

verCarrito.addEventListener("click", () => {
    mostrarCarrito(); 
});


const mostrarCarrito = () => {
    divCarrito.innerHTML="";
    carrito.forEach((producto) => {
            const card = document.createElement("div");
            card.classList.add("col-xl-3", "col-md-6","col-sm-12");
            card.innerHTML = `
            <div class="card mt-5">
            <img src ="${producto.img}" class="card-img-top " alt="${producto.nombre}">
            <div class="card-body">
            <h3 class="card-title">${producto.nombre}</h3>
            <p class="card-text">${producto.precio}</p>
            <p class="card-text">${producto.cantidad}</p>
            <button class="btn colorBoton" id="eliminar${producto.id}">Eliminar</button>
            </div>
            </div>`
            divCarrito.appendChild(card);

            const boton = document.getElementById(`eliminar${producto.id}`);
            boton.addEventListener("click",()=> {
                eliminarProducto(producto.id);
            })
    })
}

const eliminarProducto = (id) => {
    const producto = carrito.find((producto) => producto.id === id);
    const indice = carrito.indexOf(producto);
    carrito.splice(indice,1);
    mostrarCarrito();
    localStorage.setItem("carrito",JSON.stringify(carrito));
}


const vaciar = document.getElementById("vaciar");

vaciar.addEventListener("click", () => {
    vaciarTodoElCarrito();
})

const vaciarTodoElCarrito = () => {
    carrito = [];
    mostrarCarrito();
}