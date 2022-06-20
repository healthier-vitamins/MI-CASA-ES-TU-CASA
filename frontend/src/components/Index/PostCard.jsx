import "./PostCard.css"

function PostCard({ post }) {
  console.log(post);
  return (
    <div className="post-container">
      <div className="post-header">
        <h3>username's posts OR title</h3>
        <img className="img" src={post.img[0]} />
      </div>
      <div className="post-body">
        <p className="description">Description: {post.description}</p>
        <br />
        <p className="style">Style: {post.style}</p>
        <br />
        <p className="cost">Cost: ${post.cost}</p>
      </div>
    </div>
  );
}

export default PostCard;
