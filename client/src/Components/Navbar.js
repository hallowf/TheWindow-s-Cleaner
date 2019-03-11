import React from 'react'
import { withRouter } from 'react-router-dom'
import styled from '@emotion/styled'
import { Navbar, Nav, Glyphicon, Button } from 'react-bootstrap'
import twcLogo from '../images/twcLogo.svg'


const TopNav = styled(Navbar)`
  background-color: #343148;
  height: 60px;
  margin: 0;
  width: 100%;
  margin-top: 1em;
  padding-top: 0.5em;
  bottom: 0px
  border-radius: 0px;
  border-style: none;
`

const NavLink = styled(Button)`
  border-width: 0px;
  background-color: inherit;
  color: #FE840E;
  width: 90px;
  display: inline;
  font-size: 1.5em;
  margin-left: 1em;
`

const NavOptions = styled(Button)`
  background-color: inherit;
  border-width: 0px;
  color: #FE840E;
  display: inline;
  float: right;
  margin-top: 0.1em;
  font-size: 1.5em;
`

const NavHeader = styled('div')`
  display: inline-block;
  width: 110px;
  margin-left: 0.6em;
  margin-top: 0.1em;
`

const LogoSVG = styled('img')`
  display: inline;
  width: 35px;
  height: 35px;
  margin-bottom: 0.4em;
`

const TWC = styled('strong')`
  display: inline-block;
  color: #FE840E;
  font-size: 1.5em;
  padding-top: 0.2em;
`


function NavBar({ history }) {
  return (
    <header>
      <TopNav>
        <NavHeader>
          <LogoSVG src={twcLogo}/>
          <TWC>
              TWC
          </TWC>
        </NavHeader>
        <NavLink onClick={ e => {
          history.push('/')
          e.preventDefault()
        }}>
          Main
        </NavLink>
        <NavLink onClick={ e => {
          history.push('/tools')
          e.preventDefault()
        }}>
          Tools
        </NavLink>
        <NavOptions onClick={e => {
          history.push('/options')
          e.preventDefault()
        }}>
          <Glyphicon glyph='cog'/>
        </NavOptions>
      </TopNav>
    </header>
  )
}

export default withRouter(NavBar)
