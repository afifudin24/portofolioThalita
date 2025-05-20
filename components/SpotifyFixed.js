import { Box } from '@chakra-ui/react'

const SpotifyFixed = () => {
  return (
    <Box
      position="fixed"
      bottom="24px"
      left="24px"
      zIndex="999"
      width={{ base: '90%', md: '340px' }}
      borderRadius="12px"
      overflow="hidden"
      boxShadow="lg"
    >
      <iframe
        style={{ borderRadius: '12px' }}
        src="https://open.spotify.com/embed/playlist/5oZtdJ33PEqHElnB9mjhiR?utm_source=generator"
        width="100%"
        height="152"
        frameBorder={0}
        allowFullScreen
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
        title="My Spotify Playlist"
      ></iframe>
    </Box>
  )
}

export default SpotifyFixed
