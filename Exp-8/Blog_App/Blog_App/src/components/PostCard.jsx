import styled from "styled-components";
import { Link } from "react-router-dom";

const Card = styled.div`
  background: white;
  padding: 20px;
  margin: 10px;
  border-radius: 10px;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
`;

export default function PostCard({ post }) {
  return (
    <Card>
      <h2>{post.title}</h2>
      <p>{post.content.substring(0, 100)}...</p>
      <Link to={`/post/${post.id}`}>Read More</Link>
    </Card>
  );
}
