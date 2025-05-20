import { useRouter } from 'next/router'
import Layout from '../../components/layouts/article'
import { Heading } from '@chakra-ui/react'
import { Container } from '@chakra-ui/react'
import apiServices from '../../services/apiServices'
import { useEffect, useState } from 'react'
import { Image } from '@chakra-ui/react'
import { Text } from '@chakra-ui/react'
import { Badge, HStack } from '@chakra-ui/react';
const WorkDetail = () => {
  const router = useRouter()
  const { id } = router.query
    const [project, setProjects] = useState(null);
    const [techArray, setTecthArray] = useState([]);    
    const getProjectById = async ()  => {
        try {
            const response = await apiServices.getProjectById(id);
            setProjects(response.data); // sesuaikan dengan struktur data dari API kamu
            console.log(response.data);

            setTecthArray(JSON.parse(response.data.tech || '[]')); 
        } catch (err) {
            console.error(err);
            setProjects(null);
        }
    }
    useEffect(() => {
        getProjectById();
    }, [])
  return (
     <Layout title="Works">
        <Container>
        {
            project ? (
                <>
                <Image  src={`https://ngide.ynzhiao.my.id/storage/images/${project.gambar}`} alt={project.title} />
                <Heading size='xl' my={2}>
                    {project.title}
                </Heading>
                 {techArray.length > 0 && (
                            <HStack spacing={2} my={2}>
                              {techArray.map((item, idx) => (
                                <Badge key={idx} colorScheme="teal">
                                  {item}
                                </Badge>
                              ))}
                            </HStack>
                          )}
                <Text my={2} textAlign={'justify'}>
                   
                    <div dangerouslySetInnerHTML={{ __html: project.content }}>
                        
                        </div>
                </Text>


                
               
               
                </>
            ) : (
                <p>Loading...</p>
            )
        }
    
        </Container>
     </Layout>
  )
}

export default WorkDetail;
export { getServerSideProps } from '../../components/chakra';
