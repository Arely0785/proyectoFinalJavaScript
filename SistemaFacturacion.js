
let productos = [];
// Utilicé el 13% porque aquí en mi país se usa ese porcentaje
const porcentajeIva = 13;

let subtotal = 0;

let totalIva = 0;

let total = 0;

function calcularIva(precio){
  let ivaProducto = precio * (porcentajeIva/100);
  totalIva = totalIva + ivaProducto
  return ivaProducto;
}

function agregarProducto(nombre, precio, descuentoTipo){
  let precioDescuento;
  let descuento;
  let ivaProducto;

  if(descuentoTipo){ 
    switch(descuento){
      case 1:
        precioDescuento = precio - (precio * 0.15)
        break;
      case 2:
        precioDescuento = precio - (precio * 0.10)
        break;
      case 3:
        precioDescuento = precio - (precio * 0.05)
          break;
      default:
        precioDescuento = precio - (precio * 0.03)
        break;
    }
  } 
  if (precioDescuento) {
    ivaProducto = calcularIva(precioDescuento);
    subtotal = subtotal + (precioDescuento - ivaProducto);
    total = total + precioDescuento;
  } else {
    ivaProducto = calcularIva(precio)
    subtotal = subtotal + (precio - ivaProducto);
    total = total + precio;
  }

  const producto = {
    nombre: nombre,
    precio,
    precioFinal: precioDescuento ? precioDescuento : undefined,
    valorIva: ivaProducto 
  };
  productos.push(producto);
};

let sumaTotal;
let sumaIva;
let sumaPrecioFinal;

for (let i = 0; i < productos; i++) {
  sumaTotal = producto[i]
} 

// Codigo elaborado por Miriam Arely Martinez Campos