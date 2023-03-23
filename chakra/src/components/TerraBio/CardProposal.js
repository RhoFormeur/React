import {
  Box,
  Text,
  Card,
  CardHeader,
  Flex,
  CardBody,
  Image,
  Divider,
  CardFooter,
  Button,
  IconButton,
  HStack,
  Wrap,
  WrapItem,
} from '@chakra-ui/react';
import { CheckIcon, CloseIcon } from '@chakra-ui/icons';
import vote from '../../assets/vote.svg';

const CardProposal = props => {
  const { proposal } = props;

  return (
    <Box>
      <Text>Liste de Proposal</Text>
      <Wrap spacing={'24px'} justify={'center'}>
        {proposal.map(item => {
          let totalQuantity = 0;
          let totalValue = 0;
          return (
            <WrapItem>
              <Card minW={'xs'} key={item.id} boxShadow="base">
                <CardHeader>
                  <Flex justify={'space-between'}>
                    <Box>
                      <Text>Proposal #{item.id}</Text>
                      <Text fontSize={'sm'} color={'grey'}>
                        {item.date}
                      </Text>
                    </Box>
                    <Image w={'64px'} src={item.avatar} alt="avatar" />
                  </Flex>
                </CardHeader>

                <Divider />

                <CardBody>
                  <Flex>
                    <Image src={vote} />
                    <Box w={'100%'}>
                      <Flex direction={'column'} justify={'space-between'}>
                        {item.contract.map(item => {
                          totalQuantity += item.quantity;
                          totalValue += item.value * item.quantity;
                          return (
                            <Flex direction={'column'} justify={'space-around'}>
                              <Flex direction={'column'}>
                                <Text>Item :</Text>
                                <Text fontSize={'sm'} color={'grey'}>
                                  {item.content}
                                </Text>
                              </Flex>
                              <Flex justify={'space-between'}>
                                <Text>${item.value}</Text>
                                <Text>Qty: {item.quantity}</Text>
                              </Flex>
                            </Flex>
                          );
                        })}
                      </Flex>
                    </Box>
                  </Flex>
                </CardBody>

                <Divider />

                <CardFooter>
                  <Flex w={'100%'} justify={'space-between'}>
                    <Box>
                      <Text fontSize={'sm'} color={'grey'}>
                        x{totalQuantity} Items
                      </Text>
                      <Text>${totalValue}</Text>
                    </Box>
                    {item.is_completed ? (
                      <Box>
                        <Button leftIcon={<CheckIcon />} colorScheme="green">
                          Completed
                        </Button>
                      </Box>
                    ) : item.is_rejected ? (
                      <Box>
                        <Button leftIcon={<CloseIcon />} colorScheme="red">
                          Rejected
                        </Button>
                      </Box>
                    ) : (
                      <Box>
                        <HStack spacing={'24px'}>
                          <IconButton
                            colorScheme="green"
                            icon={<CheckIcon />}
                          />
                          <IconButton
                            variant="outline"
                            colorScheme="green"
                            icon={<CloseIcon />}
                          />
                        </HStack>
                      </Box>
                    )}
                  </Flex>
                </CardFooter>
              </Card>
            </WrapItem>
          );
        })}
      </Wrap>
    </Box>
  );
};

export default CardProposal;
