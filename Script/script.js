

// alert('¿Quien adivina el numero? \n De 2 a 8 jugadores');

// let jugar = confirm('Quieres jugar?');

// const Jugadores = [];
// const CantidadDeNumeros = [];
// const Calificaciones = ["  Posiciones  \n"];

// // Agregamos la cantidad de jugadores y sus nombres

// if(jugar){
    
//     alert('Genial!! \n Comencemos');

//     while(jugar){
    
//         let numeroDeJugadores = parseFloat(prompt('Ingrese la cantidad de jugadores'));

//         if(numeroDeJugadores <= 8 && numeroDeJugadores > 1){

//             for(let i = 0; i < numeroDeJugadores; i++){

//                 let nombre = prompt(`Ingrese el nombre del jugador ${i + 1}`);
    
//                 Jugadores.push(nombre);
//             }

//             break;

//         }else{

//             alert('El numero ingresado no esta permitido para este juego \n Tendras que volver a ingresar la cantidad de jugadores');
//         }

//     }

// }else{
//     alert('Esperamos que la proxima vez tengas ganas de jugar.');
// }

// // Agregamos numeros al azar para cada jugador

// const numeroAAdivinar = () =>{
    
//     for(let i = 0; i < Jugadores.length; i++){

//         let num = Math.floor(Math.random()*100) + 1 ;
//         CantidadDeNumeros.push(num);

//     }

// }

// // Juego

// if(jugar){
//         function juego() {
    
//         let jugadoresRestantes = Jugadores.length;

//         let j = 1;
        
//         do{
//             for(let i = 0; i < jugadoresRestantes; i++){

//                 let numAElegir = parseFloat(prompt(`Turno jugador ${Jugadores[i]}, elige un numero`));

//                 if( CantidadDeNumeros[i] == numAElegir && jugadoresRestantes > 1){

//                     alert('GENIAL!! Has acertado al numero');
                    
//                     Calificaciones.push( ` ${j}- ${Jugadores[i]} \n`);
//                     Jugadores.splice(i, 1);
//                     CantidadDeNumeros.splice(i, 1);
//                     jugadoresRestantes = jugadoresRestantes - 1;
                    
//                     i--;
//                     j++;

//                 }else{
            
//                     alert('Upss.. Siguelo intentando');
//                 }

//             }

//             if(jugadoresRestantes <= 1){

//                 Calificaciones.push(` ${j}- ${Jugadores[0]}`);
//             }

//         } while (jugadoresRestantes > 1);
//     }
// }



// numeroAAdivinar();

// juego();

// console.log(Jugadores);

// console.log(CantidadDeNumeros);

// console.log(Calificaciones);

// alert(`${Calificaciones}`);



const cantidadDeJugadores = [];
let numeroAAdivinar = Math.floor(Math.random()*100) + 1;
alert(numeroAAdivinar);


alert('Hola Bienvenido al juego "Adivina el numero"');

let jugamos = confirm('¿Desea jugar? Tenga encuenta que se juega de 2 a 8 jugadores!')

const DeseaJugar = () =>{

    if(jugamos){
        let numDejugadores = parseFloat(prompt('Ingrese el numero de jugadores'));

        if(numDejugadores > 1 & numDejugadores <= 8){
            for( let i = 0; i < numDejugadores; i++){
                let nombreJugador = prompt(`Ingres el nombre del jugador ${i + 1}- `).toUpperCase();
                cantidadDeJugadores.push(nombreJugador);
            }
        }else{
            alert('Cantidad de jugadores no permitido, \n recuerde que la cantidad de jugadores es de 2 a 8!');
            DeseaJugar();
        }
    }
}

const posiciones = [];

function Juego(){ 

    for(let i = 0; i < cantidadDeJugadores.length; i++){

        let num = parseFloat(prompt(`Turno de jugador ${cantidadDeJugadores[i]} `));
        
        if(num == numeroAAdivinar){
            alert('Genial!! Has acertado el numero');
            posiciones.push(cantidadDeJugadores[i])
            cantidadDeJugadores.splice(i, 1);
            i--;

        }else{
            alert('Ups.. Numero incorrecto');
        }
    }

    if(cantidadDeJugadores.length > 0){
        Juego();
    }
} 

const Comencemos = function(juguemos){
    if(juguemos){
        alert('El numero a adivinar se encuentra entre 1 y 100');

        DeseaJugar();
        Juego();

        let posicion = 'Las posiciones del juego son:\n';
        posiciones.forEach((nombre, index) =>{
            posicion += `${index + 1}. ${nombre} \n`;
        });
    
        alert(posicion);

    }else{
        alert('Los esperamos la proxima vez con ganas de jugar');
    }
}

Comencemos(jugamos);














