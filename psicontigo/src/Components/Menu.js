import React from 'react'
import MenuButton from './MenuButton'

const Menu = () => {
    return (
        <div>
            <ul>
                <MenuButton name = "Inicio"/>
                <MenuButton name = "Qué hacemos"/>
                <MenuButton name = "Quiénes somos"/>
                <MenuButton name = "Membresias"/>
                <MenuButton name = "Contacto"/>
            </ul>
        </div>
    )
}

export default Menu
