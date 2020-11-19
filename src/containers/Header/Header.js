import React from "react";
import Logo from "../../images/logo.svg"
import {
    YoutubeFilled,
    TwitterOutlined,
    FacebookOutlined,
    InstagramOutlined
} from "@ant-design/icons";
import {
    StyledHeader,
    ListStyled,
    LogoHeader
} from "./Header.styled";
import { 
    IconBase,
    LogoWrapper
} from "../Footer/Footer.styles";

const Header = () => {
    return (
        <StyledHeader>
        <LogoHeader>
            <LogoWrapper>
                <img src={Logo}/>
                <h1>Paper&Plastic</h1>
            </LogoWrapper>
        </LogoHeader>
        <ListStyled>
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
        </ListStyled>
        </StyledHeader>
    );
};

export default Header;