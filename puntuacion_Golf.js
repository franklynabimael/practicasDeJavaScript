function puntajeGolf(par, golpes){
    
    if ( (golpes <= 0  || par <= 0)){
        return "Los valores par y golpes tienen que ser numericos y positivos";
    }
    if (golpes == 1){
        return "Hole in one";
    }
    else if(golpes == par -2){
        return "Eagle";
    }
    else if (golpes == par -1){
        return "Bridie";
    }
    else if(golpes == par){
        return "Par";
    }
    else if(golpes == par +1 ){
        return "Bogey";
    }
    else if(golpes == par +2){
        return"Duble Bogey";
    }
    else if(golpes > par +2){
        return"Go Home";
    } 
    else{
        return "Por favor compruebe que los datos sean numericos ";
    }
    
}

console.log (puntajeGolf(2,2));