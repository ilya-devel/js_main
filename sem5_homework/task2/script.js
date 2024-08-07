const post = {
    author: "John", // вывести этот текст
    postId: 23,
    comments: [
        {
            userId: 10,
            userName: "Alex",
            text: "lorem ipsum",
            rating: {
                likes: 10,
                dislikes: 2, // вывести это число
            },
        },
        {
            userId: 5, // вывести это число
            userName: "Jane",
            text: "lorem ipsum 2", // вывести этот текст
            rating: {
                likes: 3,
                dislikes: 1,
            },
        },
    ],
}

console.log("Some data from object:")
console.log(`Author: ${post.author}`)
console.log(`Count dislikes: ${post.comments[0].rating.dislikes}`)
console.log(`User ID from comment: ${post.comments[1].userId}`)
console.log(`Text of comment: ${post.comments[1].text}`)