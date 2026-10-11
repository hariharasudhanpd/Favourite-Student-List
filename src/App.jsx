import { Routes, Route } from "react-router-dom";
import { StudentProvider } from "./context/StudentContext";
import Navbar from "./components/Navbar/Navbar";
import StudentList from "./pages/StudentList/StudentList";
import FavouriteStudents from "./pages/FavouriteStudents/FavouriteStudents";
import "./App.css";

function App() {
  return (
    <StudentProvider>
      <Navbar />

      <Routes>
        <Route path="/" element={<StudentList />} />
        <Route path="/favourites" element={<FavouriteStudents />} />
      </Routes>
    </StudentProvider>
  );
}

export default App;