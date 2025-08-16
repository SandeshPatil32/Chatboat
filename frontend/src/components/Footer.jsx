import "../App.css";

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center">
        <div className="mb-4 sm:mb-0">
          <span className="text-2xl font-bold text-white tracking-tight md:text-3xl">
            ChatBoat
          </span>
        </div>
        <div className="flex space-x-6">
          <a
            href="#privacy"
            className="text-sm text-gray-400 hover:text-white transition-colors"
          >
            Privacy
          </a>
          <a
            href="#terms"
            className="text-sm text-gray-400 hover:text-white transition-colors"
          >
            Terms
          </a>
          <a
            href="#contact"
            className="text-sm text-gray-400 hover:text-white transition-colors"
          >
            Contact
          </a>
        </div>
        <p className="text-xs text-gray-500 mt-4 sm:mt-0">
          © 2025 ChatBoat. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
