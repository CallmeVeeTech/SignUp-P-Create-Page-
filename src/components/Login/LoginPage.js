import React from 'react'
import styled from 'styled-components'
import Login from '../page/Login'
import BluePage from '../page/BluePage'

const LoginPage = () => {
  return (
    <Container>
        <Login/>
        <BluePage/>
    </Container>
  )
}

export default LoginPage;

const Container = styled.div`
display: flex;
`