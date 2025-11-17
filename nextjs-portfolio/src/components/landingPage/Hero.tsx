import Image from "next/image";

const Hero = () => {
  return (
    <section
      id="home"
      className="flex flex-col md:flex-row justify-between items-center px-8 py-16"
    >
      <div className="flex flex-col items-center md:items-start gap-4">
        <Image
          src="/profile.jpg"
          alt="John Doe"
          width={120}
          height={120}
          className="rounded-full shadow-lg"
        />
        <h1 className="text-2xl font-bold">John Doe</h1>
        <p className="text-gray-600 text-center md:text-left">
          Full-Stack MERN Developer <br />
          Building robust web applications from front to back
        </p>
      </div>

      <div className="bg-gray-900 text-white rounded-xl p-6 mt-8 md:mt-0 max-w-md">
        <pre className="text-sm font-mono">
          {`MongoDB query: db.users.find()
Express route: app.get('/api', (req, res) => {...})
React component: function App() { return <h1>Hello World</h1> }
Node.js server: const http = require("http"); ...`}
        </pre>
        <div className="flex gap-4 mt-4">
          <button className="px-4 py-2 bg-blue-500 rounded-lg hover:bg-blue-600">
            View Projects
          </button>
          <button className="px-4 py-2 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg">
            Contact Me
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
