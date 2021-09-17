var horas = 0
var minutos = 0
var segundos = 0
var milisegundos = 0

var cronometroAtivado = false;

let crono;

function cronometro() {
   
           document.getElementById('cronometro').innerText = concatenar(horas) + ':' + concatenar(minutos) + ':' + concatenar(segundos) + '.' + milisegundos;
           if((milisegundos += 10) == 1000) {

               milisegundos = 0;
               segundos++

           }
           if(segundos == 60) {

               segundos = 0;
               minutos++

           }
           if(minutos == 60) {

               minutos = 0;
               horas++;

           }
}

function iniciarCronometro() {

   if(cronometroAtivado == false) {

       cronometroAtivado = true;
       crono = setInterval(() => { cronometro(); }, 10);

   } else if(cronometroAtivado == true) {

       $.notify("You already have a stopwatch active. Pause or restart it.");

   }
}

function pause() {

   cronometroAtivado = false;
   clearInterval(crono);

}

function reset() {

   clearInterval(crono);
   cronometroAtivado = false;
   horas = 0;
   minutos = 0;
   segundos = 0;
   milisegundos = 0;
   
   document.getElementById('cronometro').innerText = '00:00:00.000'

}

/* Concatening 0 if the value passed by argument is >= 10 */
function concatenar(input) {
   return input >= 10 ? input : `0${input}`
}
