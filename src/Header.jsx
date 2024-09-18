import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="bg-blue-600 text-white shadow-md">
            <div className="container mx-auto flex justify-between items-center py-4 px-6">
                {/* Logo */}
                <div className="text-2xl font-bold">
                    <Link to="/" className="hover:text-gray-200">
                        Travel & Explore
                    </Link>
                </div>

                {/* Hamburger Menu (visible on small screens) */}
                <div className="md:hidden">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="text-white focus:outline-none"
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}
                            ></path>
                        </svg>
                    </button>
                </div>

                {/* Navigation (hidden on small screens) */}
                <nav
                    className={`space-x-8 md:flex ${
                        isOpen ? 'block' : 'hidden'
                    } w-full md:w-auto md:space-y-0 space-y-4 md:space-x-8 mt-4 md:mt-0`}
                >
                    <Link to="/" className="block hover:text-gray-200">
                        Home
                    </Link>
                    <Link to="/destinations" className="block hover:text-gray-200">
                        Destinations
                    </Link>
                    <Link to="/tours" className="block hover:text-gray-200">
                        Tours
                    </Link>
                    <Link to="/contact" className="block hover:text-gray-200">
                        Contact
                    </Link>
                </nav>

                {/* Book Now Button */}
                <a
                    href="#book"
                    className="hidden md:inline-block bg-yellow-400 text-blue-600 py-2 px-4 rounded hover:bg-yellow-300"
                >
                    Book Now
                </a>
            </div>

            {/* Book Now Button for small screens */}
            {isOpen && (
                <div className="md:hidden mt-4">
                    <a
                        href="#book"
                        className="block bg-yellow-400 text-blue-600 py-2 px-4 rounded hover:bg-yellow-300 text-center"
                    >
                        Book Now
                    </a>
                </div>
            )}
        </header>
    );
}
