'use client'

import { Box, Container, SimpleGrid, Heading, Text, Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, Image } from '@chakra-ui/react'

const faqs = [
  { q: "การสั่งซื้อสินค้าเคมีภัณฑ์ต้องทำอย่างไร?", a: "ลูกค้าสามารถติดต่อสั่งซื้อหรือขอใบเสนอราคาผ่าน Line Official: @chemtech หรือส่งอีเมลมาที่ sales@chemtech-th.com ทางเราจะมีเจ้าหน้าที่ติดต่อกลับโดยเร็วที่สุด" },
  { q: "ทางบริษัทมีบริการจัดส่งสินค้าอย่างไร?", a: "เรามีบริการรถบรรทุกวัตถุอันตราย (Dangerous Goods Logistics) โดยพนักงานขับรถ ท.4 ที่ผ่านการอบรมหลักสูตร ADR มั่นใจได้ในความปลอดภัย" },
  { q: "รับทดสอบและวิเคราะห์น้ำเสียด้วยหรือไม่?", a: "มีครับ เราให้บริการ Jar Testing Service เพื่อจำลองกระบวนการตกตะกอน และหาสัดส่วนเคมีที่เหมาะสมที่สุดสำหรับระบบบำบัดน้ำเสียของคุณ" },
  { q: "สามารถช่วยขอใบอนุญาตสารเคมีได้หรือไม่?", a: "แน่นอนครับ เรามีทีมคอยดูแลเรื่องเอกสารและขออนุญาตกับกรมโรงงานอุตสาหกรรม หรือหน่วยงานที่เกี่ยวข้องให้แบบครบวงจร" },
]

export function FaqSection() {
  return (
    <Box py={24} bg="blue.50">
      <Container maxW="7xl" px={{ base: 4, md: 8 }}>
        <SimpleGrid columns={{ base: 1, lg: 2 }} gap={16} alignItems="center">
          
          <Box>
            <Text fontSize="sm" fontWeight="bold" letterSpacing="widest" textTransform="uppercase" color="blue.500" mb={4}>
              FAQS
            </Text>
            <Heading size="2xl" color="blue.900" mb={10}>
              คำถามที่พบบ่อย
            </Heading>

            <Accordion allowMultiple>
              {faqs.map((faq, idx) => (
                <AccordionItem key={idx} border="none" mb={4} bg="white" rounded="xl" overflow="hidden" shadow="sm">
                  <h2>
                    <AccordionButton py={6} px={6} _hover={{ bg: 'gray.50' }}>
                      <Box as="span" flex='1' textAlign='left' fontWeight="bold" color="blue.900">
                        {faq.q}
                      </Box>
                      <AccordionIcon color="blue.500" />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={6} px={6} color="gray.600">
                    {faq.a}
                  </AccordionPanel>
                </AccordionItem>
              ))}
            </Accordion>
          </Box>

          <Box position="relative">
             <Box bg="white" p={4} rounded="3xl" shadow="xl">
              <Image 
                src="https://picsum.photos/seed/scientist-lab/800/500" 
                alt="Scientist" 
                rounded="2xl" 
                w="full" 
                h="500px" 
                objectFit="cover" 
              />
            </Box>
          </Box>

        </SimpleGrid>
      </Container>
    </Box>
  )
}
