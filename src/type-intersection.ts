interface HasId {
  id: number;
}

const addIdToValue = <T>(val: T): T & HasId => {
  const id = Math.random();
  return { ...val, id };
};

interface Post {
  title: string;
  thumbsUp: number;
}

const post = addIdToValue<Post>({
  title: "New bgi new",
  thumbsUp: 292,
});

console.log(post.id, post.thumbsUp, post.title);
