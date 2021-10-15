import React, { useState } from "react";
import "./Message.css";
import { Avatar } from "@material-ui/core";
import { useStateValue } from "./StateProvider";
import db from "./firebase";
import firebase from "firebase";

function Message() {
    const [input, setInput] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    const [{ user }, dispatch] = useStateValue();

      const handleSubmit = (e) => {
        e.preventDefault();
        db.collection("posts").add({
          message: input,
          timestamp: firebase.firestore.FieldValue.serverTimestamp(),
          profilePic: user.photoURL,
          userName: user.displayName,
          image: imageUrl,
        });
        setInput("");
        setImageUrl("");
      };

  console.log(user)
    return (
        <div className='message'>
            <div className='message__top'>
                <Avatar src={user.photoURL} />
                <form>
                    <input
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        className='message__input'
                        placeholder="No que está pensando?"
                    />
                    <input
                        value={imageUrl}
                        onChange={(e) => setImageUrl(e.target.value)}
                        className='message__input_image'
                        placeholder='URL imagem (Opcional)'
                    />
                    <button onClick={handleSubmit} type='submit'>
                        Hidden Submit
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Message;