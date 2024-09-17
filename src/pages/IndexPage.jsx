export default function IndexPage() {
    return (
        <>
            <main>
                {/* Hero Section */}
                <section
                    id="home"
                    className="bg-cover bg-center h-screen flex items-center justify-center"
                    style={{ backgroundImage: "url('path_to_your_image.jpg')" }}
                >
                    <div className="text-center text-white">
                        <h1 className="text-5xl font-bold mb-4">Discover New Destinations</h1>
                        <p className="text-lg mb-8">Explore the world with our exclusive tours</p>
                        <a
                            href="#tours"
                            className="bg-yellow-400 text-blue-600 py-2 px-6 rounded hover:bg-yellow-300"
                        >
                            View Tours
                        </a>
                    </div>
                </section>

                {/* Destinations Section */}
                <section id="destinations" className="py-12 bg-gray-100">
                    <div className="container mx-auto text-center">
                        <h2 className="text-4xl font-bold mb-6">Popular Destinations</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="bg-white shadow-md rounded overflow-hidden">
                                <img src="destination1.jpg" alt="Destination 1" className="w-full h-48 object-cover" />
                                <div className="p-4">
                                    <h3 className="text-xl font-bold mb-2">Paris</h3>
                                    <p>Discover the beauty of the City of Lights with our curated tours.</p>
                                </div>
                            </div>
                            <div className="bg-white shadow-md rounded overflow-hidden">
                                <img src="destination2.jpg" alt="Destination 2" className="w-full h-48 object-cover" />
                                <div className="p-4">
                                    <h3 className="text-xl font-bold mb-2">Tokyo</h3>
                                    <p>Experience the blend of tradition and modernity in Japan's capital city.</p>
                                </div>
                            </div>
                            <div className="bg-white shadow-md rounded overflow-hidden">
                                <img src="destination3.jpg" alt="Destination 3" className="w-full h-48 object-cover" />
                                <div className="p-4">
                                    <h3 className="text-xl font-bold mb-2">Santorini</h3>
                                    <p>Enjoy stunning sunsets and whitewashed architecture on this Greek island.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Tours Section */}
                <section id="tours" className="py-12 bg-blue-600 text-white">
                    <div className="container mx-auto text-center">
                        <h2 className="text-4xl font-bold mb-6">Our Exclusive Tours</h2>
                        <p className="mb-8">Choose from a variety of tour packages designed for every kind of traveler.</p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="bg-white text-blue-600 shadow-md rounded p-6">
                                <h3 className="text-2xl font-bold mb-4">European Adventure</h3>
                                <p className="mb-4">10 days | Explore France, Italy, and Switzerland.</p>
                                <a
                                    href="#book"
                                    className="bg-yellow-400 text-blue-600 py-2 px-4 rounded hover:bg-yellow-300"
                                >
                                    Book Now
                                </a>
                            </div>
                            <div className="bg-white text-blue-600 shadow-md rounded p-6">
                                <h3 className="text-2xl font-bold mb-4">Asian Discovery</h3>
                                <p className="mb-4">14 days | Visit Japan, China, and Thailand.</p>
                                <a
                                    href="#book"
                                    className="bg-yellow-400 text-blue-600 py-2 px-4 rounded hover:bg-yellow-300"
                                >
                                    Book Now
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Contact Section */}
                <section id="contact" className="py-12 bg-gray-100">
                    <div className="container mx-auto text-center">
                        <h2 className="text-4xl font-bold mb-6">Get In Touch</h2>
                        <form className="max-w-lg mx-auto space-y-6">
                            <input
                                type="text"
                                placeholder="Your Name"
                                className="w-full p-4 border border-gray-300 rounded"
                            />
                            <input
                                type="email"
                                placeholder="Your Email"
                                className="w-full p-4 border border-gray-300 rounded"
                            />
                            <textarea
                                placeholder="Your Message"
                                className="w-full p-4 border border-gray-300 rounded"
                                rows="4"
                            ></textarea>
                            <button
                                type="submit"
                                className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
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