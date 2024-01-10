import styles from './styles.module.css'
import ImageBadge from "../ImageBadge/ImageBadge";

function ResponsiveFlexLayoutForComponents() {
    return (
        <figure className={styles.componentz}>
            <div className={styles.container}>
                <ImageBadge />
                <ImageBadge />
                <ImageBadge />
            </div>
            <figcaption>
                Responsive FlexLayout For Components
            </figcaption>
        </figure>
    );
}

export default ResponsiveFlexLayoutForComponents;
