import React from 'react'
import styled from '@emotion/styled'
import { withRouter } from 'react-router-dom'
import { Jumbotron, Glyphicon, Button, Checkbox, Form, FormGroup, ControlLabel, FormControl } from 'react-bootstrap'

const Jumbo = styled(Jumbotron)`
  border-radius: 5px;
  margin-top: 4em !important;
  margin: auto;
  width: 45%;
  padding-top: 0.3em;
`

const JumboHeader = styled('div')`
  width: 100%;
  height: 40px;
  font-size: 1.5em;
  font-style: bold;
  text-align: center;
  border-bottom: 1px solid black;
`

const ChecksWrapper = styled('div')`
  margin-top: 1em;
  margin-left: 2em;
  margin-bottom: 1em;
`
const CheckText = styled('div')`
  width: 60%;
  padding-top: 0.2em;
  float: left;
  font-size: 1.3em;
`

const ChecksDiv = styled('div')`
  display: inline-block;
  width: 10%;
  padding-left: 8em;
`

const Checks = styled(Checkbox)`
  display: inline-block;
  font-size: 1.5em;
  margin-left: 1em;
`





function Options() {
  return (
    <Jumbo>
      <JumboHeader>
        Options
      </JumboHeader>
      <ChecksWrapper>
        <CheckText>
            Checks{' '}{' '}..............
          </CheckText>
          <ChecksDiv>
            <Checks checked readOnly>
            </Checks>
          </ChecksDiv>
      </ChecksWrapper>
      <ChecksWrapper>
        <CheckText>
            Checks{' '}{' '}..............
          </CheckText>
          <ChecksDiv>
            <Checks checked readOnly>
            </Checks>
          </ChecksDiv>
      </ChecksWrapper>
      <ChecksWrapper>
      <Form inline>
        <FormGroup controlId="formInlineName">
          <ControlLabel>Name</ControlLabel>{' '}
          <ChecksDiv>
            <FormControl type="text" placeholder="Jane Doe" />
          </ChecksDiv>
        </FormGroup>
      </Form>
      </ChecksWrapper>
    </Jumbo>
  )
}

export default Options