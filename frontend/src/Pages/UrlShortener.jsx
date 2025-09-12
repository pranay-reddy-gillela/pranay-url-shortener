import { Button, TextInput, Title } from '@mantine/core'
import { Container } from '@mantine/core'
import React, { useState } from 'react'
import UrlForm from '../Components/UrlForm'
import UrlResponse from '../Components/UrlResponse'

export default function UrlShortener() {
    const [ response, setResponse ] = useState(null);
  return (
    <>
       <Container size={"xs"}>
           {response?<UrlResponse setResponse={setResponse} response = {response}/>:<UrlForm setResponse={setResponse}/>}
       </Container>
    </>
  )
}
