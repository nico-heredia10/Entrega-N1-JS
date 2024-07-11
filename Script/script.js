

alert('¿Quien adivina el numero? \n De 1 a 8 jugadores');

let jugar = confirm('Quieres jugar?');

const Jugadores = [];
const CantidadDeNumeros = [];
const Calificaciones = ["  Posiciones  \n"];

// Agregamos la cantidad de jugadores y sus nombres

if(jugar){
    
    alert('Genial!! \n Comencemos');

    while(jugar){
    
        let numeroDeJugadores = parseFloat(prompt('Ingrese la cantidad de jugadores'));

        if(numeroDeJugadores <= 8 && numeroDeJugadores > 0){

            for(let i = 0; i < numeroDeJugadores; i++){

                let nombre = prompt(`Ingrese el nombre del jugador ${i + 1}`);
    
                Jugadores.push(nombre);
            }

            break;

        }else{

            alert('El numero ingresado no esta permitido para este juego \n Tendras que volver a ingresar la cantidad de jugadores');
        }

    }

}else{
    alert('Esperamos que la proxima vez tengas ganas de jugar.');
}

// Agregamos numeros al azar para cada jugador

const numeroAAdivinar = () =>{
    
    for(let i = 0; i < Jugadores.length; i++){

        let num = Math.floor(Math.random()*100) + 1 ;
        CantidadDeNumeros.push(num);

    }

}

// Juego

if(jugar){
        function juego() {
    
        let jugadoresRestantes = Jugadores.length;

        let j = 1;
        
        do{
            for(let i = 0; i < jugadoresRestantes; i++){

                let numAElegir = parseFloat(prompt(`Turno jugador ${Jugadores[i]}, elige un numero`));

                if( CantidadDeNumeros[i] == numAElegir && jugadoresRestantes > 1){

                    alert('GENIAL!! Has acertado al numero');
                    
                    Calificaciones.push( ` ${j}- ${Jugadores[i]} \n`);
                    Jugadores.splice(i, 1);
                    CantidadDeNumeros.splice(i, 1);
                    jugadoresRestantes = jugadoresRestantes - 1;
                    
                    i--;
                    j++;

                }else{
            
                    alert('Upss.. Siguelo intentando');
                }

            }

            if(jugadoresRestantes <= 1){

                Calificaciones.push(` ${j}- ${Jugadores[0]}`);
            }

        } while (jugadoresRestantes > 1);
    }
}



numeroAAdivinar();

juego();

console.log(Jugadores);

console.log(CantidadDeNumeros);

console.log(Calificaciones);

alert(`${Calificaciones}`);
















