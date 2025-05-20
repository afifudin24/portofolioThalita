import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem3 } from '../components/grid-item'
import { Text } from '@chakra-ui/react'
import thumbComs from '../public/images/works/coms-home.png'
import thumbadulting101 from '../public/images/works/adulting101-home.png'
import thumbFakeFace from '../public/images/works/fakeface-home.png'
import thumbHandGesture from '../public/images/works/handgesture-home.png'
import apiServices from '../services/apiServices'
import { useEffect, useState } from 'react'

const Certificates = () => {
  const [certificates, setCertificates] = useState([])

  const [isLoading, setIsLoading] = useState(true)

  const getCertificates = async () => {
    try {
      const response = await apiServices.getCertificate()
      console.log(response)
      
      setIsLoading(false)
      setCertificates(response.data)
    } catch (err) {
      console.log(err)
    }
  }
  useEffect(() => {
    getCertificates();
  }, [])
  return (
    <Layout title="Works">
      <Container>
        <Heading as="h3" fontSize={20} mb={4}>
          Certificates
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
        ) : certificates.length > 0 ? (
          <SimpleGrid columns={[1, 1, 2]} gap={6}>
            {certificates.map(crt => (
              <Section key={post.id}>
                <WorkGridItem3
                  description={crt.description}
                  name={crt.name}
                  source={crt.source}
                  link={crt.link}
                >
                  
                </WorkGridItem3>
              </Section>
            ))}
          </SimpleGrid>
        ) : (
          <Text textAlign="center" fontSize="lg" color="gray.500" my={8}>
            Nothing certificates
          </Text>
        )}
      </Container>
     
    </Layout>
  )
}

export default Certificates
export { getServerSideProps } from '../components/chakra'
