import Link from "next/link";
import React from "react";

const Posts = ({ posts }) => {
  return (
    <div>
      <h1>Posts List</h1>
      <br />
      {posts?.map((post) => (
        <Link href={`posts/${post.id}`} passHref>
          <h5>
            {post.id} {post.title}
          </h5>
        </Link>
      ))}
    </div>
  );
};

export default Posts;

export async function getStaticProps() {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const data = await response.json();
  return {
    props: {
      posts: data.slice(0, 3),
    },
  };
}
