import "../App.css";
import { Link } from "react-router-dom";
function Home() {
  return (
    <div className="bg-gray-100 flex items-center justify-center p-10 ">
      <div className="flex flex-col md:flex-row items-center max-w-5xl gap-10">
        {/* Text Content */}
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            The conversational AI assistant enhances the technology's
            information base.
          </h1>
          <p className="text-gray-600 mb-6">
            Intellesphere develops AI-based applications that help the people of
            a self-improved find the answer to their queries from this data.
            That can work as a SaaS or on-prem tool.
          </p>
          <div className="flex justify-center md:justify-start">
            <input
              type="text"
              placeholder="Ask something…"
              className="border border-gray-300 rounded-2xl py-2 px-4 w-full md:w-3/4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="pt-4">
            <Link to="/chat" className="bg-blue-600 text-white rounded-2xl py-2 px-20 hover:bg-blue-700 transition-colors cursor-pointer">
              Get Started
            </Link>
          </div>
        </div>
        {/*image content*/}
        <div className="md:w-1/2 mt-6 md:mt-0 flex justify-center">
          <img src="../public/home.png" alt="robot" className="max-h-96 rounded-2xl shadow-1xl h-96" />
        </div>
      </div>
    </div>
  );
}

export default Home;
