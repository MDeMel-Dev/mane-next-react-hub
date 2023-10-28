import '../styles/imagebadge.css'

function ImageBadge() {
    const name = "Mane De Mel";
    const handle = "mdemel-dev";
    const img = "";
  
    return (
      <div className="badge">
        <img alt={`Badge image: Mane De Mel`} src={""} />
        <div>
          <h4>{name}</h4>
          <p>{handle}</p>
        </div>
      </div>
    );
  }

  export default ImageBadge;