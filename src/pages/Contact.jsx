import React from 'react';

export default function Contact() {
    return (
        <div className="bg-gray-100 min-h-screen">
            {/* Contact Section */}
            <section className="container mx-auto py-12 px-6">
                <h1 className="text-4xl font-bold text-blue-600 mb-8 text-center">Get in Touch</h1>
                
                <div className="flex flex-col lg:flex-row lg:space-x-8">
                    {/* Contact Form */}
                    <div className="bg-white shadow-md rounded-lg p-8 lg:w-1/2 mb-8 lg:mb-0">
                        <h2 className="text-2xl font-semibold mb-6">Send us a Message</h2>
                        <form>
                            <div className="mb-4">
                                <label className="block text-gray-700 mb-2" htmlFor="name">
                                    Your Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                                    placeholder="Enter your name"
                                />
                            </div>

                            <div className="mb-4">
                                <label className="block text-gray-700 mb-2" htmlFor="email">
                                    Your Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                                    placeholder="Enter your email"
                                />
                            </div>

                            <div className="mb-4">
                                <label className="block text-gray-700 mb-2" htmlFor="message">
                                    Your Message
                                </label>
                                <textarea
                                    id="message"
                                    className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                                    rows="5"
                                    placeholder="Enter your message"
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-500"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>

                    {/* Contact Information */}
                    <div className="lg:w-1/2">
                        <div className="bg-white shadow-md rounded-lg p-8 mb-8">
                            <h2 className="text-2xl font-semibold mb-4">Contact Details</h2>
                            <p className="mb-4">
                                <strong>Email:</strong> info@travelandexplore.com
                            </p>
                            <p className="mb-4">
                                <strong>Phone:</strong> +123 456 7890
                            </p>
                            <p>
                                <strong>Address:</strong> 123 Travel St, Explore City, Country
                            </p>
                        </div>

                        {/* Map Placeholder */}
                        <div className="bg-gray-200 h-64 rounded-lg shadow-md flex items-center justify-center">
                            <span className="text-gray-500">[Map Placeholder]</span>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
