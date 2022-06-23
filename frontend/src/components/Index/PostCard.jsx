import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import card from "./PostCard.module.css"
import { useAtom } from "jotai";
import { userAtom } from "../../App.jsx";


function PostCard({ post }) {
  const [user, setUser] = useAtom(userAtom);

  return (

    <div>
      <Card className={card.card}>
      <Card.Title className={card.title}> 
      <a className={card.titletext} href={`/profile/${post.username}/${post.userId}`}>{post.username}</a>
      </Card.Title>
      <Card.Img className={card.img} variant="top" src={post.img[0]} />
      <Card.Body>
        <Card.Text>
        {post.description} <br/><br/>
        Style: {post.style} <br/>
        Cost: {post.cost}
        </Card.Text>
        <Link className={card.link} to={`/show-post/${post._id}`}>check this design</Link>
      </Card.Body>
    </Card> 
    </div>
  );
}

export default PostCard;
