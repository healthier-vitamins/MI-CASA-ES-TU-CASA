import { Splide, SplideSlide } from "@splidejs/react-splide";
import { useState } from "react";


function EditModeForImgs({
  thisPost,
  setThisPost,
  setImgId,
  toggleModal,
  editMode,
  newArr,

}) {

    const EachImg = () => { 

    }



  if (!editMode) {
    return (
      <Splide
        options={{
          perPage: 4,
          // gap: "0.5rem",
          overflow: "hidden",
          arrows: false,
          rewind: true,
        }}
      >
        {thisPost?.img.map((i, index) => (
          <SplideSlide key={index}>
            <img
              key={index}
              src={i}
              width={"250px"}
              height={"220px"}
              alt=""
              onClick={() => {
                setImgId(i);
                toggleModal();
              }}
            />
          </SplideSlide>
        ))}
      </Splide>
    );
  } else if (editMode) {
    // const newArr = editImg.imgArr;
    // const handleClick = () => {
    //   newArr.push(editImg.img);
    //   console.log("newArr of imgs", newArr);
    // };

    const [imgField, setImgField] = useState("");

    return (
      <>
        <p>Images:</p>
        <input
          type="text"
          name="img"
          id="img"
          placeholder="New image URL"
          // key="images"
          value={imgField}
          onChange={(e) => {
            setImgField(e.target.value);
          }}
        ></input>
        <button
          onClick={() => {
            newArr.push(imgField);
            // console.log("newArr:", newArr);
            // setImgArr(newArr);
            // console.log(imgArr)
            setImgField("");
            setThisPost({ ...thisPost, ["img"]: newArr });
          }}
        >
          Add image
        </button>
      </>
    );
  }
}

export default EditModeForImgs;
