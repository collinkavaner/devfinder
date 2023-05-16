import styled from "styled-components";
import { useState } from "react";
import searchIconSource from "../../assets/search.svg";

function SearchBar({ searchTerm }) {
    const [searchValue, setSearchValue] = useState('');

    const handleSearch = (event) => {
        event.preventDefault();
        searchTerm(searchValue)
    }

    return (
        <SearchBarMain onSubmit={handleSearch}>
            <img src={searchIconSource} alt="" />
            <input type="text" placeholder="Search GitHub username" 
            value={searchValue} onChange={(event) => setSearchValue(event.target.value)}
            />
            <button>Search</button>
        </SearchBarMain>
    );
}

export default SearchBar;

const SearchBarMain = styled.form`
    display: flex;
    align-items: center;
    gap: 5px;
    height: 60px;
    margin-top: 32px;
    padding: 8px;
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
        font-size: 13px;
        font-weight: 500;
        color: #fff;
        background-color: #1E2A47;
    }

    input::placeholder {
        color: #fff;
        font-size: 13px;
    }

    @media (min-width: 768px) {
        height: 69px;

        input {
            font-size: 1.125rem;
        }

        input::placeholder {
            font-size: 1.125rem;
        }

        img {
            width: 24px;
            height: 24px;
            margin: 10px 15px;
        }

        button {
            padding: 15px 25px;
        }
    }
`;