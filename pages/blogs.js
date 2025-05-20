import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
import { Text } from '@chakra-ui/react'
import thumbComs from '../public/images/works/coms-home.png'
import thumbadulting101 from '../public/images/works/adulting101-home.png'
import thumbFakeFace from '../public/images/works/fakeface-home.png'
import thumbHandGesture from '../public/images/works/handgesture-home.png'
import apiServices from '../services/apiServices'
import { useEffect, useState } from 'react'

const Blogs = () => {
  const [posts, setPosts] = useState([])
  const [page, setPage] = useState(1)
  const [maxPage, setMaxPage] = useState(1)
  const [isLoading, setIsLoading] = useState(true)

  const getBlogs = async () => {
    try {
      const response = await apiServices.getBlog(page)
      console.log(response)
      const totalPages = parseInt(response.headers['x-wp-totalpages'], 10)
      setMaxPage(totalPages) // simpan max halaman
      setIsLoading(false)

      const formattedPosts = response.data.map(post => ({
        id: post.id,
        title: post.title.rendered,
        excerpt: post.excerpt.rendered,
        categories: post.categories, // ini ID, bisa fetch lagi jika perlu nama
        tags: post.tags, // ini ID juga
        link: post.link,
        featuredImage: post._embedded['wp:featuredmedia']
          ? post._embedded['wp:featuredmedia'][0].source_url
          : null
      }))

      setPosts(formattedPosts)
      console.log(formattedPosts)
    } catch (err) {
      console.log(err)
    }
  }
  useEffect(() => {
    getBlogs()
  }, [page])
  return (
    <Layout title="Works">
      <Container>
        <Heading as="h3" fontSize={20} mb={4}>
          Blogs
        </Heading>

        {isLoading ? (
          <Text
            textAlign="center"
            mx="auto"
            display="block"
            width="100%"
            fontSize="lg"
            color="gray.500"
            my={4}
          >
            Loading...
          </Text>
        ) : posts.length > 0 ? (
          <SimpleGrid columns={[1, 1, 2]} gap={6}>
            {posts.map(post => (
              <Section key={post.id}>
                <WorkGridItem
                  id={post.id}
                  link={post.link}
                  title={post.title}
                  thumbnail={post.featuredImage}
                >
                  {post.excerpt}
                </WorkGridItem>
              </Section>
            ))}
          </SimpleGrid>
        ) : (
          <Text textAlign="center" fontSize="lg" color="gray.500" mt={4}>
            Nothing blogs
          </Text>
        )}
      </Container>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '1rem',
          marginBottom: '2rem'
        }}
      >
        <button
          onClick={() => setPage(p => Math.max(p - 1, 1))}
          disabled={page === 1}
        >
          Previous
        </button>
        <span>
          Page {page} of {maxPage}
        </span>
        <button
          onClick={() => setPage(p => Math.min(p + 1, maxPage))}
          disabled={page === maxPage}
        >
          Next
        </button>
      </div>
    </Layout>
  )
}

export default Blogs
export { getServerSideProps } from '../components/chakra'
