'use client'

import { Box, Container, SimpleGrid, Flex, Heading, Text, Button, Image, HStack } from '@chakra-ui/react'
import { ArrowRight } from 'lucide-react'

function KpiCircle({ value }: { value: number }) {
  const radius = 42
  const circumference = 2 * Math.PI * radius
  const dashLength = (value / 100) * circumference

  return (
    <Box position="relative" w="86px" h="86px" flexShrink={0}>
      <svg width="86" height="86" viewBox="0 0 100 100" style={{ display: 'block' }}>
        <circle cx="50" cy="50" r={radius} fill="none" stroke="#dbeafe" strokeWidth="9px" />
        <circle
          cx="50"
          cy="50"
          r={radius}
          fill="none"
          stroke="#2563eb"
          strokeWidth="9px"
          strokeLinecap="round"
          strokeDasharray={`${dashLength} ${circumference}`}
          transform="rotate(-90 50 50)"
        />
      </svg>
      <Text
        position="absolute"
        inset={0}
        display="grid"
        placeItems="center"
        fontWeight="extrabold"
        color="blue.900"
        fontSize="md"
      >
        {value}%
      </Text>
    </Box>
  )
}

export function AboutSection() {
  return (
    <Box py={24} bg="gray.100">
      <Container maxW="7xl" px={{ base: 4, md: 8 }}>
        <SimpleGrid columns={{ base: 1, lg: 2 }} gap={16} alignItems="center">
          
          {/* Left Side: Images */}
          <Box position="relative">
            <Box bg="white" p={4} rounded="3xl" shadow="md">
              <Image 
                src="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=800&q=80" 
                alt="Scientist working in lab" 
                rounded="2xl" 
                w="full" 
                h="400px" 
                objectFit="cover" 
              />
            </Box>
            {/* Decorative block */}
            <Box position="absolute" top="-4" left="-4" w="24" h="24" bg="blue.50" rounded="tl-3xl" zIndex={-1} />
            <Box position="absolute" bottom="-4" right="-4" w="32" h="32" bg="blue.100" rounded="br-3xl" zIndex={-1} />
          </Box>

          {/* Right Side: Content */}
          <Flex direction="column" gap={6}>
            <Text fontSize="sm" fontWeight="bold" letterSpacing="widest" textTransform="uppercase" color="blue.500">
              Who We Are
            </Text>
            
            <Heading as="h2" size="2xl" color="blue.900" lineHeight="tall">
              Chemtech Innovation Co., Ltd.
            </Heading>
            
            <Text color="gray.600" fontSize="lg">
              เราคือศูนย์รวมเคมีอุตสาหกรรมกว่า 1,000 รายการ ให้บริการทั้งเคมีบำบัดน้ำเสีย 
              เคมี-อุปกรณ์ห้องแล็บ และสารละลายต่าง ๆ พร้อมบริการให้คำปรึกษาและแก้ไขปัญหาล่วงหน้า
            </Text>

            <Box mt={4}>
              <Button 
                variant="outline" 
                colorScheme="blue" 
                rounded="full" 
                px={8} 
                rightIcon={<ArrowRight size={16} />}
                _hover={{ bg: 'blue.50' }}
              >
                อ่านเพิ่มเติม
              </Button>
            </Box>

            <SimpleGrid columns={{ base: 1, sm: 2 }} gap={4} mt={8}>
              <Box
                bg="white"
                border="1px solid"
                borderColor="blue.100"
                rounded="2xl"
                p={4}
                shadow="sm"
                transition="all 0.25s ease"
                _hover={{ shadow: 'md', transform: 'translateY(-2px)', borderColor: 'blue.200' }}
              >
                <HStack gap={4} align="center">
                  <KpiCircle value={100} />
                  <Text fontWeight="bold" color="blue.900" lineHeight="short" fontSize="sm">
                    สินค้าคุณภาพ<br />ได้มาตรฐาน
                  </Text>
                </HStack>
              </Box>

              <Box
                bg="white"
                border="1px solid"
                borderColor="blue.100"
                rounded="2xl"
                p={4}
                shadow="sm"
                transition="all 0.25s ease"
                _hover={{ shadow: 'md', transform: 'translateY(-2px)', borderColor: 'blue.200' }}
              >
                <HStack gap={4} align="center">
                  <KpiCircle value={95} />
                  <Text fontWeight="bold" color="blue.900" lineHeight="short" fontSize="sm">
                    จัดส่งรวดเร็ว<br />ครอบคลุม
                  </Text>
                </HStack>
              </Box>
            </SimpleGrid>

          </Flex>

        </SimpleGrid>
      </Container>
    </Box>
  )
}
