import styled from "styled-components";
import sunIconSource from "../../assets/sun.svg";
import moonIconSource from "../../assets/moon.svg";

function ColorMode({ theme, toggleTheme }) {
    return (
        <ColorModeMain onClick={toggleTheme} className="toggle-theme">
            <p>{ theme === 'dark' ? 'Light' : 'Dark' }</p>
            <img src={theme === 'dark' ? sunIconSource : moonIconSource} alt="" />
        </ColorModeMain>
    );
}

export default ColorMode;

const ColorModeMain = styled.button`    
    background-color: transparent;
    display: flex;
    align-items: center;
    gap: 16px;
    text-transform: uppercase;
    font-weight: 700;

    :hover {
        cursor: pointer;
    }
`;