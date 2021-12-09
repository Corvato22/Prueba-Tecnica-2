import React from 'react'
import { Box, Flex, Heading, Spacer, InputGroup, Input, InputRightElement, Button } from '@chakra-ui/react'
import { useDispatch } from 'react-redux';
import { searchAsyn } from '../actions/actionsProducts';
import { useFormik } from 'formik';
import * as Yup from 'yup';

export const NavBar = () => {

    const dispatch = useDispatch();

    const formik = useFormik({
        initialValues: {
            search: ''
        },
        validationSchema: Yup.object({
            search: Yup.string().required()
        }),
        onSubmit: ({ search }) => {
            dispatch(searchAsyn(search))
            console.log(search)
        }
    })

    return (
        <>
            <Flex bg='gray.700' w='100%' h='64px' py='12px' px='24px' color='white' justify='space-between'>
                <Box p='2'>
                    <Heading minW='160px' w='160px' size='md'>Prueba Técnica</Heading>
                </Box>
                <Spacer />

                <form onSubmit={formik.handleSubmit}>
                    <InputGroup size='md' minW='450px' maxW='550px'>
                        <Input
                            bg='white'
                            pr='4.5rem'
                            color='black'
                            focusBorderColor='gray.500'
                            placeholder='Inserta el nombre exacto del producto'
                            name="search"
                            onChange={formik.handleChange}
                        />
                        <InputRightElement width='20%' justifyContent='flex-end'>
                            <Button
                                type="submit"
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
                </form>

            </Flex>
        </>
    )
}
