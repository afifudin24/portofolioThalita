import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  SimpleGrid,
  Button,
  ListItem,
  useColorModeValue,
  IconButton,
  Tooltip,
  chakra
} from '@chakra-ui/react'

import { ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { Stack } from '@chakra-ui/react'
import { Text } from '@chakra-ui/react'
import { Badge, Wrap, WrapItem, List, ListIcon } from '@chakra-ui/react'
import { GridItem } from '../components/grid-item'
import SpotifyWidget from '../components/Spotify'
import SpotifyFixed from '../components/SpotifyFixed'

import {
  IoLogoTwitter,
  IoLogoInstagram,
  IoLogoGithub,
  IoLogoLinkedin,
  IoLogoWebComponent
} from 'react-icons/io5'
import Image from 'next/image'
import { MdStar } from 'react-icons/md'
import { useState } from 'react'
const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

const skills = [
  'Network Security',
  // 'SIEM (e.g., Splunk, ELK)',
  'Kali Linux',
  // 'Firewall Management',
  // 'Incident Response',
  'CTF & Threat Hunting',
  'Vulnerability Assessment',
  'Wireshark',
  'Burp Suite',
  // 'OSINT Tools',
  'Nmap & Metasploit'
  // 'Cyber Threat Intelligence'
]

const Home = () => {
  return (
    <>
      <Layout>
        <Container>
          <Box
            borderRadius="lg"
            mb={6}
            p={3}
            textAlign="center"
            bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
            css={{ backdropFilter: 'blur(10px)' }}
          >
            Hey there! I hunt threats, analyze patterns, and keep the cyber
            chaos in check.
          </Box>

          <Box data-aos="fade-up" display={{ md: 'flex' }}>
            <Box flexGrow={1}>
              <Heading as="h2" variant="page-title">
                Thalita Alya Putri
              </Heading>
              <p>Cybersecurity Analyst</p>
            </Box>
            <Box
              flexShrink={0}
              mt={{ base: 4, md: 0 }}
              ml={{ md: 6 }}
              textAlign="center"
            >
              <Box
                borderColor="whiteAlpha.800"
                borderWidth={2}
                borderStyle="solid"
                w="100px"
                h="100px"
                display="inline-block"
                borderRadius="full"
                overflow="hidden"
              >
                <ProfileImage
                  src="/images/Tha.jpg"
                  alt="Profile image"
                  borderRadius="full"
                  width="100%"
                  height="100%"
                />
              </Box>
            </Box>
          </Box>
          {/* buatkan ikon music dengan posisi fixed di bottom tapi tida nempel dan kanan */}

          <Section delay={0.1}>
            <Heading data-aos="fade-up" as="h3" variant="section-title">
              About
            </Heading>
            <Paragraph data-aos="fade-up">
              👋 Hey there! I'm a passionate Cybersecurity Analyst who thrives
              on keeping digital assets safe and threats at bay. From monitoring
              real-time alerts and analyzing vulnerabilities to responding to
              incidents and hardening defenses — I live for protecting what's
              behind the firewall. I speak fluent SIEM logs, see patterns where
              others see noise, and treat every anomaly as a puzzle waiting to
              be solved. Whether it's safeguarding sensitive data or stopping
              breaches before they happen, I'm committed to keeping the cyber
              world secure. I also regularly participate in CTF competitions to
              sharpen my skills and stay ahead of emerging threats. When I’m not
              threat-hunting or writing detection rules, you'll likely find me
              learning new exploits, diving into threat intel, or helping
              friends set up 2FA. Let's keep the internet a safer place — one
              packet at a time.
            </Paragraph>

            <Box data-aos="fade-up" align="center" my={4}>
              <NextLink href="/works" passHref scroll={false}>
                <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                  My portfolio
                </Button>
              </NextLink>
            </Box>
          </Section>

          <Section data-aos="fade-up" delay={0.2}>
            <Heading data-aos="fade-up" as="h3" variant="section-title">
              Bio
            </Heading>
            <BioSection data-aos="fade-up">
              <BioYear>2007</BioYear>
              Born in Cilacap, Indonesia.
            </BioSection>
            <BioSection data-aos="fade-up">
              <BioYear>2023</BioYear>
              Network Computer Engineering student on SMK Darussalam
              Karangpucung
            </BioSection>
          </Section>

          <Section data-aos="fade-up" delay={0.3}>
            <Heading data-aos="fade-up" as="h3" variant="section-title" mb={4}>
              I ♥
            </Heading>

            <Stack data-aos="fade-up" spacing={3}>
              <Text color="pink.400">
                🛡️ Exploring Cyber Threats & Defenses
              </Text>
              <Text>💻 Packet Sniffing & Log Analysis</Text>
              <Text>🏁 Competing in CTFs to sharpen my skills</Text>
              <Text>🔍 Digging into Vulnerabilities & Exploits</Text>
              <Text>📊 Tuning SIEM Alerts & Building Detection Rules</Text>
              <Text>
                🐱 Chilling with my cats after a long day of monitoring
              </Text>
              <Text>
                📚 Reading technical docs & staying up-to-date with new tools
              </Text>
            </Stack>
          </Section>
          <Heading data-aos="fade-up" as="h3" variant="section-title" mb={4}>
            Skill
          </Heading>
          {/* buatkan box untuk menampung frame playlist dengan fixed kiri bottom   */}

          <Section data-aos="fade-up">
            <Wrap spacing={3}>
              {skills.map(skill => (
                <WrapItem data-aos="fade-up" key={skill}>
                  <Badge
                    variant="solid"
                    colorScheme="teal"
                    fontSize="1em"
                    px={3}
                    py={1}
                    borderRadius="full"
                  >
                    {skill}
                  </Badge>
                </WrapItem>
              ))}
            </Wrap>
          </Section>

          {/* <Section delay={0.3} data-aos="fade-up">
        <Heading as="h3" variant="section-title">
          Achievements
        </Heading>

        <List spacing={3}>
          <ListItem data-aos="fade-up">
            <ListIcon as={MdStar} color="yellow.400" />
            5th Place Winner at IT Network System Administration LKS 2025,
            Cilacap Regency
          </ListItem>
        
        </List>
      </Section> */}

          <Section data-aos="fade-up" delay={0.3}>
            <Heading as="h3" variant="section-title">
              Social Media
            </Heading>
            <List>
              <ListItem>
                <Link
                  href="https://github.com/Thalitaalyaputri"
                  target="_blank"
                >
                  <Button
                    variant="ghost"
                    colorScheme="teal"
                    leftIcon={<IoLogoGithub />}
                  >
                    @nexzen
                  </Button>
                </Link>
              </ListItem>
              <ListItem>
                <Link
                  href="https://www.linkedin.com/in/thalita-alya-putri-3329b8305/"
                  target="_blank"
                >
                  <Button
                    variant="ghost"
                    colorScheme="teal"
                    leftIcon={<IoLogoLinkedin />}
                  >
                    @Thalita Alya Putri
                  </Button>
                </Link>
              </ListItem>
              <ListItem>
                <Link
                  href="https://www.instagram.com/thalitaputri_07?igsh=YXNzemQxNWRmYXY2"
                  target="_blank"
                >
                  <Button
                    variant="ghost"
                    colorScheme="teal"
                    leftIcon={<IoLogoInstagram />}
                  >
                    @thalitaputri_07
                  </Button>
                </Link>
              </ListItem>
              <ListItem>
                <Link href="https://tkj.smkdaka.sch.id" target="_blank">
                  <Button
                    variant="ghost"
                    colorScheme="teal"
                    leftIcon={<IoLogoWebComponent />}
                  >
                    TKJ DAKA
                  </Button>
                </Link>
              </ListItem>
            </List>

            <Box align="center" my={4}>
              <NextLink
                href="/Resume.pdf"
                passHref
                
                scroll={false}
              >
                <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                  <a href="/Resume.pdf" target='_blank'>
                    Download Resume
                  </a>
                </Button>
              </NextLink>
            </Box>
          </Section>
        </Container>
      </Layout>
    </>
  )
}
export default Home
export { getServerSideProps } from '../components/chakra'
