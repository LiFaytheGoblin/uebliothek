<template>
  <div class="Uebliothek">
    <div class="container topContainer">
    <header>
      <h1>Uebliothek</h1>
    </header>
    <nav>
      <div class="search">
        <input v-model="searchInput" placeholder="Name || (#tag1 ... #tagN)" @keyup.enter="display(searchInput)">
      </div>
      <div class="button" title="Show all activities ever added" @click="display()">Show me all ativities</div>
      <div class="button new" title="Add new activity" @click="addNewActivity()">+</div>
    </nav>
  </div>
  <div class="container bottomContainer">
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
      <div class="line content">
        <div class="lineElement">
          activity.name
        </div>
        <div class="lineElement">
          activity.description
        </div>
        <div class="lineElement">
          <div v-for="tag in ['un', 'deux']" :key="tag" class="tagWrapper" @click="deleteTag(tag)">
            <div class="triangle"></div><div class="tag"><span class="tagName">#{{tag}}</span><span class="highlight">&#x25CF;</span></div>
          </div>
        </div>
      </div>
    </section>
    <footer>
      Uebliothek | Linda Fernsel, 2018 | License: MIT
    </footer>
  </div>
  </div>
</template>

<script>
export default {
  name: 'Uebliothek',
  data () {
    return {
      searchInput: '',
      tagMarker: '#'
    }
  },
  methods: {
    displayError: function (errorText) {
      alert(errorText)
    },
    clearTextFrom: function (text, string) {
      const clearedText = text.split(string).join('')
      console.log('cleared text is ', clearedText)
      return clearedText
    },
    deriveTagsFromText: function (text, marker) {
      if (!text || !marker) return []
      const tags = text.split(' ').filter(word => {
        return word.includes(marker)
      })
      return this.removeDuplicates(tags)
    },
    removeDuplicates: function (array) {
      return [ ...new Set(array) ]
    },
    deleteTag: function () {
      console.log('delete')
    },
    addNewActivity: function () {
      const name = prompt('Name your exercise')
      if (name === null) return
      if (!name) {
        this.displayError('You need to provide a name')
        return
      }
      const rawDescription = prompt(`Provide a description. You can add tags by marking them with a ${this.tagMarker}. Example: "Stand on both feet. #Stretch your #arms to the sky."`)
      if (rawDescription === null) return
      console.log('raw is ', rawDescription)
      const description = rawDescription ? this.clearTextFrom(rawDescription, this.tagMarker) : ''
      const tags = this.deriveTagsFromText(rawDescription, this.tagMarker)

      console.log('Adding: ', name, description, tags)
      // store.createActivity(name, description, tags)
    },
    display: function (searchTerm) {
      if (!searchTerm) {
        if (searchTerm === ' ') {
          return
        }
        console.log('display all')
      } else {
        const searchBy = searchTerm.includes(this.tagMarker) ? 'tags' : 'name'
        console.log(`display all with ${searchBy} `, searchTerm)
        if (searchBy === 'name') {
          // store.searchByName(searchTerm)
        } else {
          const allWords = searchTerm.split(' ')
          let allTags = allWords.map(word => {
            if (word.includes(this.tagMarker)) return word.substr(1)
          })
          console.log('Found tags ', allTags)
          // store.searchByTags(allTags)
        }
      }
    }
  }
}
</script>

<style scoped>
.Uebliothek {
  width: 900px;
  margin: 0 auto;
  top:0;
  left:0;
}

.container {
  background-color: #ffffff;
  width: 900px;
}

.topContainer {
  height: 15%;
  display:flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  overflow: hidden;
}

header {
  flex-grow: 5;
}

nav {
  flex-grow: 5;
  display: flex;
  align-items: center;
  /* justify-content: flex-start; */
  align-content: flex-start;
}

section, footer {
  margin: 2% 0 0 0;
}

.line {
  display: flex;
  align-items: stretch;
}

.button {
  padding: 5px;
  box-shadow: 0 0 2px 2px #e9e9e9;
  margin: 0 4% 0 4%;
  height: 20px;
  overflow: hidden;
  text-align: center;
  flex-shrink: 0;
  color:#999999;
}

.button:hover {
  box-shadow: 0 0 1px 1px #99f999;
  cursor: pointer;
  color: #99f999;
}

.new {
  width: 23px;
  height:23px;
  border-radius: 23px;
  font-size: 23px;
  font-weight: bold;
  line-height: 20px;
  /* color:#fff; */
  /* background-color:#e9e9e9; */
}

.search > input {
  margin: 0 0 0 5%;
  padding:8px 15px;
  background:#e9e9e9;
  box-shadow: 0 0 1px 1px #e9e9e9;
  border:0px solid ;
  width: 200px;
}

.search > input:hover {
  box-shadow: 0 0 1px 1px #99f999;
}

.headings {
  font-weight: bold;
  border-bottom: 1px solid #000;
}

.content:nth-child(2n) {
  background-color: #e9e9e9;
}

.lineElement {
  width: 30%;
  padding: 5px;
}

.lineElement:nth-child(2n+0) {
  margin: 0 1% 0 1%;
}

.tagWrapper {
  margin: 2px;
  display: inline-block;
}

.tagWrapper:hover {
  cursor: pointer;
}

.tagWrapper:hover .tagName {
  text-decoration: line-through;
}

.tag {
  padding: 4px;
  display: inline-block;
  background-color:#ddd;
  min-width: 50px;
}

.triangle {
  display:inline-block;
  width: 0;
  height: 0;
  margin: 0;
  bottom:0;
  vertical-align: bottom;
  border-top: 14px solid transparent;
  border-bottom: 14px solid transparent;
  border-right:15px solid #ddd;
}

.highlight, .highlight:hover {
  color: #C2C2C2;
  margin: 0 5px 0 10px;
  font-size: 40%;
  vertical-align: middle;
}

footer {
  text-align: center;
  color: #C2C2C2;
}

</style>
