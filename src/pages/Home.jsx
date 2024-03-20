import React, { useState, useEffect } from "react";
import { Container, PostCard } from "../Components";
import appwriteService from "../appwrite/conf";

function Home() {
  const [post, setPost] = useState([]);
  useEffect(() => {
    appwriteService.getPosts().then((post) => {
      if (post) {
        setPost(post.documents);
      }
    });
  }, []);

  if (post.length > 0) {
    return (
      <div className="w-full py-8 mt-4 text-center">
        <Container>
          <div className="flex flex-wrap">
            <div className="p-2 w-full">
              <h1 className="text-2xl font-bold hover:text-gray-500">
                Login to read posts
              </h1>
            </div>
          </div>
        </Container>
      </div>
    );
  }
  return (
    <div className="w-full py-8">
      <Container>
        <div className="flex flex-wrap">
          {post.map((post) => (
            <div key={post.$id} className="p-2 w-1/4">
              <PostCard {...post} />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default Home;
