const productos = [
  
    {id: 1, nombre: "Kilo de helado", precio: 2000, imagen: "kilo.PNG", descripcion: "Seleccione hasta 4 sabores de helado"},
    {id: 2, nombre: "1/2 kg de helado", precio: 1000, imagen: "medio.jpeg", descripcion: "Seleccione hasta 3 sabores de helado"},
    {id: 3, nombre: "1/4 kg de helado", precio: 500, imagen: "cuarto.PNG", descripcion: "Seleccione hasta 2 sabores de helado"}]
  
    const guardarProductosLS = (productos) => {
    localStorage.setItem("productos", JSON.stringify(productos));
  }
  
  const cargarProductosLS = () => {
    return JSON.parse(localStorage.getItem("productos")) || [];
  }
  
  guardarProductosLS(productos);
  