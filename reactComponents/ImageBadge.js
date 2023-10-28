import '../styles/imagebadge.css'

function ImageBadge() {
    const name = "Mane De Mel";
    const handle = "mdemel-dev";
    const img = "https://github.com/MDeMel-Dev/mane-next-react-hub/blob/main/resources/mdemel_dev_whizz.png";
  
    return (
      <div className="badge">
        <img alt={`Badge image: Mane De Mel`} src={img} />
        <div>
          <h4>{name}</h4>
          <p>{handle}</p>
        </div>
      </div>
    );
  }

  export default ImageBadge;