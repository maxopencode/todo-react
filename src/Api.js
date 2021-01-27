import axios from 'axios'

const instance = axios.create({
  baseURL: 'http://localhost:9000/api',
  headers: {
    'Content-type': 'application/json'
  }
});

export default {

  getAll: () => instance.get('todos?sort=id', {
    transformResponse: [(data) => {
      return data ? JSON.parse(data)['_embedded'].todos : [];
    }]
  }),

  create: (title, completed) => instance.post('todos', {title, completed}),

  setCompleted: (id, completed) => instance.patch('todos/' + id, {completed}),

  update: (id, title, completed) => instance.put('todos/' + id, {title, completed}),

  remove: (id) => instance.delete('todos/' + id)
}
