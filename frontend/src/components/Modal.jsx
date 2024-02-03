export default function Modal({ CancelHandler }) {
  return (
    <>
      <div className="backdrop"></div>
      <div className="my-modal">
        <h1 className="modalHead">Authentication Failed</h1>
        <p className="modalDes">
          Kindly re-enter valid credentials <br />
          or try making a new account
        </p>
        <button onClick={CancelHandler} className="modalCancel">
          Cancel
        </button>
      </div>
    </>
  );
}
