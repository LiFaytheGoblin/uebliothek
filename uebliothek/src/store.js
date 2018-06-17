import mongoose from 'mongoose'

//connect to db
mongoose.connect('mongodb://localhost/uebliothek').then(() => {}, error => {
  console.error(error)
});

//create schema
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
});

//Derive model from schema
let activity = mongoose.model('activity', activitySchema);

function createActivity(name, description) {

}

function addTag(tagName) {

}

function deleteTag(tagName) {

}

function correctDescription(id, description) {

}

function getActivitiesByTagName(tagName) {
  return []
}

function getActivitiesByName(name) {
  return []
}
