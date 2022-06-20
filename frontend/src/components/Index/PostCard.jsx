import Card from 'react-bootstrap/Card';

function PostCard({ post }) {
  console.log(post);
  return (

    <div>
      <Card className="post-card">
        <Card.Title>username</Card.Title>
        {/* insert link to post when click on the image */}
      <Card.Img className="index-card-img" variant="top" src={post.img[0]} />
      <Card.Body>
        <Card.Text>
        {post.description}
        Style: {post.style}
        Cost: {post.cost}
        </Card.Text>
        <Card.Link href="/show-post/:id">Card Link</Card.Link>
      </Card.Body>
    </Card> 
    </div>
  );
}

export default PostCard;
