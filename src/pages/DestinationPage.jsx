import { Link } from "react-router-dom";
import bali from "../assets/bali.jpeg";
import sidney from "../assets/sidney.jpeg";
import rome from "../assets/rome.jpeg";

export default function DestinationPage() {
    return (
        <>
            <main>
                {/* Hero Section */}
                <section
                    id="destination-hero"
                    className="bg-cover bg-center h-screen flex items-center justify-center"
                    style={{ backgroundImage: "url('path_to_destination_hero_image.jpg')" }}
                >
                    <div className="text-center text-black px-4">
                        <h1 className="text-3xl sm:text-5xl font-bold mb-4">Explore Our Featured Destinations</h1>
                        <p className="text-sm sm:text-lg mb-8">Find your perfect getaway with our curated selection of world-class destinations.</p>
                        <Link to={"/destinations-list"} 
                            className="bg-yellow-400 text-blue-600 py-2 px-6 rounded hover:bg-yellow-300 transition-colors duration-200"
                        >
                            View Destinations
                        </Link>
                    </div>
                </section>

                {/* Destinations List Section */}
                <section id="destinations-list" className="py-12 bg-gray-100">
                    <div className="container mx-auto text-center px-4">
                        <h2 className="text-2xl sm:text-4xl font-bold mb-6">Our Top Destinations</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                            {/* Destination 1 */}
                            <div className="bg-white shadow-md rounded overflow-hidden">
                                <img src={bali} alt="bali" className="w-full h-48 object-cover" />
                                <div className="p-4">
                                    <h3 className="text-lg sm:text-xl font-bold mb-2">Bali, Indonesia</h3>
                                    <p className="text-sm sm:text-base mb-4">Experience tropical paradise with Bali’s stunning beaches, temples, and culture.</p>
                                    <a
                                        href="#book"
                                        className="bg-yellow-400 text-blue-600 py-2 px-4 rounded hover:bg-yellow-300 transition-colors duration-200"
                                    >
                                        Learn More
                                    </a>
                                </div>
                            </div>

                            {/* Destination 2 */}
                            <div className="bg-white shadow-md rounded overflow-hidden">
                                <img src={sidney} alt="sidney" className="w-full h-48 object-cover" />
                                <div className="p-4">
                                    <h3 className="text-lg sm:text-xl font-bold mb-2">Sydney, Australia</h3>
                                    <p className="text-sm sm:text-base mb-4">Discover the iconic Sydney Opera House and enjoy Australia’s vibrant culture.</p>
                                    <a
                                        href="#book"
                                        className="bg-yellow-400 text-blue-600 py-2 px-4 rounded hover:bg-yellow-300 transition-colors duration-200"
                                    >
                                        Learn More
                                    </a>
                                </div>
                            </div>

                            {/* Destination 3 */}
                            <div className="bg-white shadow-md rounded overflow-hidden">
                                <img src={rome} alt="rome" className="w-full h-48 object-cover" />
                                <div className="p-4">
                                    <h3 className="text-lg sm:text-xl font-bold mb-2">Rome, Italy</h3>
                                    <p className="text-sm sm:text-base mb-4">Step back in time and explore ancient Roman landmarks in this historical city.</p>
                                    <a
                                        href="#book"
                                        className="bg-yellow-400 text-blue-600 py-2 px-4 rounded hover:bg-yellow-300 transition-colors duration-200"
                                    >
                                        Learn More
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Featured Tours Section */}
                <section id="featured-tours" className="py-12 bg-blue-600 text-white">
                    <div className="container mx-auto text-center px-4">
                        <h2 className="text-2xl sm:text-4xl font-bold mb-6">Tours in These Destinations</h2>
                        <p className="text-sm sm:text-lg mb-8">Find the perfect tour package for these destinations. Book now for an unforgettable experience.</p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
                            {/* Tour 1 */}
                            <div className="bg-white text-blue-600 shadow-md rounded p-6">
                                <h3 className="text-xl sm:text-2xl font-bold mb-4">Bali Retreat</h3>
                                <p className="text-sm sm:text-base mb-4">7 days | Immerse yourself in the serene beauty of Bali’s beaches and temples.</p>
                                <a
                                    href="#book"
                                    className="bg-yellow-400 text-blue-600 py-2 px-4 rounded hover:bg-yellow-300 transition-colors duration-200"
                                >
                                    Book Now
                                </a>
                            </div>

                            {/* Tour 2 */}
                            <div className="bg-white text-blue-600 shadow-md rounded p-6">
                                <h3 className="text-xl sm:text-2xl font-bold mb-4">Sydney Explorer</h3>
                                <p className="text-sm sm:text-base mb-4">5 days | Discover the iconic landmarks and hidden gems of Sydney.</p>
                                <a
                                    href="#book"
                                    className="bg-yellow-400 text-blue-600 py-2 px-4 rounded hover:bg-yellow-300 transition-colors duration-200"
                                >
                                    Book Now
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Contact Section */}
                <section id="contact" className="py-12 bg-gray-100">
                    <div className="container mx-auto text-center px-4">
                        <h2 className="text-2xl sm:text-4xl font-bold mb-6">Need Help? Contact Us</h2>
                        <form className="max-w-lg mx-auto space-y-6">
                            <input
                                type="text"
                                placeholder="Your Name"
                                className="w-full p-3 sm:p-4 border border-gray-300 rounded"
                            />
                            <input
                                type="email"
                                placeholder="Your Email"
                                className="w-full p-3 sm:p-4 border border-gray-300 rounded"
                            />
                            <textarea
                                placeholder="Your Message"
                                className="w-full p-3 sm:p-4 border border-gray-300 rounded"
                                rows="4"
                            ></textarea>
                            <button
                                type="submit"
                                className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors duration-200"
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
