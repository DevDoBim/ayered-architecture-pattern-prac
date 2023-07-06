const express = require('express');
const router = express.Router();

const PostsController = require('../controllers/posts.controller');
const postsController = new PostsController(); // 모듈에 대한 클래스 선언

// API 동작, router와 controller 연결
router.get('/', postsController.getPosts);
router.post('/', postsController.createPost);

module.exports = router;