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


//Variables de cantidad de productos
var pase_dia = parseInt(document.getElementById('pase_dia').value);
var pase_completo = document.getElementById('pase_completo').value;
var pase_dosdias = document.getElementById('pase_dosdias').value;
var cantCamisa = document.getElementById('camisa_evento').value;
var cantEtiqueta = document.getElementById('etiquetas').value;
// var cantRegalo
const calcularBtn = document.getElementById('calcular');
const pagar = document.getElementById('btnRegistro');


//Funcion para calcular resumen
calcularBtn.addEventListener('click', function() {
    var total = (pase_dia * precio_pase_dia) + 
    (pase_completo * precio_pase_completo) + 
    (pase_dosdias * precio_pase_dosdias) + 
    (cantCamisa * precio_camisa) + 
    (cantEtiqueta * precio_etiqueta);

    console.log(pase_dia);
})
