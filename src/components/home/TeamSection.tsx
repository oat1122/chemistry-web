'use client'

import { Box, Container, SimpleGrid, Flex, Heading, Text, IconButton, Image } from '@chakra-ui/react'
import { ArrowLeft, ArrowRight } from 'lucide-react'

const team = [
  { name: 'ดร. สมชาย รักพงษ์', role: 'วิศวกรสิ่งแวดล้อมอาวุโส', image: 'https://images.unsplash.com/photo-1557862921-37829c790f19?auto=format&fit=crop&w=400&h=400&q=80' },
  { name: 'คุณวิภาวี บริรักษ์', role: 'ผู้จัดการฝ่ายขายเคมีภัณฑ์', image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&h=400&q=80' },
  { hoisted: false, name: 'คุณณัฐพล ใจดี', role: 'ผู้เชี่ยวชาญด้านความปลอดภัย', image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&h=400&q=80' },
  { name: 'คุณสุชาดา แสงธรรม', role: 'นักวิจัยเคมีวิเคราะห์', image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&h=400&q=80' },
]

export function TeamSection() {
  return (
    <Box py={24} bg="white">
      <Container maxW="7xl" px={{ base: 4, md: 8 }}>
        <Flex justify="space-between" align="flex-end" mb={16} wrap="wrap" gap={6}>
          <Box maxW="lg">
            <Text fontSize="sm" fontWeight="bold" letterSpacing="widest" textTransform="uppercase" color="blue.500" mb={2}>
              EXPERT TEAM
            </Text>
            <Heading size="2xl" color="blue.900" lineHeight="tight" mb={4}>
              ทีมผู้เชี่ยวชาญ<br />มากประสบการณ์
            </Heading>
            <Text color="gray.500">
              บุคคลากรของเราพร้อมให้คำปรึกษา แนะนำ และแก้ไขปัญหาด้านเคมีภัณฑ์และสิ่งแวดล้อมอย่างมืออาชีพ
            </Text>
          </Box>
          <Flex gap={3}>
            <IconButton aria-label="Prev" rounded="full" bg="blue.900" color="white" _hover={{ bg: 'blue.800' }}>
              <ArrowLeft size={18} />
            </IconButton>
            <IconButton aria-label="Next" rounded="full" bg="gray.100" color="gray.600" _hover={{ bg: 'gray.200' }}>
              <ArrowRight size={18} />
            </IconButton>
          </Flex>
        </Flex>

        <SimpleGrid columns={{ base: 1, sm: 2, lg: 4 }} gap={8}>
          {team.map((member, idx) => (
            <Box key={idx} textAlign="center" role="group">
              <Box rounded="3xl" overflow="hidden" mb={6} position="relative" bg="gray.100">
                <Image 
                  src={member.image} 
                  alt={member.name} 
                  w="full" 
                  h="300px" 
                  objectFit="cover" 
                  transition="transform 0.4s"
                  _groupHover={{ transform: 'scale(1.05)' }}
                />
              </Box>
              <Heading size="md" color="blue.900" mb={1}>{member.name}</Heading>
              <Text color="blue.500" fontSize="sm" fontWeight="bold">{member.role}</Text>
            </Box>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  )
}
