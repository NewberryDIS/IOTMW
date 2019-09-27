/** @jsx jsx */
import { css, jsx } from '@emotion/core'

const Banner = () => ( <div css={css`
    overflow: hidden;
    font-family: 'Lato', sans-serif;
    // height: 50px;
    width: 450px;
    background-color: #9C1B21;
    position: absolute;
    top: 85px;
    border: 1px solid rgba(0,0,0,.75);
    right: -80px;
    text-align: center;
    color: #FFF;
    font-weight: 600;
    font-size: 24px;
    white-space: nowrap;
  -webkit-transform: rotate(35deg);
    -moz-transform: rotate(35deg);
    -ms-transform: rotate(35deg);
    -o-transform: rotate(35deg);
    transform: rotate(35deg);
        // filter: drop-shadow(0 0 0.75rem black);

        -webkit-box-shadow: 10px 10px 30px 0px rgba(0,0,0,0.75);
        -moz-box-shadow: 10px 10px 30px 0px rgba(0,0,0,0.75);
        box-shadow: 10px 10px 30px 0px rgba(0,0,0,0.75);

&:before {
    box-sizing: border-box;
    border-style: solid;
    border-color: transparent;
    border-width: 37px;
    border-left-width: 53px;
    border-right-width: 26px;
    content: "";
    display: block;
    left: -49px;
    position: absolute;
    width: 141%;
    border-top-width: 0px;
    border-bottom-color: #9c1b21;
    top: -2px;
    z-index: -1;
}
`} >Same Content &ndash; New Design!
</div>)

export default Banner