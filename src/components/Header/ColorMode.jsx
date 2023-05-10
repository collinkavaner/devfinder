import styled from "styled-components";
import sunIconSource from "../../assets/sun.svg";

function ColorMode() {
    return (
        <ColorModeMain>
            <p>light</p>
            <img src={sunIconSource} alt="" />
        </ColorModeMain>
    );
}

export default ColorMode;

const ColorModeMain = styled.div`
    display: flex;
    gap: 16px;
    text-transform: uppercase;
    font-weight: 700;
`;