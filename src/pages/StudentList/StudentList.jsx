import { useContext } from "react";
import students from "../../data/students";
import { StudentContext } from "../../context/StudentContext";
import StudentCard from "../../components/StudentCard/StudentCard";
import "./StudentList.css";

function StudentList() {
  const { addFavourite, isFavourite, removeFavourite } =
    useContext(StudentContext);

  return (
    <main className="page-container">
      <div className="page-heading">
        <div>
          <p className="eyebrow">STUDENT DIRECTORY</p>
          <h1>All Students</h1>
          <p className="page-description">
            Find your classmates and save your favourite students.
          </p>
        </div>

        <div className="total-students">
          <span>{students.length}</span>
          <p>Students</p>
        </div>
      </div>

      <div className="student-grid">
        {students.map((student) => (
          <StudentCard
            key={student.id}
            student={student}
            isFavourite={isFavourite(student.id)}
            onAdd={() => addFavourite(student)}
            onRemove={() => removeFavourite(student.id)}
          />
        ))}
      </div>
    </main>
  );
}

export default StudentList;