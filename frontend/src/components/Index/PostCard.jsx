import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import card from "./PostCard.module.css"


function PostCard({ post }) {

  return (

    <div>
      <Card className={card.card}>
        <Card.Title className={card.title}> {post.username}</Card.Title>
        {/* insert link to post when click on the image? */}
      <Card.Img className={card.img} variant="top" src={post.img[0]} />
      <Card.Body>
        <Card.Text>
        {post.description}
        Style: {post.style}
        Cost: {post.cost}
        </Card.Text>
        <Link className={card.link} to={`/show-post/${post._id}`}>Card Link</Link>
      </Card.Body>
    </Card> 
    </div>
  );
}

export default PostCard;
