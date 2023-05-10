import { useState } from 'react'
import styled from 'styled-components'
import Header from './components/Header/Header';
import SearchBar from './components/Search/SearchBar';

function App() {

  return(
    <Main>
      <Header />
      <SearchBar />
    </Main>
  );
}

export default App

const Main = styled.main`
  padding: 32px 24px;
`;
