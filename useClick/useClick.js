
import { useEffect, useRef } from "react";

export const useClick = (onClick) => {
    const element = useRef();
    useEffect(() => {
      if (typeof onClick !== "function") {
        return;
      }
      if (element.current) {
        element.current.addEventListener("click", onClick);
      }
      return () => {
        if (element.current) {
          element.current.removeEventListener("click", onClick);
        }
      };
    }, []);
    return typeof onClick !== "function" ? undefined : element;
  };

// export default function App() {
//   const sayHello = () => console.log("say Hello");
//   const title = useClick(sayHello);
//   return (
//     <div className="App">
//       <h1 ref={title}>Hi</h1>
//     </div>
//   );
// }