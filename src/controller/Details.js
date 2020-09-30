const Response = require('../response');
const updateServices = require("../services/UpdateServices");

function getPosts(req,res) {
    const response = new Response();
    updateServices.getPosts().then((data)=>{
        response.data.result = data;
        response.status.statusCode = 200;
        response.status.message = "Posts Fetched";
        res.status(200).json(response);
    })
}

function addPost(req, res) {
    const response = new Response();
    updateServices.addPost(req.body).then((data)=>{
        response.data.result = data;
        response.status.statusCode = 200;
        response.status.message = "Posts added successfully";
        res.status(200).json(response);
    })

}

function updatePost(req, res) {
    const response = new Response();
    console.log("update cntoler",req.body);
    updateServices.updatePost(req.body).then((result) => {
        response.data.result = result;
        response.status.statusCode = 200;
        response.status.message = "Post updated successfully";
        res.status(200).json(response);
    }).catch((err) => {
        response.status.statusCode = '500';
        response.status.message = "unable to Update post";
        res.status(500).json(err);
    })
}

module.exports = {updatePost,
                    addPost,
                    getPosts }