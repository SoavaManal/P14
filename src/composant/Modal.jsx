
// Component Modal display
export default function Modal({ mesage , handleCloseModale }) {
  return (
    <div className="div_modal">
      <div id="confirmation" className="modal">
        {mesage}
        <span className="closeModal" onClick={handleCloseModale}>
          x
        </span>
      </div>
    </div>
  );
}
