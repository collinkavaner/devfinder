import styled from "styled-components";
import ColorMode from "./ColorMode";

function Header({ theme, toggleTheme }) {
    return (
        <HeaderMain>
            <h1>devfinder</h1>
            <ColorMode theme={theme} toggleTheme={toggleTheme} />
        </HeaderMain>
    );
}

export default Header;

const HeaderMain = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;

    h1 {
        font-size: 1.625rem;
    }
`;