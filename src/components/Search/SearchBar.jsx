import styled from "styled-components";
import searchIconSource from "../../assets/search.svg";

function SearchBar() {
    return (
        <SearchBarMain>
            <img src={searchIconSource} alt="" />
            <input type="text" placeholder="Search GitHub username..." />
            <button>Search</button>
        </SearchBarMain>
    );
}

export default SearchBar;

const SearchBarMain = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;
    height: 60px;
    margin-top: 32px;
    padding: 5px;
    border-radius: 15px;
    background-color: #1E2A47;

    img {
        width: 20px;
        height: 20px;
        margin: 10px 0 10px 10px;
    }

    input {
        width: 100%;
        outline: none;
        border: none;
        border-radius: 15px;
        font-size: 13px;
        font-weight: 500;
        color: #fff;
        background-color: #1E2A47;
    }

    input::placeholder {
        color: #fff;
        font-size: 13px;
    }
`;