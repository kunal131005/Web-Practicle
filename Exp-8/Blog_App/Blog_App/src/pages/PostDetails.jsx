import { useParams } from "react-router-dom";
import { useContext } from "react";
import { BlogContext } from "../context/BlogContext";

export default function PostDetails() {
  const { id } = useParams();
  const { posts } = useContext(BlogContext);

  const post = posts.find(p => p.id === parseInt(id));

  if (!post) return <h2>Post not found</h2>;

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
}
