import React from "react";

export default function Home() {
  return (
    <div>
      <h1>home</h1>
      <div className="p-5 m-5 flex">
        <button className="p-5 border rounded-lg border-red-600">
          increment
        </button>
        <p className="p-5 mx-auto">0</p>
        <button className="p-5 border  rounded-lg border-red-600">
          decrement
        </button>
      </div>
    </div>
  );
}
