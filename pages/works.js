import { Container, Heading, SimpleGrid, Divider, Text } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem, WorkGridItem2 } from '../components/grid-item'
import { Badge, HStack } from '@chakra-ui/react';

import { useEffect, useState } from 'react'
import apiServices from '../services/apiServices'

const Works = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(false);
 

  const getProjects = async () => {
    setLoading(true);
    try {
      const response = await apiServices.getProject();
      setProjects(response.data); // sesuaikan dengan struktur data dari API kamu
      
      console.log(response.data);
    } catch (err) {
      console.error(err);
      setProjects([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getProjects();
  }, []);

  return (
    <Layout title="Works">
      <Container>
        <Heading as="h3" fontSize={20} mb={4}>
          Projects
        </Heading>

        {loading ? (
          <Text>Loading...</Text>
        ) : projects.length > 0 ? (
         <SimpleGrid columns={[1, 1, 2]} gap={6}>
  {projects.map((project, index) => {
    let techArray = [];

    try {
      techArray = JSON.parse(project.tech || '[]');
    } catch (e) {
      console.error('Failed to parse tech for project:', project.id, e);
    }

    return (
      <Section key={project.id || index} delay={0.1}>
        <WorkGridItem2
          techArray={techArray}
          id={project.id}
          thumbnail={project.gambar} // sesuaikan dengan field thumbnail kamu
          title={project.title}
          link={project.link}
        >
          {project.description}
        </WorkGridItem2>
      </Section>
    );
  })}
</SimpleGrid>
        ) : (
          <Text>No projects found.</Text>
        )}
      </Container>
    </Layout>
  );
};

export default Works;
export { getServerSideProps } from '../components/chakra';
