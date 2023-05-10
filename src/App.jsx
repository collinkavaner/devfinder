import { useState } from 'react'
import styled from 'styled-components'
import Header from './components/Header/Header';
import SearchBar from './components/Search/SearchBar';
import UserProfile from './components/Profile/UserProfile';

function App() {

  return(
    <Main>
      <Header />
      <SearchBar />
      <UserProfile />
    </Main>
  );
}

export default App

const Main = styled.main`
  padding: 32px 24px;
`;
