import { useState } from "react";

function App() {
  const [color, setColor] = useState("olive");

  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 gap-4 px-2">
        <div className="flex flex-wrap justify-center gap-4 shadow-lg bg-white  px-3 py-2 rounded-xl">
          <button
            className=" outline-none px-3 py-1 rounded-lg bg-gray-200 hover:bg-gray-300 duration-150"
            style={{ backgroundColor: "olive" }}
            onClick={() => setColor("olive")}
          >
            Olive
          </button>
          <button
            className=" outline-none px-3 py-1 rounded-lg hover:bg-gray-300 duration-150"
            style={{ backgroundColor: "teal" }}
            onClick={() => setColor("teal")}
          >
            Teal
          </button>
          <button
            className=" outline-none  px-3 py-1 rounded-lg bg-gray-200 hover:bg-gray-300 duration-150"
            style={{ backgroundColor: "navy" }}
            onClick={() => setColor("navy")}              

          >
            Navy
          </button>
          <button
            className=" outline-none  px-3 py-1 rounded-lg bg-gray-200 hover:bg-gray-300 duration-150"
            style={{ backgroundColor: "maroon" }}
            onClick={() => setColor("maroon")}
          >
            Maroon
          </button>

<button className="outline-none px-3 py-1 rounded-lg bg-gray-200 hover:bg-gray-300 duration-150"
            style={{ backgroundColor: "purple" }}

            onClick={() => setColor("purple")}
          >
            Purple
          </button>
          <button className="outline-none px-3 py-1 rounded-lg bg-gray-200 hover:bg-gray-300 duration-150"
            style={{ backgroundColor: "gray" }}
            onClick={() => setColor("gray")}
          >
            Gray
          </button>
          <button className="outline-none px-3 py-1 rounded-lg bg-gray-200 hover:bg-gray-300 duration-150 text-white"
            style={{ backgroundColor: "black" }}
            onClick={() => setColor("black")}
          >
            Black
          </button>
          <button className="outline-none px-3 py-1 rounded-lg bg-gray-200 hover:bg-gray-300 duration-150"
            style={{ backgroundColor: "white" }}
            onClick={() => setColor("white")}
          >
            White
          </button>
          <button className="outline-none px-3 py-1 rounded-lg bg-gray-200 hover:bg-gray-300 duration-150"
            style={{ backgroundColor: "red" }}
            onClick={() => setColor("red")}
          >
            Red
          </button>
        </div>

      </div>
    </div>
  );
}

export default App;
