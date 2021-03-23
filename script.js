const paste=[
    "croissant", 
    "erbazzone", 
    "torta al cioccolato", 
    "omelette", 
    "crostata", 
    "pancake"]

const caff=[
    "caff\u00E8 espresso",
    "macchiatone",
    "cappuccino", 
    "caff\u00E8 macchiato", 
    "succo alla pesca",
    "succo alla mela", 
    "succo alla pesca", 
    "the verde", 
    "the alla pesca", 
    "the al limone"]

function pasta_suggerita(){                
    n_paste= Math.floor(Math.random() * paste.length)
    return paste[n_paste]
    
}

function caff_suggerita(){                
    n_caff=Math.floor(Math.random() * caff.length)
    return caff[n_caff]
}

function risultato(){
    a = pasta_suggerita() 
    b = caff_suggerita()
    alert("Per stamattina ti consigliamo la coppia " + a + " e " + b)
}


