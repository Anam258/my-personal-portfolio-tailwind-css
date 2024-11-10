import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt } from "react-icons/fa";

export default function Skills() {
  return (
    <div className="container mx-auto py-16 px-4 text-center">

      <div className="flex flex-wrap justify-center gap-8">
        <div className="flex flex-col items-center w-32">
          <FaReact className="text-6xl text-blue-600 mb-4" />
          <p className="text-xl">React</p>
        </div>
        <div className="flex flex-col items-center w-32">
          <FaNodeJs className="text-6xl text-green-600 mb-4" />
          <p className="text-xl">Node.js</p>
        </div>
        <div className="flex flex-col items-center w-32">
          <FaHtml5 className="text-6xl text-orange-600 mb-4" />
          <p className="text-xl">HTML5</p>
        </div>
        <div className="flex flex-col items-center w-32">
          <FaCss3Alt className="text-6xl text-blue-500 mb-4" />
          <p className="text-xl">CSS3</p>
        </div>
      </div>
    </div>
  );
}
