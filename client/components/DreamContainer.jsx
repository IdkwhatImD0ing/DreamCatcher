"use client";

import DreamCard from "@/components/DreamCard";
import { useEffect, useState } from "react";
import { getAllDreams } from "@/firebasehelpers";

const DreamContainer = () => {
  const [dreams, setDreams] = useState([]);

  useEffect(() => {
    getAllDreams()
      .then((data) => {
        setDreams(data);
      })
      .catch((e) => {
        console.error("Error fetching dreams: ", e);
      });
  }, []);

  return (
    <div className="mx-auto mt-[1rem] flex w-full max-w-[960px] flex-wrap gap-[0.5rem] overflow-auto md:gap-[4rem]">
      {dreams.map((dream) => (
        <DreamCard
          key={dream.id}
          title={dream.title}
          description={dream.description}
        />
      ))}
    </div>
  );
};

export default DreamContainer;
