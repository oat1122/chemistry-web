'use client'

import { Box, Container, SimpleGrid, Flex, Heading, Text, Button, Image, Link, Card, CardBody } from '@chakra-ui/react'
import { ArrowRight, Clock } from 'lucide-react'

const blogs = [
  { title: "New Diagnostic Techniques Introduced in Q3", date: "April 10, 2026", image: "https://picsum.photos/seed/diagnostic-techniques/600/400" },
  { title: "Understanding Blood Biomarkers for Aging", date: "May 2, 2026", image: "https://picsum.photos/seed/blood-biomarkers/600/400" },
  { title: "The Role of Pathology in Preventive Care", date: "June 15, 2026", image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=600&q=80" },
]

export function BlogSection() {
  return (
    <Box py={24} bg="gray.50">
      <Container maxW="7xl" px={{ base: 4, md: 8 }}>
        <Flex justify="space-between" align="flex-end" mb={16} wrap="wrap" gap={6}>
          <Box maxW="lg">
            <Text fontSize="sm" fontWeight="bold" letterSpacing="widest" textTransform="uppercase" color="blue.500" mb={2}>
              OUR BLOG
            </Text>
            <Heading size="2xl" color="blue.900" lineHeight="tight">
              Interesting articles updated every day
            </Heading>
          </Box>
          <Button variant="outline" rounded="full" px={8} colorScheme="blue">
            View All Posts
          </Button>
        </Flex>

        <SimpleGrid columns={{ base: 1, md: 3 }} gap={8}>
          {blogs.map((blog, idx) => (
            <Card key={idx} variant="outline" rounded="3xl" overflow="hidden" _hover={{ shadow: 'lg' }} transition="all 0.3s">
              <Box h="200px" overflow="hidden">
                <Image 
                  src={blog.image} 
                  alt={blog.title} 
                  w="full" 
                  h="full" 
                  objectFit="cover" 
                  transition="transform 0.4s"
                  _hover={{ transform: 'scale(1.05)' }}
                />
              </Box>
              <CardBody p={6}>
                <Flex align="center" color="gray.500" fontSize="sm" mb={4} gap={2}>
                  <Clock size={14} />
                  <Text>{blog.date}</Text>
                </Flex>
                <Heading size="md" color="blue.900" mb={4} lineHeight="tall">
                  <Link href="#" _hover={{ color: 'blue.500', textDecoration: 'none' }}>
                    {blog.title}
                  </Link>
                </Heading>
                <Flex align="center" color="blue.500" fontWeight="bold" fontSize="sm" cursor="pointer" _hover={{ color: 'blue.600' }}>
                  <Text mr={2}>Read Article</Text>
                  <ArrowRight size={16} />
                </Flex>
              </CardBody>
            </Card>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  )
}
