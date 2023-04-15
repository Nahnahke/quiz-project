/* eslint-disable max-len */
import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.div`
text-align: center;
position: relative;
bottom: 0;
left: 0;
background: rgba(255, 255, 255, 0.7);
padding: .4rem;
width: auto;
border-radius: 15px;
overflow: hidden;
margin: 25px 2rem 5px 2rem;
display: inline-block;
@media (min-width: 668px) {
  margin-left: calc(50% - 200px);
  margin-right: auto;
  margin-top: 25px;
  margin-bottom: 5px;
  width: 400px;
  }
`;

const StyledCred = styled.p`
font-weight: normal;
margin: 0;
@media (min-width: 668px) {
  margin: 0;
  }
`

const StyledLink = styled.a`
  color: #535967;
  text-decoration: none;
  &:hover {
    color: #FF9C94;
  }`

export const Footer = () => {
  return (
    <StyledFooter>
      <StyledCred>
        Quiz made by&nbsp;
        <StyledLink
          href="https://portfolio-camilla-cronqvist.netlify.app/"
          target="_blank"
          rel="noopener"
          primary>
          Camilla Cronqvist,&nbsp;
        </StyledLink>
        <StyledLink
          href="https://www.linkedin.com/in/hannah-ek-91667434/"
          target="_blank"
          rel="noopener"
          primary>
          Hannah Ek,&nbsp;
        </StyledLink>
        <StyledLink
          href="https://matilda-frid-portfolio.netlify.app/"
          target="_blank"
          rel="noopener"
          primary>
          Matilda Frid&nbsp;
        </StyledLink>
       and&nbsp;
        <StyledLink
          href="https://www.linkedin.com/in/sofia-gerdmar-2a3642260/"
          target="_blank"
          rel="noopener"
          primary>
          Sofia Gerdmar&nbsp;
        </StyledLink>
        🐢
      </StyledCred>
    </StyledFooter>
  )
}
