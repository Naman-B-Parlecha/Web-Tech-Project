import { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";

const ResultModal = forwardRef(function ResultModal(ref) {
  const dialogRef = useRef();
  useImperativeHandle(ref, () => {
    return {
      open() {
        dialogRef.current.showModal();
      },
    };
  });

  return createPortal(
    <dialog ref={dialog}>
      <p>Entered Credentials do not exist</p>
      <form action="dialog">
        <button>close</button>
      </form>
    </dialog>,
    document.getElementById("modal")
  );
});

export default Modal();
