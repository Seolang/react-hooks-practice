
import { useEffect, useState, useRef } from "react";
import ReactDom from "react-dom";

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