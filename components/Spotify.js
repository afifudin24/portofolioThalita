import { Box, IconButton } from '@chakra-ui/react'
import { CloseIcon } from '@chakra-ui/icons'
import { useState } from 'react'

const SpotifyWidget = ({ showPlayer, setShowPlayer, handleShowPlaylist }) => {
  //   const [showPlayer, setShowPlayer] = useState(true)

  if (!showPlayer) return null

  return (
    <Box
      position="fixed"
      bottom="24px"
      left="24px"
      zIndex="999"
      width={{ base: '90%', md: '340px' }}
      borderRadius="12px"
      boxShadow="lg"
      bg="white" // optional background if needed
    >
      {/* Close Button */}
      <Box
        position="absolute"
        top="-10"
        bg={'white'}
        color={'black'}
        rounded={'md'}
        right="0"
        zIndex="1000"
      >
        <IconButton
          size="sm"
          icon={<CloseIcon />}
          aria-label="Close player"
          onClick={() => setShowPlayer(false)}
        />
      </Box>

      {/* Spotify Iframe */}
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

export default SpotifyWidget
