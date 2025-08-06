import React, { useEffect, useState } from "react";
import Anwser from "./Anwser";
const GroupAnswer = ({ ID }) => {
  const [answers, setAnswers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true);
        const res = await fetch(`/api/getGroupAnswers/${ID}`);
        if (!res.ok) throw new Error('Error al obtener los usuarios');
        const data = await res.json();
        setAnswers(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, [ID]);
  if (loading) return <p>Cargando usuarios...</p>;
  if (error) return <p>Error: {error}</p>;
  return (
    <div className="grid grid-cols-1 gap-2">
        {answers.map((item, index) => (
          <Anwser key={index} anwser={item.text_answer} ok={item.ID===ID} />
        ))}
      </div>
  );
};
export default GroupAnswer;
