const mongoose = require('mongoose');




const eventSchema = new mongoose.Schema({
  title: String,
  date: String,
  time: String,
  friends: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }],
  restaurants: []
})

// // Use schema to create model
const Event = mongoose.model('Event', eventSchema);

// // Export User model
module.exports = Event;