'use client'

import { Box, Container, SimpleGrid, Heading, Text, Button, List, ListItem, ListIcon } from '@chakra-ui/react'
import { CheckCircle2 } from 'lucide-react'

const pricingData = [
  { price: '1,500', title: 'ตัวอย่างทดลอง (Sample)', isHighlighted: false, desc: 'สำหรับการทดลองใช้งานเบื้องต้นในห้องปฏิบัติการเพื่อประเมินผล' },
  { price: '15,000', title: 'ถังมาตรฐาน (Drum 200L)', isHighlighted: true, desc: 'ขนาดถังมาตรฐานยอดนิยม สำหรับโรงงานอุตสาหกรรมขนาดกลาง' },
  { price: '75,000', title: 'ถังขนาดใหญ่ (IBC 1000L)', isHighlighted: false, desc: 'แพ็คเกจสำหรับอุตสาหกรรมขนาดใหญ่ คุ้มค่าที่สุด เหมาะสำหรับการผลิตต่อเนื่อง' },
]

export function PricingSection() {
  return (
    <Box py={24} bg="gray.50">
      <Container maxW="7xl" px={{ base: 4, md: 8 }}>
        <Box textAlign="center" mb={16}>
          <Text fontSize="sm" fontWeight="bold" letterSpacing="widest" textTransform="uppercase" color="blue.500" mb={4}>
            PRICING
          </Text>
          <Heading size="2xl" color="blue.900" maxW="2xl" mx="auto" lineHeight="tight">
            ขนาดบรรจุและราคาแนะนำ
          </Heading>
        </Box>

        <SimpleGrid columns={{ base: 1, md: 3 }} gap={8} alignItems="center">
          {pricingData.map((pack, idx) => (
            <Box 
              key={idx} 
              p={8} 
              bg={pack.isHighlighted ? 'blue.900' : 'white'} 
              color={pack.isHighlighted ? 'white' : 'gray.800'}
              rounded="3xl" 
              shadow={pack.isHighlighted ? '2xl' : 'sm'}
              border={pack.isHighlighted ? 'none' : '1px solid'}
              borderColor="gray.200"
              transform={pack.isHighlighted ? { base: 'none', lg: 'scale(1.05)' } : 'none'}
              zIndex={pack.isHighlighted ? 10 : 1}
              position="relative"
            >
              <Text fontSize="lg" fontWeight="bold" color={pack.isHighlighted ? 'blue.300' : 'blue.500'}>
                {pack.title}
              </Text>
              
              <Box my={6}>
                <Text fontSize="5xl" fontWeight="black" display="flex" alignItems="flex-start" color={pack.isHighlighted ? 'white' : 'blue.900'}>
                  <Text as="span" fontSize="2xl" mt={2} mr={1}>$</Text>
                  {pack.price}
                </Text>
                <Text mt={2} color={pack.isHighlighted ? 'whiteAlpha.800' : 'gray.500'} fontSize="sm">
                  {pack.desc}
                </Text>
              </Box>

              <List spacing={4} mb={8}>
                {["Free Consultations", "Expert Doctors", "Full Medical Reports", "24/7 Support"].map((feature, i) => (
                  <ListItem key={i} display="flex" alignItems="center">
                    <ListIcon as={CheckCircle2} color={pack.isHighlighted ? 'blue.300' : 'green.500'} />
                    <Text fontSize="sm">{feature}</Text>
                  </ListItem>
                ))}
              </List>

              <Button 
                w="full" 
                size="lg" 
                rounded="full" 
                bg={pack.isHighlighted ? 'blue.500' : 'blue.50'} 
                color={pack.isHighlighted ? 'white' : 'blue.900'}
                _hover={{ bg: pack.isHighlighted ? 'blue.400' : 'blue.100' }}
              >
                Choose Plan
              </Button>
            </Box>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  )
}
