import "../App.css";

function About() {
  return (
    <div className="bg-gray-50 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl mb-4">
            About the Tool
          </h1>
          <p className="text-lg text-gray-800 max-w-2xl mx-auto">
            This project is a chatbot I built that can answer questions people
            ask, just like how a real person would help you. It uses artificial
            intelligence to understand what someone is asking and tries to give
            helpful and clear answers. You can ask it about different topics,
            and it’s good for things like customer support or just finding
            information quickly. The chatbot is easy to use and gives quick
            answers, making it useful for anyone who wants fast, friendly help
            without waiting for a real person.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="flex justify-center">
            <img
              src="../public/image1.png"
              alt="robot"
              className="max-h-96 h-80 w-auto rounded-2xl shadow-2xl "
            />
          </div>
          <div className="flex justify-center">
            <img
              src="../public/image2.png"
              alt="robot"
              className="max-h-96 h-80 w-auto rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
