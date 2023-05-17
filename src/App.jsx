import { useState } from 'react'
import styled from 'styled-components'
import { ThemeProvider } from 'styled-components'
import GlobalStyle from './styles/GlobalStyles'
import { lightTheme, darkTheme } from './styles/Themes'
import Header from './components/Header/Header';
import SearchBar from './components/Search/SearchBar';
import UserProfile from './components/Profile/UserProfile';

function App() {

  const [theme, setTheme] = useState('dark');
  const [userData, setUserData] = useState({});

  const toggleTheme = () => {
    theme === 'dark' ? setTheme('light') : setTheme('dark');
  }

  const searchTerm = (search) => {
    
    fetch(`https://api.github.com/users/${search}`)
    .then(response => response.json())
    .then(data => {
      setUserData(data);
    })
    .catch(error => console.log(error));

  }
  //console.log(userData);

  return(
    <Main>
      <ThemeProvider theme={ theme === 'dark' ? darkTheme : lightTheme }>
        <GlobalStyle />
        <Header theme={theme} toggleTheme={toggleTheme} />
        <SearchBar searchTerm={searchTerm} theme={theme === 'dark' ? darkTheme : lightTheme} />
        {
          Object.keys(userData).length !== 0 && <UserProfile userData={userData} theme={theme === 'dark' ? darkTheme : lightTheme} />
        }
      </ThemeProvider>
    </Main>
  );
}

export default App

const Main = styled.main`
  max-width: 485px;
  margin: 0 auto;
  padding: 32px 24px;

  @media (min-width: 768px) {
    max-width: 620px;
  }

  @media (min-width: 1024px) {
    max-width: 800px;
  }
`;
