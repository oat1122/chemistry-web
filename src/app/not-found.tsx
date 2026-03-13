'use client'

import { Box, Button, Container, Heading, Text, VStack } from '@chakra-ui/react'
import { Link } from '@chakra-ui/next-js'

export default function NotFound() {
  return (
    <Box as="main" minH="70vh" py={{ base: 16, md: 24 }} bg="gray.50">
      <Container maxW="3xl" px={{ base: 4, md: 8 }}>
        <VStack
          spacing={6}
          textAlign="center"
          bg="white"
          rounded="3xl"
          p={{ base: 8, md: 12 }}
          shadow="md"
          border="1px solid"
          borderColor="gray.100"
        >
          <Text fontSize={{ base: '5xl', md: '6xl' }} fontWeight="black" color="blue.600" lineHeight="1">
            404
          </Text>

          <Heading as="h1" size="lg" color="blue.900">
            Page Not Found
          </Heading>

          <Text color="gray.600" fontSize={{ base: 'md', md: 'lg' }} maxW="2xl">
            นี้เป็นเพียงการออกแบบเว็บตัวอย่างจึงมีแค่หน้า Home
          </Text>

          <Button
            as={Link}
            href="/"
            rounded="full"
            bg="blue.900"
            color="white"
            px={8}
            _hover={{ bg: 'blue.800', textDecoration: 'none' }}
          >
            ย้อนกลับไป Home
          </Button>
        </VStack>
      </Container>
    </Box>
  )
}
