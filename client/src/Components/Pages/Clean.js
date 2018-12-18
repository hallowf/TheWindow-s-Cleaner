import React from 'react'
import styled from '@emotion/styled'
import { withRouter } from 'react-router-dom'
import { Jumbotron, Panel, Grid, Row, Glyphicon, Button } from 'react-bootstrap'

const Jumbo = styled(Jumbotron)`
  background-color: inherit !important;
  margin-top: 3em;
  margin-left: 3em;
  margin-right: 3em;
  width: 90% !important;
`

const Card = styled(Panel)`
  background-color: #F0EAD6;
  display: inline-block;
  width: 30%;
  border-radius: 4px;
  margin: 1em;
`

const CardTitle = styled(Panel.Heading)`
  border-bottom: 1px solid black !important;
  background-color: inherit !important;
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  padding-bottom: 0.5em;
  margin-bottom: 0.2em;
  padding-top: 0.5em;
`

const CardBody = styled(Panel.Body)`
  margin-bottom: 0.5em;
  margin-left: 0.5em;
`

const Title = styled('strong')`
  color: black;
  font-size: 1em;
`

const CardButton = styled(Button)`
  display: block;
  border-radius: 10px;
  background-color: #343148;
  color: #FE840E;
  width: 30%;
  margin: auto;
  font-size: 1.3em;
  overflow: hidden;
`

function Clean({history}) {
  return (
    <Grid>
      <Jumbo>
        <Row className="show-grid">
          <Card>
            <CardTitle>
              <Title>Clean</Title>
            </CardTitle>
            <CardBody>
              <p>
                Wipe free disk space, Wipe file(s), Delete temporary files
              </p>
              <CardButton bsSize="medium">
                <Glyphicon glyph="refresh"/>
              </CardButton>       
            </CardBody>
          </Card>
          <Card>
            <CardTitle>
              <Title>Clean</Title>
            </CardTitle>
            <CardBody>
              <p>
                Manage startup items...
              </p>
              <CardButton>
              <Glyphicon glyph="wrench"/>  
              </CardButton>       
            </CardBody>
          </Card>
          <Card>
              <CardTitle>
                <Title>Something Clean</Title>
              </CardTitle>
              <CardBody>
                <p>
                  Panel content
                </p>
                <CardButton>
                  open  
                </CardButton>       
              </CardBody>
            </Card>
        </Row>
        <Row className="show-grid">
          
        </Row>
      </Jumbo>
    </Grid>
  )
}

export default withRouter(Clean)