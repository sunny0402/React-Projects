import React, {Component} from 'react';
import Profile from './Profile';
import Header from '../components/Header/Header';
// import logo from '../logo.svg';
//import styled from 'styled-components';
//import './App.css';
import styled, {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body{
    margin:0;
    padding:0;
    font-family: font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
       "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
       sans-serif;
       -webkit-font-smoothing: antialiased;
       -moz-osx-font-smoothing: grayscale;
  }
  `;

const AppWrapper = styled.div`
text-align:center;
`;

class App extends Component{
  render(){
    return(
      <>
      <GlobalStyle />
      <AppWrapper>
          <Header />
          <Profile  />
      </AppWrapper>
      </>
    );
  }
}
export default App;

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
// export default App;
