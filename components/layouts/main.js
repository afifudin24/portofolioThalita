import Head from 'next/head'
import dynamic from 'next/dynamic'
import NavBar from '../navbar'
import charactercat from "../../public/character/catty.json";
import server from "../../public/character/server2.json";
import { Box, Container, Flex } from '@chakra-ui/react'
import Footer from '../footer'
import VoxelDogLoader from '../voxel-dog-loader'
import ThreeViewer from '../three-viewer'
const LazyVoxelDog = dynamic(() => import('../voxel-dog'), {
  ssr: false,
  loading: () => <VoxelDogLoader />
 
})

const Lottie = dynamic(() => import("lottie-react"), {
  ssr: false,
});


const Main = ({ children, router }) => {
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
        <Lottie animationData={charactercat} loop={true} style={{ height: 200, background: 'transparent' }} />
        </Flex>

        {children}

        <Footer />
      </Container>
    </Box>
  )
}

export default Main
