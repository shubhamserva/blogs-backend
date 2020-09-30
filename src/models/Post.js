var moongoose = require('mongoose');

const Post = moongoose.Schema({
    pId:{
        type: String,
    },
    pTitle:{
        type: String,
    },
    pContent:{
        type: String
    },
    pAuthor:{
        type: String
    }

})

module.exports = moongoose.model('Post',Post)