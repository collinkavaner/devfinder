import { useState } from 'react'
import styled from 'styled-components'
import Header from './components/Header/Header';
import SearchBar from './components/Search/SearchBar';
import UserProfile from './components/Profile/UserProfile';

function App() {

  const [userData, setUserData] = useState({});

  const searchTerm = (search) => {
    
    fetch(`https://api.github.com/users/${search}`)
    .then(response => response.json())
    .then(data => {
      setUserData(data);
    })
    .catch(error => console.log(error));

  }
  console.log(userData);

  return(
    <Main>
      <Header />
      <SearchBar searchTerm={searchTerm} />
      {
        Object.keys(userData).length !== 0 && <UserProfile userData={userData} />
      }
    </Main>
  );
}

export default App

const Main = styled.main`
  padding: 32px 24px;
`;
