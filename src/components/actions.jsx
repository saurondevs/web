import { Button, Stack, Box, Heading } from "@chakra-ui/react" 
import { BrowserRouter, Route, Link } from "react-router-dom";

const Action = () => (
        <Stack spacing={1} direction={'row'} position={'absolute'} right={0} top={0} m={5}>
            <Button rounded={'full'} p={3} height={"100%"} bg={'blackAlpha.700'} 
            color={'orange.300'} variant={'social'} _hover={{color:'red.500'}} >
                <Link to="/tokenomics">
                    <Heading stroke={'1px solid black'}
                        fontWeight={300}
                        fontSize={{ base: '3xl', sm: '4xl', md: '25px' }}
                        lineHeight={'110%'}
                        display={'flex'}>
                        Join
                    </Heading>
                </Link>
            </Button>
            <Button rounded={'full'} p={3} height={"100%"} bg={'blackAlpha.700'} 
            color={'orange.300'} variant={'social'} _hover={{color:'red.500'}}>
                    <Link to="/info">
                    <Heading stroke={'1px solid black'}
                        fontWeight={300}
                        fontSize={{ base: '3xl', sm: '4xl', md: '25px' }}
                        lineHeight={'110%'}
                        display={'flex'}>
                        Learn
                    </Heading>
                </Link>
            </Button>
            <Button rounded={'full'} p={3} height={"100%"} bg={'blackAlpha.700'} 
            color={'orange.300'} variant={'social'} _hover={{color:'red.500'}}>
                <Link to="/roadmap">
                    <Heading stroke={'1px solid black'}
                        fontWeight={300}
                        fontSize={{ base: '3xl', sm: '4xl', md: '25px' }}
                        lineHeight={'110%'}
                        display={'flex'}
                        >
                        Coming Soon
                    </Heading>
                </Link>
            </Button>
        </Stack>
)

export default Action