import styled from 'styled-components';
import { Slider } from 'antd';

export const CatalogSection = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
`;

export const MenuView = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 100px;
    width: 100%;
`;

export const SliderContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    font-weight: 400;
    font-size: 20px;
    height: 100px;
    width: auto;
    padding-bottom: 40px;
`;

export const SliderStyled = styled(Slider)`
    margin: 0 24px;
    width: 240px;
`;
