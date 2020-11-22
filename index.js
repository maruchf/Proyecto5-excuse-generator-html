  
    let who = ['The dog','My grandma','His turtle','My bird'];
    let action = ['ate','peed','crushed','broke'];
    let what = ['my homework', 'the keys', 'the car','the home', 'the tv'];
    let when = ['before the class','right on time','when I finished','during my lunch','while I was praying'];

    // listas de la excusa
    function numRandom(range){
        return Math.floor(Math.random() * range );
    }
    
    function crearExcusa(){
        var concate = who[numRandom(who.length) ] + ' ' + action[numRandom(action.length)]+' '+what[numRandom(what.length)]+' '+ when[numRandom(when.length)];
        document.getElementById("excuse").innerHTML = concate;
    }
    
