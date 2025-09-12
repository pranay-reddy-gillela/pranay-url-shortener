import { Button, Container, TextInput, Title } from '@mantine/core'
import React, { useState } from 'react'
import Service from '../utils/http';

export default function UrlForm(props) {
    const obj  = new Service();
    const generateShortUrl = async(data) => {
       try {
           let response = await obj.post("s", data);
           props.setResponse(response);
       }catch (error) {
           console.log(error);
       }
   }

     const [data, setData] = useState({
       "originalUrl": "",
       "expiresAt": "",
       "title": "",
       "customUrl": ""
   })

  return (
    <div>
         <Container size="xs" mt='lg'>
        <Title mb={"lg"} order={1}>Url Shortener </Title>
     <TextInput
      variant="filled"
      size="md"
      radius="md"
      label="Original Url"
      withAsterisk
      placeholder="Input placeholder"
      onChange={(e)=>{
         setData({...data, originalUrl : e.target.value})
      }}
    />
    <TextInput
      variant="filled"
      size="md"
      radius="md"
      label="Customize your Url "
      placeholder="Input placeholder"
      onChange={(e)=>{
         setData({...data, customUrl : e.target.value})
      }}
    />
    <TextInput
      variant="filled"
      size="md"
      radius="md"
      label="Title"
      placeholder="Input placeholder"
      onChange={(e)=>{
         setData({...data, title : e.target.value})
      }}
    />
    <TextInput
      variant="filled"
      size="md"
      radius="md"
      label="Expiry Date  "
      placeholder="Input placeholder"
      type='date'
      onChange={(e)=>{
         setData({...data, expiresAt : e.target.value})
      }}
    />
    <Button variant="outline" color='Green' mt={'lg'} ml={'lg'}
    onClick={(e)=>{
       // console.log(e)
         generateShortUrl(data);
    }}
      disabled = {data?.originalUrl?.length>10?false:true}
    >
        Generate Short Url 
    </Button>
    </Container>
    </div>
  )
}
