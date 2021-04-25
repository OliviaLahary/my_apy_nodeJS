const express = require('express');
const router = express.Router();

const myPost = [
    {
    id: 1,
    title: "Mon premier post",
    content: "blablabla",

    },
    {
    id: 2,
    title: "Mon deuxieme post",
    content: "tirelipimpon",
    },
    {
    id: 3,
    title: "Mon troisième post",
    content: "tralalère",
    },
]

router.get('/', (req, res) =>{
   res.send("My blog Apps")
}),

router.get('/posts', (req, res)=>{
    res.send(myPost)
});

// GET /posts/:id
// returns the post with that id (json)
// bonus: return a 404 status and the json response { error: “post not found” }

router.get('/posts/:id', (req, res) =>{
    const { params } = req;
    const post = myPost.filter(post => post.id === Number(params.id));
    res.send(post[0])
});

// POST /posts
// accepts requests with body { title: String, content: String }
// returns the post that was just created. Use postman to test this endpoint
// bonus: return a 400 status and the json response { error: “posts must have title and content” } if the request body doesn’t contain title or content.

router.post('/posts', (req, res) =>{
    const myPostAutoIncre = myPost.length + 1;
    const newPost = {
        id: myPostAutoIncre,
        title: [req.body.title],
        content: [req.body.content]
    };
    console.log(myPost.length);
    
    myPost.push(newPost);
    
    // const { params } =req;
    // const res = myPost.filter(post => post.id )
});

module.exports = router;