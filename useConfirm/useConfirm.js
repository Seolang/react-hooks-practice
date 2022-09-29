export const useConfirm = (message, onConfirm, onCancel) => {
    const confirmAction = () => {
      if (typeof onConfirm !== "function" ||
            typeof onCancel !== "function") return;
            
      if (window.confirm(message)) {
        onConfirm();
      } else {
        onCancel();
      }
    };
    return typeof onConfirm !== "function" ? undefined : confirmAction;
  };

// export default function App() {
//   const deleteWorld = () => console.log("deleting the world");
//   const abort = () => console.log("aborted")
//   const confirmDelete = useConfirm("Are you sure", deleteWorld, abort)
//   return (
//     <div className="App">
//       <button onClick={confirmDelete}>Delete the World</button>
//     </div>
//   );
// }