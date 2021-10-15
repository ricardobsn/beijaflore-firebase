import React from "react";
import "./Feed.css";
import Message from "./Message";
import Post from "./Post";
import db from "./firebase";

function Feed() {
      const [posts, setPosts] = React.useState([]);

      React.useEffect(() => {
        db.collection("posts").orderBy('timestamp', 'desc').onSnapshot((snapshot) =>
          setPosts(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              data: doc.data(),
            }))
          )
        );
      }, []);

    return (
        <div className='feed'>
            <Message />
            {posts.map((post) => (
                <Post
                    key={post.data.id}
                    profilePic={post.data.profilePic}
                    image={post.data.image}
                    userName={post.data.userName}
                    timestamp={post.data.timestamp}
                    message={post.data.message}
                />
            ))}
        </div>
    );
}

export default Feed;