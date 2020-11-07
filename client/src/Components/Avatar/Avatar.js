import React, { useContext } from 'react';
import Theme from '../../Context/Theme'
import './avatar.scss';
const Avatar = () => {
    const { dark } = useContext(Theme);
    return (
        <div className={`avatar ${dark? 'avatar_dark': ''}`}>
            <img src="https://res.cloudinary.com/dyve5deot/image/upload/v1593272987/ava_yumhwh.jpg" alt="Victor Naranjo"/>
        </div>
    )
}

export default Avatar
