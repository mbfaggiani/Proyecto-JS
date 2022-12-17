alert("Hola! Hace tu pedido a continuacion");

//Defino Array de Productos
const productos = [{
        id: 1,
        nombre: "1 Kg de helado",
        precio: 2100
    },
    {
        id: 2,
        nombre: "1/2 Kg de helado",
        precio: 1700
    },
    {
        id: 3,
        nombre: "1/4 Kg de helado",
        precio: 900
    },
];

//Defino Array de Productos del Carrito
const productos_carrito = [];

// Defino la Clase Producto
class Producto {
    constructor(id, nombre, precio) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.iva = 21;
    }

    aplicarIVA() {
        this.precio = this.precio + ((this.precio * this.iva) / 100);
    }
}

// Declaro la función Buscar Producto
function buscarProducto(id) {
    return (productos.find(item => item.id === id) || null);
}

// Declaro la función Agregar Producto al Carrito
function agregarProducto(producto) {
    productos_carrito.push(producto);
}

// Declaro la función Eliminar Producto del Carrito
function eliminarProducto(id) {
    let pos = productos_carrito.findIndex(item => item.id === id);

    if (pos > -1) {
        productos_carrito.splice(pos, 1);
    }
}

// Recorro los Productos del Catálogo
function recorrerProductos() {
    let contenido_productos = "";

    for (let producto of productos) {
        contenido_productos += producto.id + "- " + producto.nombre + " $" + producto.precio + "\n";
    }

    return contenido_productos;
}

// Recorro los Productos del Carrito
function recorrerProductosCarrito() {
    let contenido_productos = "";

    for (let producto of productos_carrito) {
        contenido_productos += producto.id + "- " + producto.nombre + " $" + producto.precio + "\n";
    }

    return contenido_productos;
}

// Realizo la carga de Productos de Catálogo
let cargarProducto = true;

// Realizo la carga de Productos en el Carrito
cargarProducto = true;

while (cargarProducto) {
    let contenido_productos = recorrerProductos();

    // Indico el ID del Producto
    let id_producto = parseInt(prompt("Selecciona el producto a agregar al carrito:\n\n" + contenido_productos))
    // Buscar el Producto
    let producto = buscarProducto(id_producto);
    // Verifico si el Producto seleccionado es válido
    if (producto != null) {
        // Agregar el Producto seleccionado al Carrito
        agregarProducto(producto);
    } else {
        alert("No existe el producto con el ID: " + id_producto + "!");
    }
    // Pregunto si deseo continuar cargando Productos al Carrito
    cargarProducto = confirm("Desea agregar otro producto al carrito?");
}

// Realizo la eliminación de Productos que no deseo que estén en el carrito
cargarProducto = true;

while (cargarProducto) {
    let contenido_productos = recorrerProductosCarrito();

    // Indico el ID del Producto
    let id_producto = parseInt(prompt("Seleccione el producto que desea eliminar del carrito: \n\n" + contenido_productos));

    // Valido si existe el ID del Producto
    if (id_producto > 0) {
        //Eliminar el Producto del Carrito
        eliminarProducto(id_producto);
    } else {
        alert("No existe el producto con el ID: " + id_producto + "!");
    }

    // Pregunto si deseo continuar eliminando productos del carrito
    cargarProducto = confirm("Desea eliminar otro producto del carrito?");
}

// Imprimo el total de productos de mi carrito
let suma_total = 0;
let contenido_productos = "";

for (let prod of productos_carrito) {
    // Creo una nueva instancia de la Clase Producto
    let producto = new Producto(prod.id, prod.nombre, prod.precio);
    producto.aplicarIVA(); // Aplico el método aplicar IVA
    contenido_productos += producto.id + "- " + producto.nombre + " $" + producto.precio + "\n";
    suma_total += producto.precio;
}

// Muestro el Total a Pagar
alert("Productos Seleccionados:\n\n" + contenido_productos + "\n\nTotal a Pagar: $" + suma_total);
alert("Muchas gracias por tu compra!")