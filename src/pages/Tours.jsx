import { Link } from 'react-router-dom';
import safari from '../assets/safari.jpeg'; // Ensure this path and format are correct
import gateway from '../assets/gateway.jpeg'; // Ensure this path and format are correct
import trek from '../assets/trek.jpeg'; // Ensure this path and format are correct

export default function Tours() {
    const tours = [
        {
            id: 1,
            title: 'Safari Adventure',
            description: 'Experience the wildlife like never before with our Safari Adventure package.',
            imageUrl: safari,
            price: '$1,200',
        },
        {
            id: 2,
            title: 'Beach Getaway',
            description: 'Relax on the sandy beaches with our exclusive Beach Getaway package.',
            imageUrl: gateway,
            price: '$900',
        },
        {
            id: 3,
            title: 'Mountain Trek',
            description: 'Conquer the peaks with our Mountain Trek adventure package.',
            imageUrl: trek,
            price: '$1,500',
        },
    ];

    return (
        <div className="bg-gray-100 py-10 px-4 sm:px-6 lg:px-8">
            <div className="container mx-auto">
                <h1 className="text-3xl sm:text-4xl font-bold text-center text-blue-600 mb-8">
                    Our Tours
                </h1>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                    {tours.map((tour) => (
                        <div
                            key={tour.id}
                            className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105"
                        >
                            <img
                                src={tour.imageUrl}
                                alt={tour.title}
                                className="w-full h-40 sm:h-48 lg:h-56 object-cover"
                            />
                            <div className="p-4 sm:p-6">
                                <h2 className="text-xl sm:text-2xl font-bold text-blue-600 mb-2">
                                    {tour.title}
                                </h2>
                                <p className="text-gray-700 mb-4">
                                    {tour.description}
                                </p>
                                <div className="flex justify-between items-center">
                                    <span className="text-lg sm:text-xl font-semibold text-yellow-400">
                                        {tour.price}
                                    </span>
                                    <Link
                                        to={`/tours/${tour.id}`}
                                        className="bg-blue-600 text-white py-1.5 px-3 sm:py-2 sm:px-4 rounded hover:bg-blue-500 transition-colors"
                                    >
                                        View Details
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
