<template>
  <section>
    <div class="line headings">
      <div class="lineElement">
        Name
      </div>
      <div class="lineElement">
        Description
      </div>
      <div class="lineElement">
        Tags
      </div>
    </div>
    <div v-for="exercise in exercises" :key="exercise.id" class="line content">
      <div class="lineElement">
        {{exercise.name}}
      </div>
      <div class="lineElement">
        {{exercise.description}}
      </div>
      <div class="lineElement">
        <div v-for="tag in exercise.tags" :key="tag" class="tagWrapper" @click="deleteTag(tag)">
          <div class="triangle"></div><div class="tag"><span class="tagName">#{{tag}}</span><span class="highlight">&#x25CF;</span></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import exercisesService from '@/services/exercisesService'

export default {
  name: 'exercises',
  data () {
    return {
      exercises: []
    }
  },
  mounted () {
    this.getExercises()
  },
  methods: {
    async getExercises () {
      const response = await exercisesService.fetchExercises()
      this.exercises = response.data
      console.log(this.exercises)
    }
  }
}
</script>

<style scoped>
.line {
  display: flex;
  align-items: stretch;
}

.lineElement {
  width: 30%;
  padding: 5px;
}

.lineElement:nth-child(2n+0) {
  margin: 0 1% 0 1%;
}

.headings {
  font-weight: bold;
  border-bottom: 1px solid #000;
}
</style>
