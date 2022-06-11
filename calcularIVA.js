// En El Salvador el IVA es el 13%

const porcentajeIVA = 0.13;
let valorFinal;

function calculoIVA(valorInicial){
    let impuesto = valorInicial * porcentajeIVA;
    valorFinal = valorInicial + impuesto;
    console.log("RESUMEN:");
    console.log(`Valor Inicial: $ ${valorInicial}`)
    console.log(`IVA: $ ${impuesto}`)
    console.log(`Valor Final: $ ${valorFinal}`)
};