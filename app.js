//ejercicio FizzBuzz
//declaro la variable a iterar
let i = 1;
//mientras la variable sea menor o igual a 100, si es multiplo de 3 me pintara fizz, si es multiplo de 5 me pintara buzz y si es multiplo de ambos fizzbuzz
while (i <= 100) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("fizz");
    } else if (i % 5 === 0) {
        console.log("buzz");
    } else {
        console.log(i);
    }
    i++;
}

//ejercicio cachipun contra la máquina
//variable para ingresar numero de partidas
let games = parseInt(prompt('cuantas partidas quiere jugar?'))

//si ingresa un numero mayor a 0 de juegos entonces puede empezar la partida escogiendo uno de los números 
while (games > 0) {
    let user = parseInt(prompt(` 
    Escribe el número de tu elección 

    1.Piedra
    2.Papel
    3.Tijera
    `));

    //variable para que aparezca de forma aleatoria una opcion del 1 al 3
    let machine = Math.floor(Math.random() * (4 - 1)) + 1;
    console.log(machine);

    console.log(result(machine, user));
    games = games - 1;
}

//funcion con resultados donde el usuario pierde
function result(machineGame, userGame) {
    if (machineGame === 1 && userGame === 3) {
        return "Perdiste";
    }
    if (machineGame === 2 && userGame === 1) {
        return "Perdiste";
    }
    if (machineGame === 3 && userGame === 1) {
        return "Perdiste";
    }

    // condicion igual para empate
    if (machineGame === userGame) {
        return "Es un Empate";
    }

    // si ninguna de las condiciones anteriores se cumple, entonces mostrar "ganaste"
    return "ganaste";
}