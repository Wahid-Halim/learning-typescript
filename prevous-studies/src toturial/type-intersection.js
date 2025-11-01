"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const addIdToValue = (val) => {
    const id = Math.random();
    return { ...val, id };
};
const post = addIdToValue({
    title: "New bgi new",
    thumbsUp: 292,
});
console.log(post.id, post.thumbsUp, post.title);
//# sourceMappingURL=type-intersection.js.map