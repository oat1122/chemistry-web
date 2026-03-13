'use client'

import { Box, Container, SimpleGrid, Heading, Text, VStack, Divider, Flex } from '@chakra-ui/react'
import { Microscope, FlaskConical, ClipboardCheck, FileText } from 'lucide-react'

const steps = [
  {
    num: "01",
    title: "Jar Testing Service",
    desc: "ทดลองการตกตะกอนเพื่อหาสัดส่วนเคมีที่เหมาะสมสำหรับบำบัดน้ำเสีย ช่วยประหยัดต้นทุนและเพิ่มประสิทธิภาพ",
    icon: Microscope
  },
  {
    num: "02",
    title: "Engineering Design",
    desc: "ติดตั้ง ปรับปรุง และให้คำปรึกษาระบบบำบัดน้ำเสียโดยวิศวกรและผู้เชี่ยวชาญเฉพาะทาง",
    icon: FlaskConical
  },
  {
    num: "03",
    title: "Dangerous Goods Logistics",
    desc: "คลังสินค้าและบริการขนส่งวัตถุอันตราย ดำเนินการโดยพนักงานที่ผ่านการอบรม(ADR) อย่างถูกต้อง",
    icon: ClipboardCheck
  },
  {
    num: "04",
    title: "Chemical Training",
    desc: "บริการอบรมความรู้และความปลอดภัยเกี่ยวกับการใช้งานสารเคมีเบื้องต้น เพื่อการปฏิบัติงานที่ถูกต้อง",
    icon: FileText
  }
]

export function HowItWorksSection() {
  return (
    <Box py={24} bg="blue.900" color="white" position="relative" overflow="hidden" id="services">
      <Container maxW="7xl" px={{ base: 4, md: 8 }}>
        
        <Box mb={16} maxW="lg">
          <Text fontSize="sm" fontWeight="bold" letterSpacing="widest" textTransform="uppercase" color="yellow.400" mb={4}>
            OUR SERVICES
          </Text>
          <Heading size="2xl" lineHeight="tight">
            บริการของเรา<br />แบบครบวงจร
          </Heading>
        </Box>

        <SimpleGrid columns={{ base: 1, sm: 2, lg: 4 }} gap={8}>
          {steps.map((step, idx) => {
            const Icon = step.icon
            return (
              <Box 
                key={idx} 
                p={8} 
                bg="whiteAlpha.100" 
                rounded="2xl" 
                border="1px solid" 
                borderColor="whiteAlpha.200"
                position="relative"
                _hover={{ bg: 'whiteAlpha.200', transform: 'translateY(-5px)' }}
                transition="all 0.3s"
              >
                <VStack align="flex-start" gap={6}>
                  <Text fontSize="xl" fontWeight="bold">
                    {step.title}
                  </Text>
                  <Text color="whiteAlpha.700" fontSize="sm">
                    {step.desc}
                  </Text>
                  <Box mt="auto" color="blue.300">
                    <Icon size={32} strokeWidth={1.5} />
                  </Box>
                </VStack>

                <Flex 
                  position="absolute" 
                  bottom={-4} 
                  right={8} 
                  w={10} 
                  h={10} 
                  bg="white" 
                  color="blue.900" 
                  rounded="full" 
                  align="center" 
                  justify="center" 
                  fontWeight="bold"
                  shadow="md"
                >
                  {step.num}
                </Flex>
              </Box>
            )
          })}
        </SimpleGrid>

        <Divider borderColor="whiteAlpha.300" mt={20} mb={10} />
      </Container>
    </Box>
  )
}
