const mongoose = require('mongoose')

// connect to db
mongoose.connect('mongodb://localhost/uebliothek').then(() => {
  console.log('connected with db')
}, error => {
  console.error(error)
})

// create schema
let activitySchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: String,
  description: String,
  tags: {
    type: Array,
    default: []
  },
  created: {
    type: Date,
    default: Date.now
  }
})

// methods per collection
activitySchema.statics.addTag = function (tag, cb) {
  // first get tags, then change array, then update?
  // this.update({ $set: { tags: 'large' }}, cb);
}

activitySchema.statics.removeTag = function (tag, cb) {

}

activitySchema.statics.updateDescription = function (newDescription, cb) {

}

activitySchema.statics.findByName = function (name, cb) {
  return this.find({ name: new RegExp(name, 'i') }, cb)
}

activitySchema.statics.findByTags = function (tags, cb) {
  // find all entries that have at least one of these tags
  // TODO: sort by how many tags match, if one matches all, these could be highlighted
  // if some match equally many tags, sort by created
  let tagsThatMatchAtLeastOne = this.find({ tags: { $in: tags } }, cb).sort('created')
  return tagsThatMatchAtLeastOne
}

// Derive model from schema
const Activity = mongoose.model('activity', activitySchema)

// store
exports.store = {
  createActivity: (name, description, tags) => {
    let newActivity = new Activity({
      name: name,
      description: description,
      tags: tags
    })
    newActivity.save(e => console.error(`Could not save new activity ${name}`, e))
    return this
  },
  searchByName: (name) => {
    return Activity.findByName(name, (error) => {
      console.error(`Error when trying to find by name ${name}.`, error)
    })
  },
  searchByTags: (tags) => {
    return Activity.findByTags(tags, (error) => {
      console.error(`Error when trying to find by tags ${tags}.`, error)
    })
  }
}
