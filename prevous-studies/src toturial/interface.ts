// interface

interface Author {
  name: string;
  avatar: string;
}

interface Post {
  title: string;
  body: string;
  tags: string[];
  created_at: Date;
  author: Author;
}

const newPost: Post = {
  title: "Big News",
  body: "news about something",
  tags: ["news"],
  created_at: new Date(),
  author: {
    name: "Wahid",
    avatar: "./images/avatar.png",
  },
};

console.log(newPost);

// with function
const readPost = (post: Post): void => {
  console.log(`${post.title}, ${post.author.name}`);
};
readPost(newPost);

// with arrays

const posts: Post[] = [];
posts.push(newPost);
