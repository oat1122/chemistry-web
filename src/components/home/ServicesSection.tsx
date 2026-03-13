'use client'

import { Box, Container, SimpleGrid, Flex, Heading, Text, VStack, IconButton, Image, Card, CardBody } from '@chakra-ui/react'
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react'

const services = [
  {
    title: 'Basic Chemicals',
    category: 'เคมีอุตสาหกรรมทั่วไป',
    description: 'สารเคมีพื้นฐานหลากหลายชนิดที่ใช้ในกระบวนการผลิตระดับอุตสาหกรรม ครอบคลุมทุกความต้องการ',
    image: 'https://picsum.photos/seed/basic-chemicals/600/400',
  },
  {
    title: 'Solvents',
    category: 'สารละลายโซเว้นท์',
    description: 'สารละลายไฮโดรคาร์บอนคุณภาพสูง สำหรับอุตสาหกรรมสี กาว ยาง และการทำความสะอาด',
    image: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=600&q=80',
  },
  {
    title: 'Analytical Chemicals',
    category: 'เคมีสำหรับห้องปฏิบัติการ',
    description: 'สารเคมีและอุปกรณ์สำหรับห้องแล็บที่ได้มาตรฐาน แม่นยำ และน่าเชื่อถือสำหรับงานวิเคราะห์',
    image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=600&q=80',
  },
]

export function ServicesSection() {
  return (
    <Box py={24} bg="gray.50" id="products">
      <Container maxW="7xl" px={{ base: 4, md: 8 }}>
        <Flex direction={{ base: 'column', lg: 'row' }} gap={16} align="flex-start">
          
          {/* Left Side: Text and Stats */}
          <VStack align="flex-start" gap={6} flex={{ base: '1', lg: '0 0 30%' }}>
            <Box px={3} py={1} rounded="full" bg="white" border="1px solid" borderColor="gray.200" fontSize="xs" fontWeight="bold" color="gray.600">
              OUR PRODUCTS
            </Box>
            <Heading size="2xl" color="blue.900" lineHeight="tight">
              สินค้าของเรา
            </Heading>
            
            <Flex gap={3} mt={4}>
              <IconButton aria-label="Previous" rounded="full" variant="outline" size="sm">
                <ChevronLeft size={16} />
              </IconButton>
              <IconButton aria-label="Next" rounded="full" variant="outline" size="sm">
                <ChevronRight size={16} />
              </IconButton>
            </Flex>

            <Box mt={8}>
              <Heading fontSize="6xl" color="blue.900" display="flex" alignItems="center">
                1000<Text as="span" color="blue.500" ml={1}>+</Text>
              </Heading>
              <Text color="gray.500" mt={2} maxW="xs">
                รายการสินค้าเคมีภัณฑ์ที่ครอบคลุมทุกอุตสาหกรรม
              </Text>
            </Box>
          </VStack>

          {/* Right Side: Service Cards */}
          <SimpleGrid columns={{ base: 1, md: 2, xl: 3 }} gap={8} flex="1">
            {services.map((service, index) => (
              <Card key={index} variant="elevated" rounded="3xl" overflow="hidden" border="none" boxShadow="xl">
                <Box h="200px" overflow="hidden">
                  <Image 
                    src={service.image} 
                    alt={service.title} 
                    objectFit="cover" 
                    w="full" 
                    h="full" 
                    transition="transform 0.3s"
                    _hover={{ transform: 'scale(1.05)' }}
                  />
                </Box>
                <CardBody p={6}>
                  <Text fontSize="xs" fontWeight="bold" color="blue.500" letterSpacing="wider" mb={2}>
                    {service.category}
                  </Text>
                  <Heading size="md" color="blue.900" mb={3}>
                    {service.title}
                  </Heading>
                  <Text color="gray.600" fontSize="sm" mb={6}>
                    {service.description}
                  </Text>
                  
                  <Box position="absolute" bottom={0} right={0} p={4}>
                    <IconButton aria-label="Learn more" rounded="full" bg="blue.900" color="white" _hover={{ bg: 'blue.800' }}>
                      <ArrowRight size={18} />
                    </IconButton>
                  </Box>
                </CardBody>
              </Card>
            ))}
          </SimpleGrid>

        </Flex>
      </Container>
    </Box>
  )
}
