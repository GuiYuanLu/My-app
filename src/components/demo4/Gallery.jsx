import "./styles/Gallery.css"
function Profile() {
  return (
    <div>
      <img src="https://i.imgur.com/MK3eW3As.jpg" alt="Katherine Johnson" />
    </div>
  );
}

function Gallery() {
  return (
    <div className="line">
      <Profile />
      <Profile />
      <Profile />
    </div>
  );
}

export default Gallery;