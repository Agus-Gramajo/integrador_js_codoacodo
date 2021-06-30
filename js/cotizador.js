'use strict';


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
var resumen_regalo = document.getElementById('resumen_regalo');
var listaProductos = document.getElementById('lista-productos');



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
    var regalo = document.getElementById('regalo');
    var descuento = (((cantCamisa * precio_camisa)*0.07)*100)/100;


    //Calculo del total
    var total = (pase_dia * precio_pase_dia) + 
    (pase_completo * precio_pase_completo) + 
    (pase_dosdias * precio_pase_dosdias) + 
    (((cantCamisa * precio_camisa * porcDesc)*100)/100) + 
    (cantEtiqueta * precio_etiqueta);    


    //Detalle regalo
    regalo.style.fontStyle = 'italic';
    switch (regalo.value) {
        case '2': resumen_regalo.innerHTML = 'Seleccionaste etiquetas de regalo'
            break;
            case '1': resumen_regalo.innerHTML = 'Seleccionaste pulseras de regalo'
            break;
        default: resumen_regalo.innerHTML = 'Seleccionaste plumass de regalo'
            break;
    }

    
    //Mostra total
    var importeTotal = document.querySelector('#suma-total');
    importeTotal.textContent = ("$ " + total);

    //Mostrar descuento
    var totalDescuento = document.querySelector('#detalle-descuento');
    totalDescuento.textContent = ('-$ ' + descuento);
    totalDescuento.style.fontStyle = 'italic';
    
    //Generacion de resumen
    listaProductos.style.display = 'grid';
    if(pase_dia.value !== '0') {
        resumen_pase_dia.textContent = ('Pases por dia (viernes): ' + pase_dia);
    }else {
        resumen_pase_dia.textContent = ("");
    }
    
    resumen_pase_completo.textContent = ('Pases por todos los dias: ' + pase_completo);
    resumen_pase_dosdias.textContent = ('Pases por dos dias (viernes y sabado): ' + pase_dosdias);
    resumen_camisa.textContent = ('Camisas del evento: ' + cantCamisa);
    resumen_etiqueta.textContent = ('Paquetes de etiquetas: ' + cantEtiqueta);

});

pagar.addEventListener('click', function () {
    //Variables usuario
    var nombre = document.getElementById('nombre').value;
    var mail = document.getElementById('email').value;

   if(nombre !== "" && mail !== "") {
    alert(nombre + "gracias por tu pedido. Te va a llegar un link de pago a la direccion de mail: " + mail);
   }else {
       alert ("Por favor completa tu nombre y mail para recibir link de pago")
   }
    
})

