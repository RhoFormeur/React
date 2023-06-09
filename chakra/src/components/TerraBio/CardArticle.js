import {
  Box,
  Grid,
  GridItem,
  Text,
  Image,
  Flex,
  Tag,
  HStack,
  IconButton,
  VStack,
} from '@chakra-ui/react';
import { AiTwotoneHeart } from 'react-icons/ai';
import article from '../../assets/article.svg';

export const CardArticle = props => {
  const { listArticle } = props;

  return (
    <Box>
      <Text>Liste d'Articles</Text>
      <VStack spacing={'10px'}>
        {listArticle.map(item => {
          return (
            <Grid
              templateAreas={`  "img header"
                                "img social"`}
              gridTempLateRows={'1fr 1fr'}
              gridTempLateColumns={'1fr 1fr'}
              gap="1"
              key={item.id}
              bg={'darkness.500'}
              borderRadius={'20px'}
              p={'6'}
              maxW={'80vw'}
            >
              <GridItem area={'img'}>
                <Image src={article} />
              </GridItem>

              <GridItem w={'60vw'} area={'header'}>
                <Flex justify={'space-between'}>
                  <Box>
                    <Text>{item.title}</Text>
                    <Flex>
                      <HStack spacing={'10px'}>
                        {item.tags.map(tag => {
                          return <Tag fontSize={'9'} color={'secondary.500'} borderRadius={'full'}>{tag}</Tag>;
                        })}
                      </HStack>
                    </Flex>
                  </Box>
                  <IconButton
                    borderRadius={'full'}
                    icon={<AiTwotoneHeart />}
                  />
                </Flex>
              </GridItem>

              <GridItem area={'social'}>
                <Flex align={'center'} justify={'space-between'}>
                  <Flex>
                    <HStack>
                      <Image w={'50px'} src={item.avatar} />
                      <Box>
                        <Text>{item.username}</Text>
                        <Text fontSize={'xs'} color={'secondary.500'}>{item.published_date}</Text>
                      </Box>
                    </HStack>
                  </Flex>
                  <Flex>
                    <HStack>
                    <Text fontSize={'xs'} color={'secondary.500'}>{item.views} Views</Text>
                    <Text fontSize={'xs'} color={'secondary.500'}>{item.likes} Likes</Text>
                    <Text fontSize={'xs'} color={'secondary.500'}>{item.comments} Comments</Text>
                    </HStack>
                  </Flex>
                </Flex>
              </GridItem>
            </Grid>
          );
        })}
      </VStack>
    </Box>
  );
};
