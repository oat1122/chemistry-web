'use client'

import { Box, Container, SimpleGrid, Stack, Text, Heading, Input, Button, Divider, HStack, Flex } from '@chakra-ui/react'

export function Footer() {
  return (
    <Box bg="blue.900" color="white" pt={16} pb={8}>
      <Container maxW="7xl" px={{ base: 4, md: 8 }}>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} gap={10} mb={10}>
          {/* Brand & Description */}
          <Stack gap={4}>
            <Text fontSize="2xl" fontWeight="bold">🧪 Xleb</Text>
            <Text color="whiteAlpha.800" fontSize="sm">
              We provide accurate test results to render diagnosis of unusual cases. Our clinical pathologists are available.
            </Text>
          </Stack>

          {/* Quick Links */}
          <Stack gap={3}>
            <Heading size="sm" mb={2}>Quick Links</Heading>
            <Text cursor="pointer" color="whiteAlpha.800" _hover={{ color: 'white' }}>Home</Text>
            <Text cursor="pointer" color="whiteAlpha.800" _hover={{ color: 'white' }}>About Us</Text>
            <Text cursor="pointer" color="whiteAlpha.800" _hover={{ color: 'white' }}>Services</Text>
            <Text cursor="pointer" color="whiteAlpha.800" _hover={{ color: 'white' }}>Contact</Text>
          </Stack>

          {/* Our Services */}
          <Stack gap={3}>
            <Heading size="sm" mb={2}>Our Services</Heading>
            <Text cursor="pointer" color="whiteAlpha.800" _hover={{ color: 'white' }}>Chemical Research</Text>
            <Text cursor="pointer" color="whiteAlpha.800" _hover={{ color: 'white' }}>Pathology Testing</Text>
            <Text cursor="pointer" color="whiteAlpha.800" _hover={{ color: 'white' }}>Sample Processing</Text>
          </Stack>

          {/* Newsletter */}
          <Stack gap={4}>
            <Heading size="sm">Subscribe to Newsletter</Heading>
            <HStack>
              <Input
                placeholder="Email Address"
                bg="whiteAlpha.200"
                border="none"
                _placeholder={{ color: 'whiteAlpha.600' }}
              />
              <Button bg="blue.500" color="white" _hover={{ bg: 'blue.600' }}>
                Join
              </Button>
            </HStack>
          </Stack>
        </SimpleGrid>

        <Divider borderColor="whiteAlpha.300" mb={6} />

        <Flex direction={{ base: 'column', md: 'row' }} justify="space-between" align="center" color="whiteAlpha.700" fontSize="sm">
          <Text>© 2026 Xleb. All rights reserved.</Text>
          <HStack gap={4} mt={{ base: 4, md: 0 }}>
            <Text cursor="pointer" _hover={{ color: 'white' }}>Terms & Conditions</Text>
            <Text cursor="pointer" _hover={{ color: 'white' }}>Privacy Policy</Text>
          </HStack>
        </Flex>
      </Container>
    </Box>
  )
}
