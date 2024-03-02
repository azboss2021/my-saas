"use client";

import Image from "next/image";
import { FaStar } from "react-icons/fa";

// EDIT THESE
const users = [
  {
    image: "/pikachu.jpg",
    id: "a",
  },
  {
    image: "/pikachu.jpg",
    id: "b",
  },
  {
    image: "/pikachu.jpg",
    id: "c",
  },
  {
    image: "/pikachu.jpg",
    id: "d",
  },
  {
    image: "/pikachu.jpg",
    id: "e",
  },
];
const userCount = 80;

const HeroUserCount = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center gap-2 lg:gap-4 lg:mr-auto">
      <div className="flex -space-x-4 flex-grow-0">
        {users.map((user) => (
          <Image
            src={user.image}
            width={45}
            height={45}
            alt={user.image}
            className="rounded-full border-[3px] border-background"
            key={user.id}
          />
        ))}
      </div>
      <div className="flex flex-col gap-1 items-center lg:items-start">
        <div className="flex space-x-0.5 text-yellow-400">
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
        </div>
        <div>
          <span className="font-bold">{userCount}</span> users are using this
          Saas!
        </div>
      </div>
    </div>
  );
};
export default HeroUserCount;
