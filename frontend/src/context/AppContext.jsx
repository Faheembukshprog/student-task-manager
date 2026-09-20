import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const AppContext = createContext();

export function AppProvider({ children }) {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchStudents = async () => {
    try {
      setLoading(true);
      setError("");

      const response = await axios.get("http://localhost:5000/api/students");

      setStudents(response.data);
    } catch (error) {
      setError("Failed to fetch students.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  return (
    <AppContext.Provider
      value={{
        students,
        loading,
        error,
        fetchStudents,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
