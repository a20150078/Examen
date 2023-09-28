nom=prompt("Esta es la Trivia de la primavera. Escribe tu nombre:");

preg1=prompt("1. ¿En que departamento se encuentra el lago titicaca?\nA. Tacna\nB.Puno \nC. Cusco ")
if (preg1=="B"){
    preg1=1
}
else{
    preg1=0
}


preg2=prompt("2-¿Desde qué parte del Perú se pueden avistar ballenas jorobadas?\nA. Lima e Ica \nB. Arequipa y Tacna\nC. Piura y Tumbes")
if (preg2=="C"){
    preg2=1
}
else{
    preg2=0
}


preg3=prompt("3. Plato típico de la Selva peruana\nA. Tacacho con cecina\nB. Arroz con pollo\nC. Lomo saltado")
if (preg3=="C"){
    preg3=1
}
else{
    preg3=0
}
puntaje=preg1+preg2+preg3
document.write("Tu puntaje es: ",puntaje)
if (puntaje>1){
    document.write(" Lo has hecho bien ",nom)
}
else{
    document.write(" Puedes hacerlo mejor ",nom)
}