const renderProducto = () => {
    const producto = cargarProducto();
    let salida = `<div class="col-4">
                    <img src="images/productos/${producto.imagen}" alt="${producto.nombre}" class="img-fluid ps-3">
                  </div>
                  <div class="col-8">
                    <h2>${producto.nombre}</h2>
                    <p class="pt-1 pb-1">${producto.descripcion}</p>
                    <p>$${producto.precio}</p>
                    <p><a href="#" class="btn btn-info" onClick="agregarAlCarrito(${producto.id});" title="Agregar al Carrito">Agregar (+)</a></b></p>
                  </div>`;
    
    document.getElementById("producto").innerHTML = salida;
  }
  
  renderProducto();
  renderBotonCarrito();