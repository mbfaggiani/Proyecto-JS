const renderProducto = () => {
    const producto = cargarProducto();
    let salida = `<div class="col-4">
                    <img src="images/productos/${producto.imagen}" alt="${producto.nombre}" class="img-fluid ps-3">
                  </div>
                  <div class="col-8">
                    <h4 id="colorTexto" >${producto.nombre}</h4>
                    <p class="pt-1 pb-1">${producto.descripcion}</p>
                    <p>$${producto.precio}</p>
                    <p><a href="#" class="btn btn-dark" onClick="agregarAlCarrito(${producto.id});" title="Agregar al Carrito">Agregar al carrito</a></p>
                  </div>`;
    
    document.getElementById("productos_seleccionados").innerHTML = salida;
  }
  
  renderProducto();
  renderBotonCarrito();