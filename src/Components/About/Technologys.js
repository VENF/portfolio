import React, { useContext } from 'react'
import ThemeContext from '../../Context/Theme';
/*Icons*/
import IconHtml5 from '../Icons/IconHtml5';
import IconCss3 from '../Icons/IconCss3';
import IconReact from '../Icons/IconReact';
import IconVue from '../Icons/IconVue';
import IconJs from '../Icons/IconJs';
import IconBootstrap from '../Icons/IconBootstrap';
import IconNode from '../Icons/IconNode';
import IconTs from '../Icons/IconTs';
import IconMoongodb from '../Icons/IconMoongodb';
import IconDocker from '../Icons/IconDocker';

import './scss/technologys.scss';

const Technologys = () => {
    const theme = useContext(ThemeContext)
    const tecs = [
        {icon: <IconHtml5 width="16" heigth="16" color="#580DF6"/>, name: 'Html5'},
        {icon: <IconCss3 width="16" heigth="16" color="#580DF6"/>, name: 'Css3'},
        {icon: <IconBootstrap width="16" heigth="16" color="#580DF6"/>, name: 'Bootstrap'},
        {icon: <IconReact width="16" heigth="16" color="#580DF6"/>, name: 'React'},
        {icon: <IconVue width="16" heigth="16" color="#580DF6"/>, name: 'Vue'},
        {icon: <IconJs width="16" heigth="16" color="#580DF6"/>, name: 'Javascript'},
        {icon: <IconNode width="16" heigth="16" color="#580DF6"/>, name: 'Node'},
        {icon: <IconTs width="16" heigth="16" color="#580DF6"/>, name: 'Typescript'},
        {icon: <IconMoongodb width="16" heigth="16" color="#580DF6"/>, name: 'Mongodb'},
        {icon: <IconDocker width="16" heigth="16" color="#580DF6"/>, name: 'Docker'}
    ]
    return (
        <div className="all-tecs">
            {
                tecs.map((item,i) => {
                    return (
                        <p className="item-tec" key={i}>
                            <span className={`${theme.dark? 'color-dark': ''}`}>
                                { item.name }
                            </span>
                            {item.icon}
                        </p>
                    )
                })
            }
        </div>
    )
}

export default Technologys
