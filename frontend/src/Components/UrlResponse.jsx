import React from 'react'
import Service from '../utils/http';
const obj = new Service();
import { Button, Center, Container, Text, TextInput, Title } from '@mantine/core';
import { IconCopy } from '@tabler/icons-react';
import { useClipboard } from '@mantine/hooks';
import { QRCodeSVG } from "qrcode.react"


export default function UrlResponse(props) {

    const surl = obj.getBaseURL() + '/api/s/' + props?.response?.shortCode;

    const clipboard = useClipboard({ timeout: 500 });

    return (
        <div>


            <Container>

                <Center >
                    <Text color='green' size='xl' my={"md"} >Generated Short URL : </Text>
                </Center>
                <TextInput my={"lg"}
                    value={surl} rightSection={<IconCopy onClick={() => {
                        clipboard.copy(surl);
                    }} />
                    } />
                <Center>
                    <QRCodeSVG imageSettings={{
                        excavate: true,
                        src: '/HomeBackground.png',
                        height: 50,
                        width: 50
                    }} value={surl} size={200} >
                        <Image src={'/HomeBackground.png'} />
                    </QRCodeSVG>
                </Center>

                <Center>
                    <Button mt={"lg"} ml={"xl"} color='green' variant="outline" onClick={() => {
                        props.setResponse(null)
                    }
                    }>Generate New URL</Button>
                </Center>
            </Container>
        </div>
    )
}
