import {
  Box,
  Text,
  Card,
  CardHeader,
  Flex,
  CardBody,
  Image,
  Stack,
  Divider,
  CardFooter,
  Button,
} from '@chakra-ui/react';
import { CheckIcon, CloseIcon } from '@chakra-ui/icons';
import vote from '../../assets/vote.svg';

const CardProposal = props => {
  const { proposal } = props;
  return (
    <Box>
      <Text>Liste de Proposal</Text>
      <Flex>
        {proposal.map(item => {
          return (
            <Box>
              <Card maxW="sm" key={item.id}>
                <CardHeader>
                  <Flex justify={'space-between'}>
                    <Box>
                      <Text>Proposal #{item.id}</Text>
                      <Text fontSize={'sm'}>{item.date}</Text>
                    </Box>
                    <Image w={'64px'} src={item.avatar} alt="avatar" />
                  </Flex>
                </CardHeader>

                <Divider />

                <CardBody>
                  <Flex>
                    <Image src={vote} />
                    <Box>
                      <Flex direction={'column'} justify={'space-between'}>
                        <Stack spacing={'3'}>
                          <Flex direction={'column'} justify={'space-around'}>
                            <Box>
                              <Text>Loin of Vension</Text>
                              <Text fontSize={'sm'}>
                                Black Pudding Pure & Jerk
                              </Text>
                            </Box>
                            <Flex justify={'space-between'}>
                              <Text>$12.5</Text>
                              <Text>Qty: 1</Text>
                            </Flex>
                          </Flex>
                          <Flex direction={'column'} justify={'space-around'}>
                            <Box>
                              <Text>Loin of Vension</Text>
                              <Text fontSize={'sm'}>
                                Black Pudding Pure & Jerk
                              </Text>
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
                      <Text fontSize={'sm'}>x2 Items</Text>
                      <Text>$12.5</Text>
                    </Box>
                    {/* {proposal.is_accepted()} */}
                    <Box>
                      <Button>
                        <CheckIcon />
                      </Button>
                      <Button>
                        <CloseIcon />
                      </Button>
                    </Box>
                  </Flex>
                </CardFooter>
              </Card>
            </Box>
          );
        })}
      </Flex>
    </Box>
  );
};

export default CardProposal;
