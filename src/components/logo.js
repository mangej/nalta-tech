import React from "react"
import styled from 'styled-components'
import logo from './logo.png'

const Logo = styled.img`
  width: 357px;
  height: 500px;
`

export default () => (
  <Logo src={logo} />
)