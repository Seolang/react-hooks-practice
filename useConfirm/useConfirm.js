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