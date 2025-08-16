import "../App.css";
import { Link } from "react-router-dom";
function Home() {
  return (
    <div className="bg-gray-100 flex items-center justify-center p-10 ">
      <div className="flex flex-col md:flex-row items-center max-w-5xl gap-10">
        {/* Text Content */}
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Simplifying Communication: Connect, Collaborate, and Chat Anytime,
            Anywhere...
          </h1>
          <p className="text-lg">
            It enables real-time communication across multiple chats.Whether for
            collaboration, social interaction, or events, the app ensures a
            seamless experience powered by reliability and strong security.
          </p>
          <b className="text-red-600">Start chat without registration...</b>
          <div className="pt-5">
            <Link
              to="/chat"
              className="bg-blue-600 text-white rounded-2xl py-2 px-32 font-medium hover:bg-blue-700 transition-colors cursor-pointer"
            >
              Start Chat...
            </Link>
          </div>
        </div>
        {/*image content*/}
        <div className="md:w-1/2 mt-6 md:mt-0 flex justify-center">
          <img
            src="../public/home.png"
            alt="image"
            className="max-h-96 rounded-2xl shadow-1xl h-96"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
