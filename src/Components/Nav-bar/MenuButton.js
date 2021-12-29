import React from 'react'

const MenuButtonStyle = {
    backgroundColor: 'blue',
    width: '200px',
    height: '50px',
    alignSelf:"center",
    border: "none",

    /* fontSize: 16,
    lineHeight: 21, */
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
};

const MenuButton = (props) => {
    return (
        <div>            
            <button style= {MenuButtonStyle}>{props.name}</button>            
        </div>
    )
}

export default MenuButton
