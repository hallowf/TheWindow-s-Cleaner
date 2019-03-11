import React from 'react'
import styled from '@emotion/styled'
import { withRouter } from 'react-router-dom'
import { Jumbotron, Panel, Grid, Row, Glyphicon, Button } from 'react-bootstrap'
import Select from 'react-select'


const Jumbo = styled(Jumbotron)`
  margin-top: 4em;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
  border-radius: 0.5em;
  padding-top 0.6em;
`
const JumboHeader = styled('div')`
  width: 100%;
  border-bottom 1px solid black;
  padding-bottom: 0.6em;
  text-align: center;
  font-size: 1.6em
`

const ToolSearch = styled('input')`
  margin-left: 1em;
  font-size: 0.7em;
`

const EachTool = styled(Panel)`
  width: 30%;
  margin: auto;
`

const SmallSelect = styled(Select)`
  margin-left: 1em;
  display: inline-block;
  width: 10%;
`




function Tools() {
  return (
    <Jumbo>
      <JumboHeader>
        Tools
        <ToolSearch/>
      </JumboHeader>
      <EachTool>
        Cipher
      </EachTool>
    </Jumbo>
  )
}

export default Tools