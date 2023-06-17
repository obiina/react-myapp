//import mongoose to create a new schema

const mongoose = require('mongoose');

const ListItemsSchema = new mongoose.Schema({
    item:{
        type: String,
        required: true,

    },

    description:{
        type: String,
        required: true,
    },

    features:{
        type: String,
        required: true,
    },

    featuresDeeds:{
        type: String,
        required: true,
    }
})

module.exports = mongoose.model('list', ListItemsSchema);