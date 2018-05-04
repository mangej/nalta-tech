import React from "react"
import styled from 'styled-components'
import logo from './logo.png'

const Logo = styled.img`
  height: auto;
  width: 100%;
  max-width: 350px;

  @media (max-width: 767px) { 
    max-width: 200px
  }
`

export default () => (
  <Logo src={logo} />
)