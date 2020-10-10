import React from 'react';
//import './Link.css';
import styled from 'styled-components';
//new component Link which takes url, title as props
//Link component adds these props as attributes to the <a> element

//create new styled component which extends an element
//and takes css rules
const InnerLink = styled.a`color: #61dafb;`;

const Link = ({url,title}) =>(
    <InnerLink
    className = 'App-link'
    href = {url}
    target = '_blank'
    rel = 'noopener noreferrer'
    >
    {title}
    </InnerLink>
);
export default Link;