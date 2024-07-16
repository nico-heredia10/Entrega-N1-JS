

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














