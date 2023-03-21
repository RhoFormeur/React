import {Box, Text, Wrap, WrapItem, Card, CardHeader, Flex,CardBody,Image,Stack, Divider,CardFooter,Button} from "@chakra-ui/react";
import vote from '../../assets/vote.svg';


const CardProposal = props =>{
    const {proposal} = props 
    return (
    <Box>
      <Text>Liste de Proposal</Text>
      <Wrap spacing={'30px'} justify={'center'}>
        {proposal.map(item => {
          return (
            <WrapItem>
              <Card maxW="sm" key={item.id} bg={'gray.900'}>
                <CardHeader>
                    <Flex justify={'space-between'}>
                        <Box>
                            <Text>Proposal #{item.id}</Text>
                            <Text fontSize={'sm'} color={'grey'}>{item.date}</Text>
                        </Box>
                        
                        <Image w={'64px'} src={item.avatar} alt="avatar"/>
                    </Flex>
                </CardHeader>
                <Divider/>
                <CardBody>
                    <Flex>
                        <Image src={vote}/>
                        <Box>
                            <Flex direction={'column'} justify={'space-between'}>
                                <Stack spacing={'3'}>
                                <Flex direction={'column'} justify={'space-around'}>
                                    <Box>
                                        <Text>Loin of Vension</Text>
                                        <Text fontSize={'sm'} color={'grey'}>Black Pudding Pure & Jerk</Text>
                                    </Box>
                                    <Flex justify={'space-between'}>
                                        <Text>$12.5</Text>
                                        <Text>Qty: 1</Text>
                                    </Flex>
                                </Flex>
                                <Flex direction={'column'} justify={'space-around'}>
                                    <Box>
                                        <Text>Loin of Vension</Text>
                                        <Text fontSize={'sm'} color={'grey'}>Black Pudding Pure & Jerk</Text>
                                    </Box>
                                    <Flex justify={'space-between'}>
                                        <Text>$12.5</Text>
                                        <Text>Qty: 1</Text>
                                    </Flex>
                                </Flex>
                                </Stack>
                            </Flex>
                        </Box>
                    </Flex>
                </CardBody>
                <Divider />
                <CardFooter>
                    <Flex w={'100%'} justify={'space-between'}>
                        <Box>
                            <Text fontSize={'sm'} color={'grey'}>x2 Items</Text>
                            <Text>$12.5</Text>
                        </Box>
                        <Box>
                            <Button variant="solid" colorScheme="green">V</Button>
                            <Button variant="ghost" colorScheme="green">X</Button>
                        </Box>
                    </Flex>
                </CardFooter>
              </Card>
            </WrapItem>
          );
        })}
      </Wrap>
    </Box>
    )
}

export default CardProposal;
