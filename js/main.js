const renderProductos = () => {
  const productos = cargarProductosLS();
  let salida = "";
  
    for (let producto of productos) {
      salida += `<div class="col-md-3 mb-3 mt-3">
                  <a href="#" onClick="verProducto(${producto.id});" class="text-decoration-none text-dark">
                    <div class"card">
                      <img src="images/productos/${producto.imagen}" alt="${producto.nombre}" class="card-img-top">
                      <div class="card-body text-left mt-2 bg-white text-black">
                        <h5 class="card-title mb-2" id="colorTexto">${producto.nombre}</h5>
                        <p id="colorTexto">$${producto.precio}</p>
                      </div>
                    </div>
                  </a>
                </div>`;
    }
    document.getElementById("productos").innerHTML = salida;
  }
  
  renderProductos();
  renderBotonCarrito();