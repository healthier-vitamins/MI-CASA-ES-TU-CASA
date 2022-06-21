import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import card from "./PostCard.module.css"


function PostCard({ post }) {

  return (

    <div>
      <Card className={card.card}>
        <Card.Title>{post.username}</Card.Title>
        {/* insert link to post when click on the image */}
      <Card.Img className={card.img} variant="top" src={post.img[0]} />
      <Card.Body>
        <Card.Text>
        {post.description}
        Style: {post.style}
        Cost: {post.cost}
        </Card.Text>
        <Card.Link href={`/show-post/${post._id}`}>Card Link</Card.Link>
      </Card.Body>
    </Card> 
    </div>
  );
}

export default PostCard;
