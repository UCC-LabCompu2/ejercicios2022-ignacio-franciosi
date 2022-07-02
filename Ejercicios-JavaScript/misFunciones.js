/**
 * Conversor de unidades de metros, yardas, pies y pulgadas
 * @method cambiarUnidades
 * @param {string} id - el id de los inputs
 * @param {number} valor - el valor de los inputs de metros, yardas, pies y pulgadas
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



function convertirGR(id){
var gra,rad;
if(id=="grados"){
    gra=document.getElementById("grados").value;
    rad=(gra* Math.PI)/180;
}else if (id=="radianes"){
    rad=document.getElementById("radianes").value;
    gra=(rad*180)/Math.PI;
}
    document.getElementById("grados").value=gra;
    document.getElementById("radianes").value=rad
}


function mostrar_ocultar(valorMO){
if (valorMO=="val_mostrar"){
    document.getElementById("divMO").style.display = "block";
}else if(valorMO=="val_ocultar"){
    document.getElementById("divMO").style.display = "none";
}


}


function dibujarImagen(posX,posY) {
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");

    console.log(posX, posY);
    canvas.width = canvas.width;
    var img = new Image();
    img.src = "images/auto.png";

    canvas.width = canvas.width
    img.onload = function () {
        ctx.drawImage(img, posX, posY);
    }
}

function dibujarCircCuad() {
    var canvas = document.getElementById("myCanvasCirCuad");
    var ctx = canvas.getContext("2d");
//rectangulo
    var yMax = canvas.height;
    var margen = 5;
    ctx.fillStyle = "#333899";
    ctx.fillRect(0+margen, yMax-40-margen, 40, 40);

    //circulo
    var xMax = canvas.width;
    ctx.arc(xMax/2, yMax/2, 20, 0, 2*Math.PI);
    ctx.stroke();//dibujar
    ctx.fillStyle = "#a81818";//antes del fill para  cambiar de color
    ctx.fill();//pintar dentro
}

function dibujarCuadriculado() {
    var canvas = document.getElementById("myCanvasCuadri")
    var ctx = canvas.getContext("2d");
    var anchoMax = canvas.width;
    var alturaMax =canvas.height;
// Dibujar lineas horizontales
    ctx.beginPath();
    for (var i = 0; i < alturaMax;) {
        ctx.moveTo(0, i);
        ctx.lineTo(anchoMax, i);
        ctx.strokestyle = "#3e67d9";
        ctx.stroke();
        i = i + 20;
    }
    ctx.closePath();
ctx.beginPath();
    for (var i = 0; i < anchoMax;) {
        ctx.moveTo(i, 0);
        ctx.lineTo(i, alturaMax);
        ctx.strokestyle = "#3e67d9";
        ctx.stroke();
        i = i + 20;
    }

}

function fnSuma() {
    let num1, num2;

    num1 = document.getElementById("nums1").value;
    num2 = document.getElementById("nums2").value;

    document.getElementById("totalS").value = Number(num1) + Number(num2);
}

function fnResta() {
    let num1, num2;

    num1 = document.getElementById("numr1").value;
    num2 = document.getElementById("numr2").value;

    document.getElementById("totalR").value = Number(num1) - Number(num2);
}

function fnProducto() {
    let num1, num2;

    num1 = document.getElementById("numm1").value;
    num2 = document.getElementById("numm2").value;

    document.getElementById("totalM").value = Number(num1) * Number(num2);
}

function fnDivision() {
    let num1, num2;

    num1 = document.getElementById("numd1").value;
    num2 = document.getElementById("numd2").value;

    document.getElementById("totalD").value = Number(num1) / Number(num2);
}
