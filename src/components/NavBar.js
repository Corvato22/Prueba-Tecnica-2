import React from 'react'
import { Box, Flex, Heading, Spacer, InputGroup, Input, InputRightElement, Button } from '@chakra-ui/react'

export const NavBar = () => {
    return (
        <>
            <Flex bg='gray.700' w='100%' h='64px' py='12px' px='24px' color='white' justify='space-between'>
                <Box p='2'>
                    <Heading minW='160px' w='160px' size='md'>Prueba Técnica</Heading>
                </Box>
                <Spacer />

                <InputGroup size='md' minW='255px' maxW='550px'>
                    <Input
                        bg='white'
                        pr='4.5rem'
                        color='black'
                        focusBorderColor='gray.500'
                    />
                    <InputRightElement width='20%' justifyContent='flex-end'>
                        <Button
                            bg='gray.500'
                            color='white'
                            h='100%'
                            size='sm'
                            borderLeftRadius="0"
                            _hover={{
                                background: "gray.400",
                                color: "white",
                            }}
                            _active={{ transform: 'scale(0.90)' }}
                        >
                            Buscar
                        </Button>
                    </InputRightElement>
                </InputGroup>
            </Flex>
        </>
    )
}
