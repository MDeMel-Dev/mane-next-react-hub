import styles from './styles.module.css'

function ImageBadge() {
  const name = "Mane De Mel";
  const handle = "mdemel-dev";
  const img = "https://mdemel-dev.github.io/mane-next-react-hub/resources/mdemel_dev_whizz.png";

  return (
    <div className={styles.badge}>
      <img className="imagebadge" alt={`Badge image: Mane De Mel`} src={img} />
      <div>
        <h4 className="imagebadge">{name}</h4>
        <p className="imagebadge">{handle}</p>
      </div>
    </div>
  );
}

export default ImageBadge;