import { useEffect, useState } from "react";
import "./Post.css";
import Details from "./Details";
export default function Friends() {
  const [friends, setFriends] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setFriends(data));
  }, []);
  return (
    <div className="post">
      <h3>Friends:{friends.length}</h3>
      {friends.map((friend) => (
        <Details friend={friend}></Details>
      ))}
    </div>
  );
}
