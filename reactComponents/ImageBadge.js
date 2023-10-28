import '../styles/imagebadge.module.css'

function ImageBadge() {
    const name = "Mane De Mel";
    const handle = "mdemel-dev";
    const img = "https://mdemel-dev.github.io/mane-next-react-hub/resources/mdemel_dev_whizz.png";
  
    return (
      <div className="badge">
        <img className="badgeImage" alt={`Badge image: Mane De Mel`} src={img} />
        <div>
          <h4 className="badgeImage">{name}</h4>
          <p className="badgeImage">{handle}</p>
        </div>
      </div>
    );
  }

  export default ImageBadge;