import styles from './styles.module.css'
import ImageBadge from "../ImageBadge/ImageBadge";

function ResponsiveFlexLayoutForComponents() {
    return (
        <figure className={styles.componentz}>
            <div className={styles.container}>
                <div className={styles.circle}></div>
                <div className={styles.stain}></div>
                <div className={styles.octagon}></div>
            </div>
            <figcaption className={styles.componentName}>
                Responsive FlexLayout For Components
            </figcaption>
        </figure>
    );
}

export default ResponsiveFlexLayoutForComponents;
