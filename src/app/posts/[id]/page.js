import Link from "next/link";
import React from "react";

export async function generateStaticParams() {
  const res = await fetch("http://localhost:5000/posts");
  const posts = await res.json();
  const ids = posts.map((post) => {
    return {
      id: post.id,
    };
  });
  console.log(ids);
  return ids;
}

const DetailPage = async ({ params }) => {
  //   console.log(params);
  const res = await fetch(`http://localhost:5000/posts/${params.id}`, {
    cache: "no-cache",
  });

  const post = await res.json();

  return (
    <div>
      <div className="card w-[70%] bg-gray-100 my-5 shadow-xl mx-auto">
        <div className="card-body">
          <h2 className="card-title">{post.title}</h2>
          <p>{post.description}</p>
          <p>Likes: {post.likes}</p>
          <div className="card-actions justify-end">
            <Link href={`/posts`}>
              <button className="btn">Back</button>{" "}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
