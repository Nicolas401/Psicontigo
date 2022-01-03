import React from 'react'
import tip_0 from '../../fotosdepsicontigo/Tips_fiestas/Tip_0.jpg'
import tip_1 from '../../fotosdepsicontigo/Tips_fiestas/Tip_1.jpg'
import tip_2 from '../../fotosdepsicontigo/Tips_fiestas/Tip_2.jpg'
import tip_3 from '../../fotosdepsicontigo/Tips_fiestas/Tip_3.jpg'
import tip_4 from '../../fotosdepsicontigo/Tips_fiestas/Tip_4.jpg'
import tip_5 from '../../fotosdepsicontigo/Tips_fiestas/Tip_5.jpg'
import tip_6 from '../../fotosdepsicontigo/Tips_fiestas/Tip_6.jpg'
import tip_7 from '../../fotosdepsicontigo/Tips_fiestas/Tip_7.jpg'


const imagenes = [tip_0, tip_1, tip_2,tip_3,tip_4, tip_5, tip_6, tip_7];

/* const ImagenesRotando = () =>{
    for (let i=0; i<=imagenes.length; i++){
        setTimeout(i,1500);
        var Imagenesa = Imagenes[i]
        
    };
    return(Imagenesa)
}; */

    const Home = () => {
    return (
        <div>
            <img src={imagenes[1]} width={300} height={300} alt='pf'/>
        </div>
    )
}

export default Home
