const guardarProductosCarrito = (productos) => {
    localStorage.setItem("carrito", JSON.stringify(productos));
  }
  
  const cargarProductosCarrito = () => {
    return JSON.parse(localStorage.getItem("carrito")) || [];
  }
  
  const verProducto = (id) => {
    const producto = buscarProducto(id);
    localStorage.setItem("producto", JSON.stringify(producto));
    location.href = "seleccionados.html";
  }
  
  const cargarProducto = () => {
    return JSON.parse(localStorage.getItem("producto"));
  }
  
  const estaEnElCarrito = (id) => {
    const productos_carrito = cargarProductosCarrito();
  
    return productos_carrito.some(item => item.id === id); 
  }
  
  const agregarAlCarrito = (id) => {
    const productos = cargarProductosLS();
    const productos_carrito = cargarProductosCarrito();
  
    if (estaEnElCarrito(id)) {
      let position = productos_carrito.findIndex(item => item.id === id);
      productos_carrito[position].cantidad += 1;
    }
    else {
      const producto = productos.find(item => item.id === id);
      producto.cantidad = 1;
      productos_carrito.push(producto);
    }
  
    guardarProductosCarrito(productos_carrito);
    renderBotonCarrito();
  }
  
  const eliminarProductoCarrito = (id) => {
    const productos_carrito = cargarProductosCarrito();
    const productos = productos_carrito.filter(item => item.id !== id);
    guardarProductosCarrito(productos);
    renderProductosCarrito();
    renderBotonCarrito();
  }
  
  const vaciarCarrito = () => {
    localStorage.removeItem("carrito");
    renderProductosCarrito();
    renderBotonCarrito();
  }
  
  const totalCarrito = () => {
    const productos_carrito = cargarProductosCarrito();
  
    return productos_carrito.reduce((total, item) => total += item.cantidad, 0);
  }
  
  const subtotal = () => {
    const productos_carrito = cargarProductosCarrito();
  
    return productos_carrito.reduce((total, item) => total += item.cantidad * item.precio, 0);
  }
  
  const sumaCarrito = () => {
    const productos_carrito = cargarProductosCarrito();
  
    return productos_carrito.reduce((total, item) => total += item.cantidad * item.precio, 0);
  }
  
  const renderBotonCarrito = () => {
    let salida = `<button type="button" class="btn btn-cart position-relative">
                    <img src="images/carrito.png" alt="Carrito">
                    <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">${totalCarrito()}</span>
                  </button>`;
    document.getElementById("boton_carrito").innerHTML = salida;
  }
  
  const agregarItemProducto = (id) => {
    const productos_carrito = cargarProductosCarrito();
    let position = productos_carrito.findIndex(item => item.id === id);
    productos_carrito[position].cantidad += 1;
    guardarProductosCarrito(productos_carrito);
    renderProductosCarrito();
    renderBotonCarrito();
  }
  
  const eliminarItemProducto = (id) => {
    const productos_carrito = cargarProductosCarrito();
    let position = productos_carrito.findIndex(item => item.id === id);
    productos_carrito[position].cantidad -= 1;
  
    if (productos_carrito[position].cantidad == 0) {
      eliminarItemProducto(id);
    }
    else {
      guardarProductosCarrito(productos_carrito);
      renderProductosCarrito();
      renderBotonCarrito();
    }
  }
  
  const buscarProducto = (id) => {
    return productos.find(item => item.id === id);
  }
  
  
  function mostrarAlerta() {
    Swal.fire({
      position: 'top-center',
      icon: 'success',
      title: 'Muchas gracias por tu compra!',
      text: 'El pedido ha sido enviado',
      showConfirmButton: false,
      timer: 3000
    })
  }
  document.getElementById("terminar_pedido").addEventListener("click", mostrarAlerta);

