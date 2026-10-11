import { createContext, useState } from "react";

export const StudentContext = createContext();

export function StudentProvider({ children }) {
  const [favourites, setFavourites] = useState([]);

  function addFavourite(student) {
    setFavourites((previousFavourites) => {
      const alreadyAdded = previousFavourites.some(
        (item) => item.id === student.id
      );

      if (alreadyAdded) {
        return previousFavourites;
      }

      return [...previousFavourites, student];
    });
  }

  function removeFavourite(studentId) {
    setFavourites((previousFavourites) =>
      previousFavourites.filter((student) => student.id !== studentId)
    );
  }

  function isFavourite(studentId) {
    return favourites.some((student) => student.id === studentId);
  }

  return (
    <StudentContext.Provider
      value={{
        favourites,
        addFavourite,
        removeFavourite,
        isFavourite,
      }}
    >
      {children}
    </StudentContext.Provider>
  );
}