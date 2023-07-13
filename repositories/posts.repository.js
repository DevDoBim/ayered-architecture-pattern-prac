//Posts Sequelize를 사용하기 위해 불러온다.
const { Posts } = require('../models');

class PostRepository {
  findAllPost = async () => {
    // ORM인 Sequelize에서 Posts 모델의 findAll 메소드를 사용해 데이터를 요청합니다.
    const posts = await Posts.findAll();
    // Posts의 모든 게시글을 posts에 불러온다.

    return posts;
  }

  // 게시글 생성 repository Method
  createPost = async (nickname, password, title, content) => {
    // ORM인 Sequelize에서 Posts 모델의 create 메소드를 사용해 데이터를 요청합니다.
    const createPostData = await Posts.create({ nickname, password, title, content });
    // Posts를 이용하여 게시글을 생성 => createPostData에 할당

    return createPostData;
  }
}

module.exports = PostRepository;