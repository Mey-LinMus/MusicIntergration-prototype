import React from "react";

const Youtube = () => {
  return (
    <div>
      <iframe
        src="https://www.youtube.com/embed/NjbfhDjygkA?si=FGCrV815xD7zA-NQ"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
    </div>
  );
};

export default Youtube;