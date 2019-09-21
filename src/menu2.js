import React from "react"
/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import {Menucontent} from './data'

export default class Menu extends React.Component {
    render() {
        return (
            <div css={css`text-align: center;`}>
                <ul css={css`
                    display: flex;
                    width: 80%;
                    border-top: 1px solid rgba(0,0,0,0.65);
                    list-style-type: none;
                    padding: 0;
                    margin: 15px auto;
                `}>
                {Menucontent.map((item, index) =>
                    <li key={index} href={item[0]}  
                    css={css`
                        border-radius: 0px 0px 10px 10px;
                        -moz-border-radius: 0px 0px 10px 10px;
                        -webkit-border-radius: 0px 0px 10px 10px;
                        border: 2px solid transparent;
                        padding: 5px;
                        display: inline-block;
                        min-height: 45px;
                        overflow: wrap;
                        flex: 1;
                        text-align: center;
                        vertical-align: top; 
                        color: black;
                        text-decoration: none;
                        text-transform: uppercase;
                        font-family: 'Lato', sans-serif;
                            &:hover {
                                -webkit-box-shadow: 10px 10px 50px 0px rgba(0,0,0,0.75);
                                -moz-box-shadow: 10px 10px 50px 0px rgba(0,0,0,0.75);
                                box-shadow: 10px 10px 50px 0px rgba(0,0,0,0.75);
                                border-bottom: 2px solid white;
                                border-left: 2px solid white;
                                border-right: 2px solid white;
                                background: rgba(0,0,0,0.65);
                                & a, & span {
                                    color: white;
                                }
                            }
                            & a {
                                color: black;
                            }
                        }
                    `}
                        >
                        <a href={`https://publications.newberry.org/digital/indians-midwest/${item[0]}.html`}>{item[1]}</a>
                    </li>
                )}

            </ul>
        </div>
        )
    }
};