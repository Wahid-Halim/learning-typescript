"use strict";
// interface
Object.defineProperty(exports, "__esModule", { value: true });
const newPost = {
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
const readPost = (post) => {
    console.log(`${post.title}, ${post.author.name}`);
};
readPost(newPost);
// with arrays
const posts = [];
posts.push(newPost);
//# sourceMappingURL=interface.js.map