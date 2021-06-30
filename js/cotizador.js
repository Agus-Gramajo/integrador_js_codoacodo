'use strict';

//Variables usuario
var nombre = document.getElementById('nombre').value;
var mail = document.getElementById('email').value;


//Variables de precios
const precio_pase_dia = 30;
const precio_pase_completo = 50;
const precio_pase_dosdias = 45;
const precio_camisa = 10;
const precio_etiqueta = 2;
const porcDesc = 0.93


//Variables para mostrar resumen de pedido
var resumen_pase_dia = document.getElementById('resumen_pase_dia');
var resumen_pase_completo = document.getElementById('resumen_pase_completo');
var resumen_pase_dosdias = document.getElementById('resumen_pase_dosdias');
var resumen_camisa = document.getElementById('resumen_camisa');
var resumen_etiqueta = document.getElementById('resumen_etiqueta');

const calcularBtn = document.getElementById('calcular');
const pagar = document.getElementById('btnRegistro');


//Funcion para calcular resumen
calcularBtn.addEventListener('click', function() {

    //Variables de cantidad de productos
    var pase_dia = document.getElementById('pase_dia').value;
    var pase_completo = document.getElementById('pase_completo').value;
    var pase_dosdias = document.getElementById('pase_dosdias').value;
    var cantCamisa = document.getElementById('camisa_evento').value;
    var cantEtiqueta = document.getElementById('etiquetas').value;


    //Calculo del total
    var total = (pase_dia * precio_pase_dia) + 
    (pase_completo * precio_pase_completo) + 
    (pase_dosdias * precio_pase_dosdias) + 
    (((cantCamisa * precio_camisa * porcDesc)*100)/100) + 
    (cantEtiqueta * precio_etiqueta);
    

    var descuento = "-$ " +  ((cantCamisa * precio_camisa * porcDesc)*100)/100;
    

    //Generacion de resumen

    var detallePedido = document.querySelector('#lista-productos');
    detallePedido.textContent = ('Cantidad de pases por un dia: ' + pase_dia);
    

    //Total
    var importeTotal = document.querySelector('#suma-total');
    importeTotal.textContent = ("$ " + total);
    
   


})

