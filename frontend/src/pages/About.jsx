import "../App.css";

function About() {
  return (
    <div className="bg-gray-100 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            About The Tool
          </h1>
          <p className="font-medium max-w-2xl mx-auto">
            Our chat platform project is designed to provide a seamless,
            real-time communication experience without the need for user
            registration. By simply entering a room code, multiple participants
            can connect instantly and start engaging in conversation.
          </p>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="md:w-1/2">
            <p className="text-lg mb-6">
              Built with scalability and simplicity in mind, the system supports
              multiple chat rooms where users can interact simultaneously,
              making it ideal for group discussions, team collaboration, or
              community events. The focus is on removing unnecessary barriers
              and offering a fast, secure, and reliable way to communicate
              online. This has strong security.
            </p>
            <p className="pt-3">
              We value open communication and continuous improvement. Users are
              encouraged to share feedback, suggestions, or concerns, helping us
              refine the system and deliver an even better experience. For
              support or inquiries, our dedicated contact channels ensure quick
              and helpful responses, making it easy to stay connected with our
              team.
            </p>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <img
              src="../public/image1.png"
              alt="Chat Platform Illustration"
              className="max-h-96 rounded-xl shadow-xl"
              width={550}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
