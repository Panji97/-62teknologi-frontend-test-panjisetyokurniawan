import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:9090/data/business/v1',
})

const service = {
  getAllBussiness: async (limit, page, search, category, location, sort) => {
    try {
      const response = await api.get('/show', {
        params: {
          limit,
          page,
          search,
          category,
          location,
          sort,
        },
      })

      return response.data
    } catch (err) {
      return err
    }
  },

  getDetailBussiness: async (id) => {
    try {
      const response = await api.get(`/show/${id}`)
      return response.data
    } catch (err) {
      return err
    }
  },
}

export default service
