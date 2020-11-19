import React from 'react';
import Logo from "../../images/logo.svg"
import {
    YoutubeFilled,
    TwitterOutlined,
    FacebookOutlined,
    InstagramOutlined
} from "@ant-design/icons";
import {
    Wrapper,
    LogoWrapper,
    IconWrapper,
    VerticalLine,
    IconBase,
    StyledText
} from "./Footer.styles";

export const Footer = () => {
    return(
        <Wrapper>
            <LogoWrapper>
                <img src={Logo}/>
                <h1>Paper&Plastic</h1>
            </LogoWrapper>
            <p>Without a pen and a piece of paper, there would be no quantum computers.</p>
            <VerticalLine />
            <IconWrapper>
                <a href="https://www.youtube.com/">
                    <IconBase component={YoutubeFilled} color='#FF0000'/>
                </a>
                <a href="https://www.twitter.com/">
                    <IconBase component={TwitterOutlined} color='#03A9F4'/>
                </a>
                <a href="https://www.facebook.com/">
                    <IconBase component={FacebookOutlined} color='#3b5998'/>
                </a>
                <a href="https://www.instagram.com">
                    <IconBase component={InstagramOutlined} color='#c13584'/>
                </a>
            </IconWrapper>
            <VerticalLine />
            <StyledText>© Paper&Plastic all rights reserved</StyledText>
        </Wrapper>
    );
};

export default Footer;