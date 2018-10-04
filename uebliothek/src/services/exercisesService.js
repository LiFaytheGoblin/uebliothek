import api from './api.js'

export default {
  fetchExercises () {
    return api().get('exercises')
  }
}
