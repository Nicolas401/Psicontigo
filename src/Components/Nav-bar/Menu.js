import React from 'react'
import MenuButton from './MenuButton'


const MenuStyle = {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 0,
    paddingHorizontal: 0,
    marginaHorizontal: 0,
    borderRadius: 4,
    elevation: 0,
    backgroundColor: 'blue',
};

const Menu = () => {
    return (
        <div style={MenuStyle}>
            <MenuButton name = "Inicio"/>
            <MenuButton name = "¿Qué hacemos?"/>
            <MenuButton name = "¿Quiénes somos?"/>
            <MenuButton name = "Membresias"/>
            <MenuButton name = "Contacto"/>               
        </div>
    )
}

export default Menu
