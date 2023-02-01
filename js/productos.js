const productos = [
  
    {id: 1, nombre: "Helado de 1 kilo", precio: 2000, imagen: "kilo.PNG", descripcion: "Seleccione hasta 4 sabores de helado"},
    {id: 2, nombre: "Helado de 1/2 kilo", precio: 1000, imagen: "medio.jpeg", descripcion: "Seleccione hasta 3 sabores de helado"},
    {id: 3, nombre: "Helado de 1/4 kilo", precio: 500, imagen: "cuarto.PNG", descripcion: "Seleccione hasta 2 sabores de helado"},
    {id: 4, nombre: "Bomba helada", precio: 500, imagen: "bombas.png", descripcion: "Trufa helada"},
    {id: 5, nombre: "Cono helado", precio: 500, imagen: "cono.jpg", descripcion: "Cucurucho relleno de helado bañado en chocolate"},
    {id: 6, nombre: "Alfajor helado", precio: 500, imagen: "alfajor.png", descripcion: "Cucurucho relleno de helado bañado en chocolate"},
    {id: 7, nombre: "Cubanito helado", precio: 500, imagen: "cubanito.png", descripcion: "Barquillo bañado en chocolate negro relleno de helado"}]
    
  
  const guardarProductosLS = (productos) => {
    localStorage.setItem("productos", JSON.stringify(productos));
  }
  
  const cargarProductosLS = () => {
    return JSON.parse(localStorage.getItem("productos")) || [];
  }
  
  guardarProductosLS(productos);
  