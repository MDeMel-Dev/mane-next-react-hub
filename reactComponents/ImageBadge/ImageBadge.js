import styles from './styles.module.css'

function ImageBadge() {
  const name = "Mane De Mel";
  const handle = "mdemel-dev";
  const img = "https://mdemel-dev.github.io/mane-next-react-hub/resources/mdemel_dev_whizz.png";

  return (
    <div className={styles.badge}>
      <img className={styles.imagebadge} alt={`Badge image: Mane De Mel`} src={img} />
      <div>
        <h4 className={styles.imagebadge}>{name}</h4>
        <p className={styles.imagebadge}>{handle}</p>
      </div>
    </div>
  );
}

export default ImageBadge;