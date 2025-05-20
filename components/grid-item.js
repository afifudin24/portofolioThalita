import NextLink from 'next/link'
import Image from 'next/image'
import { Box, Text, LinkBox, LinkOverlay } from '@chakra-ui/react'
import { Badge, HStack } from '@chakra-ui/react';

import unavailable from "../public/images/unavailable.png"

import { Global } from '@emotion/react'
const fallbackImage =
  'https://static.vecteezy.com/system/resources/previews/020/248/866/original/no-pictures-icon-free-vector.jpg'
export const GridItem = ({ children, href, title, thumbnail }) => (
  <Box w="100%" textAlign="center">
    <LinkBox cursor="pointer">
      <Image
        src={thumbnail}
        alt={title}
        className="grid-item-thumbnail"
        placeholder="blur"
        loading="lazy"
      />
      <LinkOverlay href={href} target="_blank">
        <Text mt={2}>{title}</Text>
      </LinkOverlay>
      <Text fontSize={14}>{children}</Text>
    </LinkBox>
  </Box>
)

export const WorkGridItem = ({ link, children, id, title, thumbnail }) => (
  <Box w="100%" textAlign="center">
    <NextLink target={'_blank'} href={link} passHref scroll={false}>
      <LinkBox cursor="pointer">
        <Image
          src={thumbnail || unavailable}
          alt={title}
          className="grid-item-thumbnail"
          width={300}
          height={170}
          unoptimized
        />
        <LinkOverlay target={'_blank'} href={link}>
          <Text mt={2} mb={2} fontSize={18}>
            <div dangerouslySetInnerHTML={{ __html: title }} />
          </Text>
        </LinkOverlay>
        <Text fontSize={12} textAlign={'justify'}>
          <div dangerouslySetInnerHTML={{ __html: children }} />
        </Text>
      </LinkBox>
    </NextLink>
  </Box>
)

export const WorkGridItem2 = ({ link, children, id, title, thumbnail, techArray = [] }) => (
  <Box w="100%" textAlign="center">
    <NextLink target="_blank" href={`/works/${id}`} passHref scroll={false}>
      <LinkBox cursor="pointer">
        <Image
        src={`https://ngide.ynzhiao.my.id/storage/images/${thumbnail}` || fallbackImage}
          alt={title}
          className="grid-item-thumbnail"
          width={450}
          height={300}
          unoptimized
        />

        <LinkOverlay target="_blank" href={`/works/${id}`}>
          <Text mt={2} mb={2} fontSize={18} dangerouslySetInnerHTML={{ __html: title }} />

          {techArray.length > 0 && (
            <HStack spacing={2} mt={2} justify="center">
              {techArray.map((item, idx) => (
                <Badge key={idx} colorScheme="teal">
                  {item}
                </Badge>
              ))}
            </HStack>
          )}
        </LinkOverlay>

        <Text fontSize={12} textAlign="justify" dangerouslySetInnerHTML={{ __html: children }} />
      </LinkBox>
    </NextLink>
  </Box>
)
export const WorkGridItem3 = ({ name, source, description, link }) => (
  <Box w="100%" textAlign="center">
    <NextLink target="_blank" href={`/works/${id}`} passHref scroll={false}>
      <LinkBox cursor="pointer">
    
        <LinkOverlay target="_blank" href={`/works/${id}`}>
          <Text mt={2} mb={2} fontSize={18} dangerouslySetInnerHTML={{ __html: name }} />
          <Text mt={2} mb={2} fontSize={14} dangerouslySetInnerHTML={{ __html: source }} />

        </LinkOverlay>

        <Text fontSize={12} textAlign="justify" dangerouslySetInnerHTML={{ __html: description }} />
      </LinkBox>
    </NextLink>
  </Box>
)


export const GridItemStyle = () => (
  <Global
    styles={`
      .grid-item-thumbnail {
        border-radius: 12px;
      }
    `}
  />
)
