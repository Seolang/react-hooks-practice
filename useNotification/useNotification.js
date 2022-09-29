import { useEffect, useRef, useState } from "react";

const useNotification = (title, option) => {
  if (!("Notification" in window)) {
    return;
  }
  const fireNotif = () => {
    if (Notification.permission !== "granted") {
      Notification.requestPermission().then((permission) => {
        if (permission === "granted") {
          new Notification(title, option);
        } else {
          return;
        }
      });
    } else {
      new Notification(title, option);
    }
  };

  return fireNotif;
};

// export default function App() {
//   const triggerNotif = useNotification("Hello my friend!", {
//     body: "Actually I don't want to greet you.."
//   });
//   return (
//     <div className="App">
//       <button onClick={triggerNotif}>Hello</button>
//     </div>
//   );
// }
