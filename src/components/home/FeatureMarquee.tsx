'use client'

import { Box, Text, Flex } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { Plus } from 'lucide-react'

const features = ["Basic Chemicals", "Solvents", "Analytical Chemicals", "Jar Testing", "Engineering Design", "Basic Chemicals", "Solvents", "Analytical Chemicals", "Jar Testing", "Engineering Design"]

export function FeatureMarquee() {
  return (
    <Box py={10} overflow="hidden" bg="white" borderY="1px solid" borderColor="gray.100">
      <motion.div 
        animate={{ x: [0, -1000] }} 
        transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
        style={{ display: 'flex', whiteSpace: 'nowrap', width: 'max-content' }}
      >
        {features.map((item, i) => (
          <Flex key={i} align="center" px={8}>
            <Text fontSize="5xl" fontWeight="bold" color="blue.900" letterSpacing="tight">
              {item}
            </Text>
            <Box color="blue.500" mx={8}>
              <Plus size={40} strokeWidth={3} />
            </Box>
          </Flex>
        ))}
      </motion.div>
    </Box>
  )
}
