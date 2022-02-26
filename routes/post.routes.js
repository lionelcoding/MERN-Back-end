const router = require('express').Router();
const postController = require('../controllers/post.controller');
const commentController = require('../controllers/comment.controller')

router.get("/", postController.readPost);
router.post("/", postController.createPost);
router.put("/:id", postController.updatePost);
router.delete("/:id", postController.deletePost);

router.patch("/like-post/:id",postController.likePost)
router.patch("/unlike-post/:id",postController.unlikePost)

//comments

router.patch("/comment-post/:id",commentController.commentPost);
router.patch("/edit-comment-post/:id",commentController.editPost);
router.patch("/delete-comment-post/:id", commentController.deletePost)

module.exports = router