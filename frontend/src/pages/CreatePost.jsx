function CreatePost() {

    

    return (
        <div className="createpost-container">
        <h2>Add your design</h2>
        <form>  
        <p id="upload-img">Upload image</p>
        <label htmlFor="description">Description</label>
        <textarea name="description" placeholder="description"></textarea>
        <br />
        <label htmlFor="style">Style</label>
        <input name="style" placeholder="style"></input>
        <br />
        <label htmlFor="total-cost">Total Cost</label>
        <input name="total-cost" placeholder="total-cost"></input>
        <br />
        <button> post your design! </button>
        </form>
        </div>
    )
}

export default CreatePost;