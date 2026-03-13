'use client'

import { Box, Container, SimpleGrid, Flex, Heading, Text, Avatar, IconButton } from '@chakra-ui/react'
import { ArrowLeft, ArrowRight, Quote } from 'lucide-react'

export function TestimonialSection() {
  return (
    <Box py={24} bg="blue.900" color="white" backgroundImage="linear-gradient(rgba(10,37,88,0.95), rgba(10,37,88,0.95)), url('https://picsum.photos/seed/lab-background/1920/1080')" bgSize="cover" bgAttachment="fixed">
      <Container maxW="7xl" px={{ base: 4, md: 8 }}>
        <SimpleGrid columns={{ base: 1, lg: 2 }} gap={16} alignItems="center">
          
          <Box position="relative">
             <Box bg="white" p={4} rounded="3xl">
              <Box 
                bgImage="url('https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=800&q=80')" 
                bgSize="cover" 
                bgPosition="center" 
                rounded="2xl" 
                w="full" 
                h={{ base: '400px', md: '500px' }}
              />
            </Box>
            <Box position="absolute" bottom={8} left={-4} bg="blue.500" p={6} rounded="2xl" shadow="xl">
              <Heading fontSize="4xl" fontWeight="black" display="flex">
                460+
              </Heading>
              <Text fontSize="sm" fontWeight="bold">Trusted Customer</Text>
            </Box>
          </Box>

          <Box>
            <Box mb={8} color="blue.500">
              <Quote size={64} style={{ opacity: 0.5 }} />
            </Box>
            <Heading size="2xl" lineHeight="tight" mb={6}>
              Trusted by thousand of people & companies.
            </Heading>
            <Text fontSize="xl" color="whiteAlpha.800" fontStyle="italic" mb={10}>
              &quot;I received outstanding service and rapid test results. The staff is extremely knowledgeable, the portal is easy to use, and my doctors were impressed by the comprehensive reports. Thank you!&quot;
            </Text>

            <Flex align="center" justify="space-between" mt={8}>
              <Flex gap={4} align="center">
                <Avatar name="Renata Wilson" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80" size="lg" />
                <Box>
                  <Text fontWeight="bold" fontSize="lg">Renata Wilson</Text>
                  <Text color="blue.300" fontSize="sm">CEO, Innova Labs</Text>
                </Box>
              </Flex>
              
              <Flex gap={3}>
                <IconButton aria-label="Prev" rounded="full" variant="outline" color="white" _hover={{ bg: 'whiteAlpha.200' }}>
                  <ArrowLeft size={16} />
                </IconButton>
                <IconButton aria-label="Next" rounded="full" bg="white" color="blue.900" _hover={{ bg: 'blue.50' }}>
                  <ArrowRight size={16} />
                </IconButton>
              </Flex>
            </Flex>
          </Box>

        </SimpleGrid>
      </Container>
    </Box>
  )
}
