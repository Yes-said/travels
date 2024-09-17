import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <header className="bg-blue-600 text-white shadow-md">
            <div className="container mx-auto flex justify-between items-center py-4 px-6">
                {/* Logo */}
                <div className="text-2xl font-bold">
                    <Link to="/" className="hover:text-gray-200">Travel & Explore</Link>
                </div>

                {/* Navigation */}
                <nav className="space-x-8">
                    <Link to="/" className="hover:text-gray-200">Home</Link>
                    <Link to="/destinations" className="hover:text-gray-200">Destinations</Link>
                    <Link to="/tours" className="hover:text-gray-200">Tours</Link>
                    <Link to="/contact" className="hover:text-gray-200">Contact</Link>
                </nav>

                {/* Book Now Button */}
                <a
                    href="#book"
                    className="bg-yellow-400 text-blue-600 py-2 px-4 rounded hover:bg-yellow-300"
                >
                    Book Now
                </a>
            </div>
        </header>
    );
}
