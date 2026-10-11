import "./StudentCard.css";

function StudentCard({ student, isFavourite, onAdd, onRemove }) {
  const initials = student.name
    .split(" ")
    .map((part) => part[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

  return (
    <div className="student-card">
      <div className="student-top">
        <div className="student-avatar">{initials}</div>

        <span className="department-tag">{student.department}</span>
      </div>

      <div className="student-info">
        <h3>{student.name}</h3>
        <p>Roll No: {student.rollNo}</p>
      </div>

      {isFavourite ? (
        <button className="remove-btn" onClick={onRemove}>
          Remove from Favourites
        </button>
      ) : (
        <button className="add-btn" onClick={onAdd}>
          + Add to Favourite
        </button>
      )}
    </div>
  );
}

export default StudentCard;