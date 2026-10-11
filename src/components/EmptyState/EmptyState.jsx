import { Link } from "react-router-dom";
import "./EmptyState.css";

function EmptyState() {
  return (
    <div className="empty-state">
      <div className="empty-icon">♡</div>

      <h3>No favourite students added yet</h3>

      <p>
        You haven't saved any students. Go to the student list
        and add your favourites.
      </p>

      <Link to="/" className="browse-btn">
        Browse Students
      </Link>
    </div>
  );
}

export default EmptyState;