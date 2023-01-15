const renderProductos = () => {
    const productos = cargarProductosLS();
    let salida = "";
  
    for (let producto of productos) {
      salida += `<div class="col-md-2 mb-4 mt-2">
                  <a href="#" onClick="seeproducto(${producto.id});" class="text-decoration-none text-dark">
                    <div class"card">
                      <img src="images/productos/${producto.imagen}" alt="${producto.nombre}" class="card-img-top">
                      <div class="card-body text-center mt-3">
                        <h5 class="card-title mb-2">${producto.nombre}</h5>
                        <p>$${producto.precio}</p>
                      </div>
                    </div>
                  </a>
                </div>`;
    }
    document.getElementById("productos").innerHTML = salida;
  }
  
  renderProductos();
  renderBotonCarrito();