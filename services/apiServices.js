import axios from 'axios'

const apiServices = {
  getBlog: async page => {
    try {
      const response = await axios.get(
        'https://tkj.smkdaka.sch.id/wp-json/wp/v2/posts',
        {
          params: {
            author: 6,
            per_page: 10,
            page: page,
            _embed: true // ini penting untuk ambil featured image
          }
        }
      )
      return response
    } catch (err) {
      return err.response
    }
  },
  getProject : async () => {
    try {
      const response = await axios.get('https://ngide.ynzhiao.my.id/api/getPost/4');
      return response
    } catch (err) {
      return err.response
    }
  },
  getProjectById : async (id) => {
    try {
      const response = await axios.get(`https://ngide.ynzhiao.my.id/api/showPost/${id}`);
      return response
    } catch (err) {
      return err.response
    }
  },
  getCertificate : async () => {
    try {
      const response = await axios.get('https://ngide.ynzhiao.my.id/api/getCertificate/4');
      return response
    } catch (err) {
      return err.response
    }
  }
}

export default apiServices
