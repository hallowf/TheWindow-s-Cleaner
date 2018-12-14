import React from 'react'
import styled from '@emotion/styled'
import { Grid, Row } from 'react-bootstrap'

const FooterWrapper = styled('footer')`
  width: 100%;
  height: 100px;
  padding: 2em;
  bottom: 0px;
`

function Footer() {
  return (
    <footer>
      <Grid>
        <Row>
          <FooterWrapper>
          </FooterWrapper>
        </Row>
      </Grid>
    </footer>
  )
}

export default Footer
