import Head from 'next/head'
import dynamic from 'next/dynamic'
import { useState } from 'react'
import NavBar from '../navbar'
import charactercat from '../../public/character/catty.json'
import server from '../../public/character/server2.json'
import { Box, Container, Flex } from '@chakra-ui/react'
import Footer from '../footer'
import VoxelDogLoader from '../voxel-dog-loader'
import ThreeViewer from '../three-viewer'
import SpotifyWidget from '../Spotify'
import SpotifyFixed from '../SpotifyFixed'
import { Tooltip, IconButton } from '@chakra-ui/react'
import { MdMusicNote } from 'react-icons/md'
import { useBreakpointValue } from '@chakra-ui/react'
const LazyVoxelDog = dynamic(() => import('../voxel-dog'), {
  ssr: false,
  loading: () => <VoxelDogLoader />
})

const Lottie = dynamic(() => import('lottie-react'), {
  ssr: false
})

const Main = ({ children, router }) => {
  const [showPlaylist, setShowPlaylist] = useState(false)
  const handleShowPlaylist = () => setShowPlaylist(!showPlaylist)
  const isMobile = useBreakpointValue({ base: true, md: false })
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Vishwas Saini's homepage" />
        <meta name="author" content="Vishwas Saini" />
        <meta name="author" content="Vishwas Saini" />
        <link rel="apple-touch-icon" href="apple-touch-icon.png" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <title>Thalita Alya Putri</title>
      </Head>

      <NavBar path={router.asPath} />

      <Container maxW="container.md" pt={'10'}>
        {/* <LazyVoxelDog /> */}
        <Flex justifyContent={'center'} gap={5} alignItems={'center'}>
          {/* <Lottie animationData={server} loop={true} style={{ height: 200, background: 'transparent' }} /> */}
          <Lottie
            animationData={charactercat}
            loop={true}
            style={{ height: 200, background: 'transparent' }}
          />
        </Flex>

        {children}
        {isMobile ? (
          <Box position="fixed" bottom="24px" right="24px" zIndex="999">
            <Tooltip label="My Playlist" hasArrow placement="left">
              <IconButton
                icon={<MdMusicNote />}
                colorScheme="teal"
                isRound
                aria-label="Open Music"
                size="lg"
                boxShadow="lg"
                onClick={handleShowPlaylist}
              />
            </Tooltip>
          </Box>
        ) : (
          ''
        )}

        {isMobile ? (
          <SpotifyWidget
            showPlayer={showPlaylist}
            setShowPlayer={setShowPlaylist}
            handleShowPlaylist={handleShowPlaylist}
          />
        ) : (
          <SpotifyFixed />
        )}

        <Footer />
      </Container>
    </Box>
  )
}

export default Main
