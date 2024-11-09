import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Contact() {
  return (
    <div>
      <Header />
      <main className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 py-20">
        <section className="container mx-auto py-16 px-6 bg-white rounded-xl shadow-lg">
          <h1 className="text-5xl font-semibold text-center mb-6">
            Contact Me
          </h1>
          <p className="text-lg text-center mb-6">
            Feel free to reach out for any inquiries, collaborations, or just to
            connect!
          </p>
          <form className="max-w-md mx-auto space-y-6">
            <div>
              <label className="block text-lg font-medium" htmlFor="name">
                Name
              </label>
              <input
                className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                type="text"
                id="name"
                required
              />
            </div>
            <div>
              <label className="block text-lg font-medium" htmlFor="email">
                Email
              </label>
              <input
                className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                type="email"
                id="email"
                required
              />
            </div>
            <div>
              <label className="block text-lg font-medium" htmlFor="message">
                Message
              </label>
              <textarea
                className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                id="message"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-3 rounded-md shadow-lg hover:bg-indigo-500 transition duration-300"
            >
              Send Message
            </button>
          </form>
        </section>
      </main>
      <Footer />
    </div>
  );
}
