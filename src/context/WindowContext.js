// context/WindowContext.js
import { createContext, useEffect, useState } from "react";

export const WindowSize = createContext(); 

function WindowContext({ children }) {
    const [windowsSize, setWindowsSize] = useState(window.innerWidth); 

    useEffect(() => {
        function handleResize() {
            setWindowsSize(window.innerWidth);
        }

        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <WindowSize.Provider value={{ windowsSize, setWindowsSize }}>
            {children}
        </WindowSize.Provider>
    );
}

export default WindowContext;
