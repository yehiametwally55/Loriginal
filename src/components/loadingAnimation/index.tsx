import gif from "./loading-animation.gif"
import "./index.css";
import type { JSX } from "react";

const LoadingAnimation = (): JSX.Element => {
    return (
        <>
            <div className="loading-container">
                <div className="loading-background"></div>
                <img className="loading-gif" src={gif} alt="loading..." />
            </div>
        </>
    );
};

export default LoadingAnimation;