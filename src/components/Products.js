import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';

import { Box, Grid, Image, FormControl, Select } from '@chakra-ui/react'
import { listProductsAsync } from '../actions/actionsProducts';


export const Products = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(listProductsAsync())
        // eslint-disable-next-line
    }, [])

    const { products } = useSelector(store => store.product);

    return (
        <>
            <FormControl w='200px' id='filter' mr='25px' bg='white' color='black' borderRadius='10px' m='20px'>
                <Select focusBorderColor='gray.500' placeholder='Filtrar por precio'>
                    <option>Menor a mayor</option>
                    <option>Mayor a menor</option>
                </Select>
            </FormControl>

            <Grid justifyItems='center' templateColumns='repeat(3, 1fr)' gap={6}>

                {
                    products.map((e, i) => (
                        <Box key={i} maxW='350px' minW='195px' borderWidth='2px' borderColor='gray.700' borderRadius='lg'>
                            <Image w='100%' src={e.img} alt={e.name} />
                            <Box
                                mt='1'
                                fontWeight='bold'
                                fontSize='20px'
                                as='h4'
                                lineHeight='tight'
                                isTruncated
                                px='10px'
                            >
                                {e.name}
                            </Box>
                            <Box
                                my='1'
                                fontWeight='light'
                                as='p'
                                lineHeight='tight'
                                px='10px'
                            >
                                {e.descrip}
                            </Box>
                            <Box px='10px' fontWeight='semibold' >
                                {e.price}
                                <Box as='span' color='gray.600' fontSize='sm'>
                                    $ COP
                                </Box>
                            </Box>
                        </Box>
                    ))
                }
            </Grid>

        </>
    )
}
