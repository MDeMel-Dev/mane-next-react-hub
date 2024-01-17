import ImageBadge from "@/reactComponents/ImageBadge/ImageBadge";
import ResponsiveFlexLayoutForComponents from "@/reactComponents/ResponsiveComponentFlexLayout/ResponsiveFlexLayoutForComponents";

function ReactComponents() {
    return (
        <div>
            <h1 style={{ textAlign: "center" }}>React Components</h1>
            <br></br>

            <ResponsiveFlexLayoutForComponents />
            <ImageBadge />
        </div>
    );
}

export default ReactComponents;