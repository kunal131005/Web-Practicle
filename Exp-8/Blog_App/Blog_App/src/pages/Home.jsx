import { useContext } from "react";
import { BlogContext } from "../context/BlogContext";
import PostCard from "../components/PostCard";

export default function Home() {
  const { posts } = useContext(BlogContext);

  return (
    <div>
      {posts.map(post => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
}
