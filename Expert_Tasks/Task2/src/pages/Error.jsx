const Error = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center px-4">
            <div className="max-w-2xl mx-auto text-center">
                {/* Large 404 Number */}
                <div className="mb-8">
                    <h1 className="text-8xl md:text-9xl font-bold text-blue-600/20 mb-4">
                        404
                    </h1>
                </div>

                {/* Error Icon */}
                <div className="mb-8">
                    <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                        <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6 4h6m6-8a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </div>
                </div>

                {/* Main Error Message */}
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    Oops! Page Not Found
                </h2>

                <p className="text-lg text-gray-600 mb-8 max-w-md mx-auto">
                    The page you're looking for seems to have wandered off into the digital void. Don't worry, it happens to the best of us!
                </p>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
                    <button 
                        onClick={() => window.history.back()}
                        className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg text-lg font-medium transition-colors duration-200 shadow-lg"
                    >
                        Go Back
                    </button>
                    <button 
                        onClick={() => window.location.href = '/'}
                        className="border-2 border-gray-300 hover:border-blue-600 text-gray-700 hover:text-blue-600 px-8 py-3 rounded-lg text-lg font-medium transition-colors duration-200"
                    >
                        Go Home
                    </button>
                </div>

                {/* Fun Stats Section */}
                <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-200">
                    <h3 className="text-xl font-semibold text-gray-900 mb-6">
                        While you're here, check out our stats:
                    </h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                        <div>
                            <div className="text-2xl font-bold text-blue-600 mb-1">10k+</div>
                            <div className="text-sm text-gray-600">Happy Users</div>
                        </div>
                        <div>
                            <div className="text-2xl font-bold text-purple-600 mb-1">99.9%</div>
                            <div className="text-sm text-gray-600">Uptime</div>
                        </div>
                        <div>
                            <div className="text-2xl font-bold text-green-600 mb-1">24/7</div>
                            <div className="text-sm text-gray-600">Support</div>
                        </div>
                        <div>
                            <div className="text-2xl font-bold text-indigo-600 mb-1">50+</div>
                            <div className="text-sm text-gray-600">Countries</div>
                        </div>
                    </div>
                </div>

                {/* Helpful Links */}
                <div className="mt-12">
                    <p className="text-gray-500 mb-4">Need help? Try these popular pages:</p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <a href="/" className="text-blue-600 hover:text-blue-700 underline">Home</a>
                        <a href="/about" className="text-blue-600 hover:text-blue-700 underline">About</a>
                        <a href="/contact" className="text-blue-600 hover:text-blue-700 underline">Contact</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Error;