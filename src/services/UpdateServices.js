const posts = require("../models/Post");

function addPost(req) {
    return new Promise((resolve, reject) => {
        const post = new posts(req);
        post.save((err, result) => {
            if (!err) {
                resolve(result);
            }
            else {
                reject(err);
            }
        });
    })
}
function updatePost(req) {
    return new Promise((resolve, reject) => {
        console.log("req in ",req)
        posts.findOneAndUpdate({ "_id": req.pId }, {
            $set: {
                "pTitle": req.pTitle, "pContent": req.pContent
            }
        }, (err, result) => {
            if (!err) {
                //console.log("Data inserted is ", result);
                resolve(result);
            }
            else {
                reject(err);
            }
        });
    })
}

function getPosts(req) {
    return new Promise((resolve, reject) => {
        posts.find({}).
            then((result) => {
                resolve(result);
            }).catch((err) => {
                console.log("error is " + err);
                reject(error);
            })
    })
}


module.exports = {
    updatePost,
    addPost,
    getPosts
}