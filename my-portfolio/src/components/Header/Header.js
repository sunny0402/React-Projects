import { findByLabelText } from '@testing-library/react';
import React from 'react';
//import './Header.css';
import styled from 'styled-components';
import logo from '../../GitHub-Mark-Light-64px.png';
//import Link from '../Link/Link';

const HeaderWrapper = styled.div`
  background-color: #282c34;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
 `;

const Logo  = styled.img`
  height:64px;
  pointer-events:None;
  ` ;

 const Header = () => (
   <HeaderWrapper>
     <Logo src= {logo} alt = 'logo' />
     <h1>My Github Portfolio</h1>
   </HeaderWrapper>
 );         
export default Header;

// //get the logo prop so that it can be used by the img element as a src attribute
// // const Header = ({logo}) => (
// const Header = () => (
//  <header className='App-header'>
//      <img src={logo} className='App-logo' alt='logo' />
//      <h1>
//        My Github Portfolio
//      </h1>
//  </header>
// );
//  export default Header;
