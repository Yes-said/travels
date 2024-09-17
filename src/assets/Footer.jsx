export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-blue-600 text-white py-8 mt-auto">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* About Section */}
                    <div>
                        <h3 className="text-2xl font-bold mb-4">Travel & Explore</h3>
                        <p>
                            Your ultimate partner in discovering the best travel destinations and exclusive tours around the world. Let’s explore together!
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-xl font-bold mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li><a href="#home" className="hover:text-gray-200">Home</a></li>
                            <li><a href="#destinations" className="hover:text-gray-200">Destinations</a></li>
                            <li><a href="#tours" className="hover:text-gray-200">Tours</a></li>
                            <li><a href="#contact" className="hover:text-gray-200">Contact</a></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-xl font-bold mb-4">Contact Us</h3>
                        <p>Email: info@travelandexplore.com</p>
                        <p>Phone: +123 456 789</p>
                        <p>Address: 123 Travel St, Adventure City</p>
                        <div className="flex space-x-4 mt-4">
                            {/* Social Media Icons */}
                            <a href="#" className="hover:text-gray-200">
                                <i className="fab fa-facebook"></i>
                            </a>
                            <a href="#" className="hover:text-gray-200">
                                <i className="fab fa-twitter"></i>
                            </a>
                            <a href="#" className="hover:text-gray-200">
                                <i className="fab fa-instagram"></i>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Copyright and Powered by */}
                <div className="mt-8 flex justify-between items-center">
                    <span className="text-white font-medium text-sm sm:text-base">
                        &copy; {currentYear} Travel & Explore. All rights reserved.
                    </span>
                    <span className="text-white font-medium text-sm sm:text-base">
                        Powered by Said.
                    </span>
                </div>
            </div>
        </footer>
    );
}
