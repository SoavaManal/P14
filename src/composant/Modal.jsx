export default function Modal({ handleCloseModale }) {
  return (
    <div className="div_modal">
      <div id="confirmation" className="modal">
        Employee Created!
        <span className="closeModal" onClick={handleCloseModale}>
          x
        </span>
      </div>
    </div>
  );
}
