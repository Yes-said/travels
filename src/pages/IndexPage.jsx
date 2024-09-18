import { Link } from "react-router-dom";
import destination1 from "../assets/destination1.jpg";
import destination2 from "../assets/destination2.jpeg";
import destination3 from "../assets/destination3.jpeg";

export default function IndexPage() {
    return (
        <>
            <main>
                {/* Hero Section */}
                <section
                    id="home"
                    className="bg-cover bg-center h-screen flex items-center justify-center"
                    style={{ backgroundImage: `url(${destination1})` }}
                >
                    <div className="text-center text-white bg-black bg-opacity-50 px-6 py-4 rounded-md">
                        <h1 className="text-3xl md:text-5xl font-bold mb-4">
                            Discover New Destinations
                        </h1>
                        <p className="text-sm md:text-lg mb-6">
                            Explore the world with our exclusive tours
                        </p>
                        <Link
                            to="/tours"
                            className="bg-yellow-400 text-blue-600 py-2 px-6 rounded hover:bg-yellow-300 text-sm md:text-base transition ease-in-out duration-300"
                        >
                            View Tours
                        </Link>
                    </div>
                </section>

                {/* Destinations Section */}
                <section id="destinations" className="py-12 bg-gray-100">
                    <div className="container mx-auto text-center px-4">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">
                            Popular Destinations
                        </h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {[destination1, destination2, destination3].map((destination, idx) => (
                                <div key={idx} className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                                    <img
                                        src={destination}
                                        alt={`Destination ${idx + 1}`}
                                        className="w-full h-56 object-cover"
                                    />
                                    <div className="p-4">
                                        <h3 className="text-lg md:text-xl font-bold mb-2">
                                            {idx === 0 ? "Paris" : idx === 1 ? "Tokyo" : "Santorini"}
                                        </h3>
                                        <p className="text-sm md:text-base">
                                            {idx === 0
                                                ? "Discover the beauty of the City of Lights."
                                                : idx === 1
                                                ? "Experience the blend of tradition and modernity."
                                                : "Enjoy stunning sunsets on this Greek island."}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Tours Section */}
                <section id="tours" className="py-12 bg-blue-600 text-white">
                    <div className="container mx-auto text-center px-4">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">
                            Our Exclusive Tours
                        </h2>
                        <p className="mb-6 md:mb-8 text-sm md:text-base">
                            Choose from a variety of tour packages designed for every kind of traveler.
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                            {[
                                { title: "European Adventure", description: "10 days | Explore France, Italy, and Switzerland." },
                                { title: "Asian Discovery", description: "14 days | Visit Japan, China, and Thailand." },
                            ].map((tour, idx) => (
                                <div key={idx} className="bg-white text-blue-600 shadow-md rounded p-6">
                                    <h3 className="text-xl md:text-2xl font-bold mb-4">{tour.title}</h3>
                                    <p className="mb-4 text-sm md:text-base">{tour.description}</p>
                                    <a
                                        href="#book"
                                        className="bg-yellow-400 text-blue-600 py-2 px-4 rounded hover:bg-yellow-300 text-sm md:text-base transition ease-in-out duration-300"
                                    >
                                        Book Now
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Contact Section */}
                <section id="contact" className="py-12 bg-gray-100">
                    <div className="container mx-auto text-center px-4">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">Get In Touch</h2>
                        <form className="max-w-lg mx-auto space-y-6">
                            <input
                                type="text"
                                placeholder="Your Name"
                                className="w-full p-4 border border-gray-300 rounded text-sm md:text-base"
                            />
                            <input
                                type="email"
                                placeholder="Your Email"
                                className="w-full p-4 border border-gray-300 rounded text-sm md:text-base"
                            />
                            <textarea
                                placeholder="Your Message"
                                className="w-full p-4 border border-gray-300 rounded text-sm md:text-base"
                                rows="4"
                            ></textarea>
                            <button
                                type="submit"
                                className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition ease-in-out duration-300"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </section>
            </main>
        </>
    );
}
