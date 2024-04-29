import Link from "next/link";
import React from "react";
import styles from "./Posts.module.css";

const res = await fetch("http://localhost:5000/posts", {
  cache: "no-store",
});
const posts = await res.json();
// console.log(posts);
const PostPage = async () => {
  return (
    <div className="w-full">
      <h1 className={styles.header_text}>Total Post:{posts.length}</h1>
      {posts.map((post) => (
        <div
          key={post?.id}
          className="card w-[70%] bg-gray-100 my-5 shadow-xl mx-auto"
        >
          <div className="card-body">
            <h2 className="card-title">{post.title}</h2>
            <p>{post.description}</p>
            <p>Likes: {post.likes}</p>
            <div className="card-actions justify-end">
              <Link href={`/posts/${post.id}`}>
                <button className="btn btn-primary">See More</button>{" "}
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostPage;
