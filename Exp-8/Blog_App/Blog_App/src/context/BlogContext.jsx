import { createContext, useState } from "react";

export const BlogContext = createContext();

export function BlogProvider({ children }) {
  const [posts, setPosts] = useState([
    { id: 1, title: "First Post", content: "Welcome to my blog!" }
  ]);

  const addPost = (newPost) => {
    setPosts([...posts, { ...newPost, id: posts.length + 1 }]);
  };

  return (
    <BlogContext.Provider value={{ posts, addPost }}>
      {children}
    </BlogContext.Provider>
  );
}
