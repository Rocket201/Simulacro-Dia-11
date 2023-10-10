document.addEventListener("DOMContentLoaded",function(){
    
    const calcular = document.getElementById("calcular");
    const resultadoFial2 = document.getElementById("resultado2");
    const resultadoFial1 = document.getElementById("resultado1");

    document.addEventListener("click",function(){

    const longitud = parseFloat(document.getElementById("longitud").value);
    const ancho =  parseFloat(document.getElementById("ancho").value);

    if( !isNaN (longitud) && !isNaN (ancho)){

        const  area = longitud * ancho;

        resultadoFial1.textContent = "El area es:  " + area;
        
        const longitudTotal =2*(longitud + ancho);
        
        resultadoFial2.textContent = "La longitud es: " +  longitudTotal;
      }else{
        
      
       alerta.textContent = "Ingresa un dato válido ";
      }
        
    });
        });
