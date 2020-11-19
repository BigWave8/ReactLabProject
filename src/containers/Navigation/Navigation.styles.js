import styled from 'styled-components';

export const LinkingWrapper = styled.div`
.selected {
    text-decoration: underline;
}
ul {
    list-style-type:none;
    display: flex;
    justify-content: center;
    margin: 0;
}
li {
    padding: 5px;
    margin: 10px 32px;
    font-size: 24px;
    font-weight: 300;
    a {
        text-decoration: none;
        color: black;
        :hover
        {color: #aa3d27;}
    }
}
`
export const NavigationDelimater = styled.div`
    background-color: #000;
    height: 68px;
    width: .8px;
    margin: 0 0;
`;

export const VerticalDelimater = styled.hr`
    width: 99.92%;
    border: .3px solid #000;
    margin: 0;
`;