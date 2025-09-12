import React, { use, useEffect, useState } from 'react'
import Service from '../../utils/http';
import { Center, Stack, Text } from '@mantine/core';
import { Avatar } from '@mantine/core';
const obj = new Service();


export default function Profile() {


    const [user, setUser] = useState({})


    const getProfileData = async () => {
        try {
            let data = await obj.get("user/me")
            setUser(data)
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        getProfileData();
    }, [])

    /*
    {
        "_id": "68c1a5117cbb87b8e2b84704",
        "name": "pranay",
        "email": "pranay001011@gmail.com",
        "avatar": "https://lh3.googleusercontent.com/a/ACg8ocLLPKQ5_j0c1an5aYeRmJdTOeqrR_fxey5DDp55jrfOk3rJOA=s96-c",
        "role": "user",
        "createdAt": "2025-09-10T16:19:29.845Z",
        "updatedAt": "2025-09-10T16:19:29.845Z",
        "__v": 0
    }
    */
    return (

        <>
            {

                <Center>

                    <Stack
                        h={300}
                        bg="var(--mantine-color-body)"
                        align="center"
                        justify="center"
                        gap="md"
                    >
                        <Avatar variant="filled" radius="xl" size="xl" src={user?.avatar} alt="it's me" />
                        <Text fw={900}>UserName : {user?.name}</Text>
                        <Text color='green' size={"lg"} > Email Id : {user?.email} </Text>
                        <Text color='yellow' size={"lg"} > User Id : {user?._id} </Text>
                        <Text color='black' size={"lg"} > Created At : {user?.createdAt} </Text>
                    </Stack>

                </Center>
            }
        </>

    )
}
