import React from 'react'

const columnStyle = {
    width: "50%",
    height: "50%",
};

const imStyle = {
    maxWidth: "50%",
    height: "50%",
};

const Profile = (props) => {
    return (
        <div>
            <tr>
                <td style={columnStyle}>
                    <img src={props.dirIm} alt= "imagen de la psicologa" style={imStyle}>
                    </img>
                </td>
                <td>
                    <p>{props.description}</p>
                </td>
            </tr>   
        </div>
    )
}

export default Profile