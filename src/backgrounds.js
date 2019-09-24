import React from 'react'
// import styled from "@emotion/styled";
/** @jsx jsx */
import { css, jsx, Global } from '@emotion/core';
import bg01 from './images/moreBGs/bg01.jpg';
import bg02 from './images/moreBGs/bg02.jpg';
import bg06 from './images/moreBGs/bg06.jpg';
import bg11 from './images/moreBGs/bg11.jpg';


const Bg = (props) => {
    return (
        <div css={css`
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        z-index: -1;
        background-image: url('${props.bg}');
        background-attachment: fixed;
        background-size: cover;
        background-position: ${props.pos};
        background-repeat: no-repeat;
        opacity: 0;
        animation: fader 120s infinite;
        animation-delay: ${props.delay};
        `} />
    )
}

export default class Backgrounds extends React.Component {
    render(){
        return(
            <div>
                <Global styles={css`
                    @keyframes fader {
                        0% {
                            opacity: 0;
                        }
                        2.5% {
                            opacity: 0.5;
                        }
                        25% {
                            opacity: 0.5;
                        }
                        27.5% {
                            opacity: 0;
                        }
                        100% {
                            opacity: 0;
                        }
                    }
                `} />
                <Bg bg={bg01}   delay={'0s'} pos={'50% 0%'}/>
                <Bg bg={bg02}  delay={'30s'} pos={'50%'}/>
                <Bg bg={bg06} delay={'60s'} pos={'center'}/>
                <Bg bg={bg11} delay={'90s'} pos={'center'}/>
            </div>
        )
    }
}