import Card from 'react-bootstrap/Card';
import { Link, useNavigate } from 'react-router-dom';
import card from "./PostCard.module.css"
import { useAtom } from "jotai";
import { userAtom } from "../../App.jsx";


function PostCard({ post }) {
  const [user, setUser] = useAtom(userAtom);
  const navigate = useNavigate();
  return (

    <div>
      <Card className={card.card}>
      <Card.Title className={card.title}> 
      <a className={card.titletext} href={`/profile/${post.username}/${post.userId}`}>{post.username}</a>
      </Card.Title>
      <Card.Img className={card.img} variant="top" src={post.img[0]} />
      <Card.Body>
        <Card.Text>
        {post.title} <br/><br/>
        Style: {post.style} <br/>
        Cost: {post.cost}
        </Card.Text>
        <button className={card.button} 
        onClick={() => navigate(`/show-post/${post._id}`)}>
          check this design
        </button>
      </Card.Body>
    </Card> 
    </div>
  );
}

export default PostCard;
