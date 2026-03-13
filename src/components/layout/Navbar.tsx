'use client'

import { useState, useEffect } from 'react'
import { Box, Flex, HStack, Text, Button, IconButton } from '@chakra-ui/react'
import { Link } from '@chakra-ui/next-js'
import { Search } from 'lucide-react'

const navLinks = [
  { name: 'HOME', href: '/' },
  { name: 'PRODUCTS', href: '#' },
  { name: 'SERVICES', href: '#' },
  { name: 'PORTFOLIO', href: '#' },
  { name: 'BLOG', href: '#' },
  { name: 'CONTACT US', href: '#' },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <Box
      as="header"
      position="fixed"
      top={0}
      w="full"
      zIndex={100}
      bg={isScrolled ? "rgba(255, 255, 255, 0.95)" : "white"}
      backdropFilter={isScrolled ? "blur(10px)" : "none"}
      boxShadow={isScrolled ? "sm" : "none"}
      transition="all 0.3s ease-in-out"
    >
      <Flex
        maxW="7xl"
        mx="auto"
        px={{ base: 4, md: 8 }}
        py={isScrolled ? 4 : 6}
        transition="all 0.3s ease-in-out"
        align="center"
        justify="space-between"
      >
        {/* Logo */}
        <HStack>
          <Text fontSize="2xl" fontWeight="black" color="blue.600" letterSpacing="tighter" transition="color 0.3s ease-in-out">
            CHEMTECH
          </Text>
        </HStack>

        {/* Desktop Navigation */}
        <HStack display={{ base: 'none', lg: 'flex' }} gap={6}>
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              fontSize="sm"
              fontWeight="bold"
              color="gray.700"
              _hover={{ color: 'blue.500', textDecoration: 'none' }}
              transition="color 0.3s ease-in-out"
            >
              {link.name}
            </Link>
          ))}
        </HStack>

        {/* Actions */}
        <HStack gap={4} display={{ base: 'none', md: 'flex' }}>
          <Text fontSize="sm" fontWeight="bold" color="green.600" transition="color 0.3s ease-in-out">
            Line: @chemtech
          </Text>
          <IconButton
            aria-label="Search"
            variant="ghost"
            rounded="full"
            color="gray.600"
            _hover={{ bg: 'gray.100' }}
            transition="all 0.3s ease-in-out"
          >
            <Search size={20} />
          </IconButton>
          <Button
            rounded="full"
            bg="blue.900"
            color="white"
            _hover={{ bg: 'blue.800' }}
            px={6}
            transition="all 0.3s ease-in-out"
          >
            Appointment →
          </Button>
        </HStack>
      </Flex>
    </Box>
  )
}
