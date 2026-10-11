import { useContext } from "react";
import { StudentContext } from "../../context/StudentContext";
import StudentCard from "../../components/StudentCard/StudentCard";
import EmptyState from "../../components/EmptyState/EmptyState";
import "./FavouriteStudents.css";

function FavouriteStudents() {
  const { favourites, removeFavourite } = useContext(StudentContext);

  return (
    <main className="page-container">
      <div className="page-heading">
        <div>
          <p className="eyebrow">YOUR COLLECTION</p>
          <h1>Favourite Students</h1>
          <p className="page-description">
            The students you have saved in one place.
          </p>
        </div>

        <div className="total-students">
          <span>{favourites.length}</span>
          <p>Favourites</p>
        </div>
      </div>

      {favourites.length === 0 ? (
        <EmptyState />
      ) : (
        <div className="student-grid">
          {favourites.map((student) => (
            <StudentCard
              key={student.id}
              student={student}
              isFavourite={true}
              onRemove={() => removeFavourite(student.id)}
            />
          ))}
        </div>
      )}
    </main>
  );
}

export default FavouriteStudents;