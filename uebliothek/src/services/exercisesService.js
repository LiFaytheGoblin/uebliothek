import api from './services/api.js'

export default {
  fetchExercises () {
    return api().get('exercises')
  }
}
