import Icon from '@ant-design/icons';
import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 36px;
    text-align: center;
    p { 
        color: #8E8E93;
        text-align: center;
        font-weight: 200;
        margin-top: 12px;
    }
    h1 {
        margin-top: 12px;
    }
    span { 
        margin: 0 12px;
    }
`;

export const IconWrapper = styled.div`
    margin: 12px 0;
`;

export const IconBase = styled(Icon)`
    font-size: 24px;
    color: ${({color}) => color};
`;

export const VerticalLine = styled.hr`
    width: 80%;
    border-bottom: none;
    border: .8px solid #DDDDE4;
`;

export const LogoWrapper = styled.div`
    display: flex;
    align-items: center;
    width: 175px;
    h1 {
        font-weight: 300;
        font-size: 24px;
        margin: 0px;
        margin-left: 16px;
        color: black;
    }
    img{
        height: 24px;
    }
`;

export const StyledText = styled.p`
    margin-top: 16px;
`