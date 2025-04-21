import {useEffect, useRef} from "react";


export default function () {
    const preloaderRef = useRef(null);

    useEffect(() => {
        const preloaderElement = preloaderRef.current;

        const hidePreloader = () => {

            // After the animation, set visibility to hidden and fade out
            setTimeout(() => {
                preloaderElement.style.visibility = 'hidden';
                preloaderElement.style.display = 'none';
            }, 1000);
        };

        // Initial animation on component mount
        hidePreloader();

        // Cleanup function
        return () => {
            // Cleanup code if needed
        };
    }, []);

    return (
        <div id="preloader" ref={preloaderRef}>
            <div className="jumper">
                <div />
                <div />
                <div />
            </div>
        </div>
    )
}