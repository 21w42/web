import { TeamDataType } from "@sections/types";
import React from "react";

const Team = () => {
  const mockTeam: Array<TeamDataType> = [
    { name: "V K", role: "Genesis" },
    { name: "Oleksandr Pokhylenko", role: "Technology" },
    { name: "Danil Melnyk", role: "Voice" },
    { name: "Ivan Kotelnikov", role: "Product" },
    { name: "Glib Kaporikov", role: "Identity" },
    { name: "Serhii Revva", role: "User Experience" },
    { name: "Anastasia Vasiuk", role: "Art Coordination" },
    { name: "Andrei Barmalei", role: "Art Direction" },
    { name: "Valeria Panina", role: "Government Communications" },
    { name: "The FRAME Team", role: "Blockchain and Infrastructure" },
  ];

  return (
    <div className="mb-3%">
      <div
        className="grid 
        desktop:grid-cols-4 desktop:gap-x-60px
        laptop:grid-cols-3 laptop:gap-x-50px 
        tablet:grid-cols-2 tablet:gap-x-40px 
        mobile:grid-cols-1 pb-50px"
      >
        {mockTeam.map((teamData, idx) => (
          <div key={idx} className="pt-20px">
            <p className="text-18px font-rnarrow">{teamData.name}</p>
            <p className="text-16px font-rlight">{teamData.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
