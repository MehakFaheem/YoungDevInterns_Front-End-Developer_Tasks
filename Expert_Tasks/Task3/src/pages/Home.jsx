const Home = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 font-sans">

            {/* Hero Section */}
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="text-center">
                    <div className="mb-8">
                        <span className="inline-block px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-6">
                            Welcome to the future
                        </span>
                    </div>
                    
                    <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight text-center">
                        Welcome to Your{' '}
                        <span className="text-blue-600">
                            Amazing Platform
                        </span>
                    </h1>
                    
                    <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
                        Experience the next generation of web applications. Built with modern technologies 
                        to deliver exceptional performance and user experience.
                    </p>
                    
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
                        <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-md text-lg font-medium transition-colors duration-200 shadow-lg">
                            Get Started Today
                        </button>
                        <button className="border-2 border-gray-300 hover:border-blue-600 text-gray-700 hover:text-blue-600 px-8 py-3 rounded-md text-lg font-medium transition-colors duration-200">
                            Learn More
                        </button>
                    </div>
                </div>

                {/* Feature Cards */}
                <div className="grid md:grid-cols-3 gap-8 mt-20">
                    <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100">
                        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                            <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-3">Lightning Fast</h3>
                        <p className="text-gray-600">Built with performance in mind, delivering exceptional speed and responsiveness.</p>
                    </div>
                    
                    <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100">
                        <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                            <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-3">Secure & Reliable</h3>
                        <p className="text-gray-600">Enterprise-grade security with 99.9% uptime guarantee for your peace of mind.</p>
                    </div>
                    
                    <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100">
                        <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                            <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-3">User Friendly</h3>
                        <p className="text-gray-600">Intuitive design that makes complex tasks simple and enjoyable to complete.</p>
                    </div>
                </div>

                {/* Stats Section */}
                <div className="mt-20 bg-white/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-200">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        <div>
                            <div className="text-3xl font-bold text-blue-600 mb-2">10k+</div>
                            <div className="text-gray-600">Happy Users</div>
                        </div>
                        <div>
                            <div className="text-3xl font-bold text-purple-600 mb-2">99.9%</div>
                            <div className="text-gray-600">Uptime</div>
                        </div>
                        <div>
                            <div className="text-3xl font-bold text-green-600 mb-2">24/7</div>
                            <div className="text-gray-600">Support</div>
                        </div>
                        <div>
                            <div className="text-3xl font-bold text-indigo-600 mb-2">50+</div>
                            <div className="text-gray-600">Countries</div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Home;