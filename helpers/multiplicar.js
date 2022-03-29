const  fs = require('fs');


// const crearArchivo = (base = 5) => {
//     let salida = '';
//     for(let i =1;i<=10;i++){
//     salida +=`${base} X ${i} = ${base * i}\n`;
    
//     }
//     console.log(salida);
    
//     fs.writeFileSync(`tabla-${base}.txt`,salida);
    
//         console.log(`tabla-${base}.txt creado`);
    
    
// }

const crearArchivo = async(base = 5,listar = false,hasta = 10) => {


try {
    if(consola){
        console.log('tabla del :',base);
        console.log(salida);
    }
    let salida = '';
    let consola = '';
    
        for(let i =1;i<=hasta   ;i++){
        salida +=`${base} X ${i} = ${base * i}\n`;
        consola +=`${base} X ${i} = ${base * i}\n`;
        }
        
        
        fs.writeFileSync(`./salida/tabla-${base}.txt`,salida);
        
            return`tabla-${base}.txt creado`
} catch (error) {
    throw error;
}
   
    }

module.exports = {
    crearArchivo
}