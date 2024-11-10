import Header from "../components/Header";
import Footer from "../components/Footer";

export default function About() {
  return (
    <div>
      <Header />
      <main className="container mx-auto py-20 px-6 bg-gradient-to-b from-gray-100 to-gray-200">
        {/* Hero section title with basic fade-in effect */}
        <h1 className="text-5xl font-semibold text-center mb-12 hover:text-teal-600 ">
          About Me
        </h1>

        {/* Content section */}
        <div className="flex flex-col md:flex-row items-center justify-center space-x-8">
          <img
            src="images/profile1.jpg"
            alt="Profile Picture"
            className="w-64 h-64 rounded-full border-4 border-indigo-500 shadow-lg mb-8 md:mb-0 transform transition duration-700 ease-out hover:scale-105"
          />
          <div className="text-lg text-center md:text-left max-w-xl mx-auto md:mx-0">
            <p>
              Hi, I'm Anam Anwer, a passionate web developer dedicated to
              crafting user-centric, responsive websites. Currently, I'm
              expanding my knowledge in modern technologies like Next.js and
              React.js.
            </p>
            <p className="mt-4">
              I believe in the power of collaboration and continuous growth. I
              am constantly exploring new tools, patterns, and techniques to
              improve my skills.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
