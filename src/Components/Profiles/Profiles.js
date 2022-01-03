import React from 'react'
import Profile from './Profile'
import imagen1 from "./Foto_Maria.jpg"
import imagen2 from "./Foto_Natalia.jpg"

const mariaDescription = "Mi nombre es María gimenes y me dedico a hacer rehabilitación neurocognitiva";

const nataliaDescription = "Mi nombre es Natalia Tocci y me dedico a hacer rehabilitación neurocognitiva";

const Profiles = () => {
    return (
        <div>
            <table>
                <Profile dirIm= {imagen1} description ={mariaDescription}/>
                <Profile dirIm= {imagen2} description ={nataliaDescription}/>
            </table>            
        </div>
    )
}

export default Profiles
