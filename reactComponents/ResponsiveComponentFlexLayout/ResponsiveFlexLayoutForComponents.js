import styles from './styles.module.css'
import ImageBadge from "../ImageBadge/ImageBadge";

function ResponsiveFlexLayoutForComponents() {
    return (
        <div className={styles.container}>
            <ImageBadge />
            <ImageBadge />
            <ImageBadge />
        </div>
    );
}

export default ResponsiveFlexLayoutForComponents;
