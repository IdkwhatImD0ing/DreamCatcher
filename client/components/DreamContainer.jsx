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
    <div className="flex flex-wrap md:gap-[4rem] mx-auto w-full max-w-[960px] overflow-auto gap-[0.5rem] mt-[1rem]">
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
