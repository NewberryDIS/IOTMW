import React from 'react';
import styled from "@emotion/styled";
// import logob from './images/logob.png';
// import logow from './images/logow.png';
import logob from './images/Newberry_N.svg';
/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import './index.css';

const Navchunk = styled.div`
    border: 2px solid transparent;
    position: relative;
    border-radius: 8px;
    width: 223px;
    padding-top: 4px;
    padding-left: 4px;
    font-family: 'Lato', sans-serif;
    display: flex;
    &:hover {
        -webkit-box-shadow: 10px 10px 50px 0px rgba(0,0,0,0.75);
        -moz-box-shadow: 10px 10px 50px 0px rgba(0,0,0,0.75);
        box-shadow: 10px 10px 50px 0px rgba(0,0,0,0.75);
        border: 2px solid white;
        background: rgba(0,0,0,0.65);
        & a span {
            color: white;
            filter: drop-shadow(0 0 0.25rem transparent);
        }
        &.navleft img {
            
            filter: invert(100%);
        }
    }
    & a span {
        flex: 3;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 60px;
        right: 0;
        height: 30%;
        margin: auto;
        vertical-align: middle;
        height: 40px;
        line-height: 40px;
        color: transparent;
        padding-right: 5px;
        &:hover {
            font-weight: 900;
            filter: drop-shadow(0 0 0.25rem rgba(255,255,255,0.75));
        }
    }
    &.navleft img {
        border: 1px solid transparent;
        flex: 1;
        margin: 3px 0 0 0;
        background: url('${logob}');
        height: 40px;
        background-size: cover;
        background-repeat: no-repeat;
        width: 40px;
        &:hover {
            filter: drop-shadow(0 0 0.25rem rgba(0,0,0,0.75)) invert(100%);
        }
    }
    &::before {
        content: "";
        display: inline-block;
        vertical-align: middle;
        height: 100%;
    }
`

export default class Navbar extends React.Component {
    constructor() {
        super()
        // this.handleClick = this.handleClick.bind(this)
        this.state = {
            change: false
        }
    }
    // handleClick() {
    //     this.setState(prevState => ({
    //         change: !prevState.change
    //     }));
    // }
    render(){
        return(
                <header >
                    <div className="navbar" css={css`
                        width: 75%;
                        margin: 5px auto 0 auto;
                        height: 60px;
                        line-height: 40px;
                    `}>
                        <Navchunk className="navleft" css={css`
                        position: relative;
                        `}>
                            <a href="http://www.newberry.org">
                                <img alt="Newberry Logo" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" />
                            </a>
                            <a href="http://www.newberry.org/digital-newberry">
                                <span css={css`
                                
`}>
                                &gt; Digital Newberry
                            </span>
                            </a>
                        </Navchunk>
                        
                    </div>
                </header>
        )
    }
}