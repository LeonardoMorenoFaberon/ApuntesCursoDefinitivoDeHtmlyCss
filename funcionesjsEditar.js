 texto =  `<label for="hora">
                <span>hora</span>
                <input type="time" id="hora" name="hora" >
            </label>
            <label for="dia">
                <span>dia</span>
                <input type="time" id="dia" name="hora">
            </label>
            <label for="semana">
                <span>week</span>
                <input type="week" id="semana" name="semana">
            </label>
            <label for="month">
                <span>month</span>
                <input type="month" id="month" name="month">
            </label>
            <input type="submit"/>`



function contarCaracteresEn(texto , caracter){
    let contador=0;
    for(let i = 0; i<texto.length ; i++){
        if(texto[i]==caracter){
            contador++;
        }
    }
        return contador;
    }
    
    contarCaracteresEn(texto, "<");

    let texto =  `<label for="hora">
                <span>hora</span>
                <input type="time" id="hora" name="hora" >
            </label>
            <label for="dia">
                <span>dia</span>
                <input type="time" id="dia" name="hora">
            </label>
            <label for="semana">
                <span>week</span>
                <input type="week" id="semana" name="semana">
            </label>
            <label for="month">
                <span>month</span>
                <input type="month" id="month" name="month">
            </label>
            <input type="submit"/>`

function posicionesDeCaracter(texto , caracter){
    let position = [];
    let empujaselo = 0;
    let lastPositionFound ;

    empujaselo = texto.indexOf(caracter , position[position.length-1]+1 );

    while(empujaselo>-1){
        position.push(empujaselo);
        lastPositionFound = position[position.length-1]
       
        empujaselo = texto.indexOf(caracter , lastPositionFound + 1 );
    }
    return position;
}

let arrOpenLabel = posicionesDeCaracter(texto , '<');
let arrCloseLabel =  posicionesDeCaracter(texto, '>');

// pendiente copiar el 
let texto2 = texto
// reemplazar cada arrOpenLabel elemento por &lt;

// reemplazar cada arrCloseLabel elemento por &gt;


texto2.replace('<' , '&lt;');

