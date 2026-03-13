'use client'

import { Box, Container, Heading, Text, Button, Flex } from '@chakra-ui/react'
import { Play } from 'lucide-react'

export function HeroSection() {
  return (
    <Box as="section" pt={{ base: 4, md: 8 }} pb={8} px={{ base: 4, md: 8 }}>
      <Box
        position="relative"
        minH="calc(100vh - 4rem)"
        display="flex"
        alignItems="center"
        bgImage="linear-gradient(rgba(10, 37, 88, 0.7), rgba(10, 37, 88, 0.7)), url('https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=1920&q=80')"
        bgSize="cover"
        bgPosition="center"
        bgAttachment="fixed"
        color="white"
        borderRadius="40px"
        overflow="hidden"
      >
        <Container maxW="7xl" px={{ base: 8, md: 16 }} position="relative" zIndex={10}>
          <Flex direction="column" maxW="xl" gap={6}>
            <Text fontSize="sm" fontWeight="bold" letterSpacing="widest" textTransform="uppercase" color="blue.300">
              Chemtech Innovation Co., Ltd.
            </Text>
            <Heading as="h1" fontSize={{ base: '4xl', md: '5xl', lg: '6xl' }} lineHeight="tight" fontWeight="extrabold">
              ศูนย์รวมเคมีอุตสาหกรรม<br />กว่า 1,000 รายการ
            </Heading>
            <Text fontSize="lg" color="whiteAlpha.900" maxW="md">
              จัดจำหน่ายเคมีอุตสาหกรรม เคมีบำบัดน้ำเสีย สารละลายโซเว้นท์ 
              และสารเคมี-อุปกรณ์ห้องแล็บครบวงจร
            </Text>
            
            <Flex align="center" gap={6} mt={4}>
              <Button
                size="lg"
                bg="white"
                color="blue.900"
                _hover={{ bg: 'blue.50' }}
                rounded="full"
                px={8}
              >
                ติดต่อเรา
              </Button>
            </Flex>
          </Flex>
        </Container>

        {/* Left Cutout (Arrows) */}
        <Flex
          position="absolute"
          left={0}
          top="50%"
          transform="translateY(-50%)"
          bg="white"
          w={{ base: "40px", md: "60px" }}
          h={{ base: "100px", md: "140px" }}
          borderRightRadius="30px"
          align="center"
          justify="center"
          direction="column"
          gap={4}
          zIndex={10}
          _before={{
            content: '""',
            position: "absolute",
            top: "-30px",
            left: 0,
            w: "30px",
            h: "30px",
            background: "radial-gradient(circle at 100% 0%, transparent 30px, white 30px)"
          }}
          _after={{
            content: '""',
            position: "absolute",
            bottom: "-30px",
            left: 0,
            w: "30px",
            h: "30px",
            background: "radial-gradient(circle at 100% 100%, transparent 30px, white 30px)"
          }}
        >
          <Box
            as="button"
            type="button"
            color="gray.500"
            bg="transparent"
            border="none"
            outline="none"
            boxShadow="none"
            p={0}
            _hover={{ color: "blue.500" }}
            _focus={{ outline: 'none', boxShadow: 'none' }}
            _focusVisible={{ outline: 'none', boxShadow: 'none' }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
          </Box>
          <Box
            as="button"
            type="button"
            color="gray.500"
            bg="transparent"
            border="none"
            outline="none"
            boxShadow="none"
            p={0}
            _hover={{ color: "blue.500" }}
            _focus={{ outline: 'none', boxShadow: 'none' }}
            _focusVisible={{ outline: 'none', boxShadow: 'none' }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
          </Box>
        </Flex>

        {/* Bottom Right Cutout (Watch Video) */}
        <Flex
          position="absolute"
          bottom={0}
          right={0}
          bg="white"
          pl={{ base: 6, md: 10 }}
          pt={{ base: 6, md: 8 }}
          pb={{ base: 6, md: 10 }}
          pr={{ base: 6, md: 10 }}
          borderTopLeftRadius="40px"
          align="center"
          justify="center"
          zIndex={10}
          _before={{
            content: '""',
            position: "absolute",
            top: "-40px",
            right: 0,
            w: "40px",
            h: "40px",
            background: "radial-gradient(circle at 0% 0%, transparent 40px, white 40px)"
          }}
          _after={{
            content: '""',
            position: "absolute",
            bottom: 0,
            left: "-40px",
            w: "40px",
            h: "40px",
            background: "radial-gradient(circle at 0% 0%, transparent 40px, white 40px)"
          }}
        >
          <Button
            variant="ghost"
            color="gray.800"
            _hover={{ bg: 'transparent', color: 'blue.600' }}
            _active={{ bg: 'transparent' }}
            bg="transparent"
            border="none"
            outline="none"
            boxShadow="none"
            _focus={{ outline: 'none', boxShadow: 'none' }}
            _focusVisible={{ outline: 'none', boxShadow: 'none' }}
            leftIcon={<Box as="span" bg="white" boxShadow="none" border="none" p={3} rounded="full"><Play fill="currentColor" size={16} /></Box>}
            rounded="full"
            fontWeight="bold"
          >
            Watch Video
          </Button>
        </Flex>
      </Box>
    </Box>
  )
}
