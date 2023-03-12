export default function LoadBtn({ title, onClick }) {
  return (
    <button size="medium" onClick={onClick} className="actionBtn">
      <h1>{title}</h1>
    </button>
  );
}
