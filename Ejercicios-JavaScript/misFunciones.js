/**
 * Descripción
 * @method Nombre de la función
 * @param Parámetro A
 * @param Parámetro B
 * @return Valor que retorna
 */

function cambiarUnidades (id,valor){
if(isNaN(valor)){
alert("Valor invalido"+id);
    document.lasUnidades.unid_metro.value = "";
    document.lasUnidades.unid_pie.value = "";
    document.lasUnidades.unid_yarda.value = "";
    document.lasUnidades.unid_pulgada.value = "";
}else if (id=="metro"){
    document.lasUnidades.unid_pulgada.value = 39.37*valor;
    document.lasUnidades.unid_yarda.value = 1.09*valor;
    document.lasUnidades.unid_pie.value = 3.28*valor;
}else if (id=="pulgada"){
    document.lasUnidades.unid_metro.value = 0.0254*valor;
    document.lasUnidades.unid_pie.value = 0.08*valor;
    document.lasUnidades.unid_yarda.value = 0.02*valor;
}else if (id=="yarda"){
    document.lasUnidades.unid_metro.value = 0.91*valor;
    document.lasUnidades.unid_pie.value = 3*valor;
    document.lasUnidades.unid_pulgada.value = 36*valor;
} else if (id=="pie"){
    document.lasUnidades.unid_metro.value =0.30*valor;
    document.lasUnidades.unid_yarda.value = 0.33*valor;
    document.lasUnidades.unid_pulgada.value = 12*valor;
}

}