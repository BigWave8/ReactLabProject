import styled from "styled-components";

export const StyledHeader = styled.section`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #fff;
    padding: 12px auto;
    margin: 0 auto;
    height: 48px;
    width: 100%;
`;

export const ListStyled = styled.div`
    display: inline-flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 24px;
    width: 256px;
    font-size: 14px;
    margin-right: 40px;
    a {
        color: white;
    }
`;

export const LogoHeader = styled.ul`
    display: inline-flex;
    width: 175px;
    margin: 0;
`;