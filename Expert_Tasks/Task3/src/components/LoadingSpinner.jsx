// src/components/LoadingSpinner.jsx
const LoadingSpinner = ({ size = "large", message = "Loading..." }) => {
  const sizeClasses = {
    small: "w-6 h-6",
    medium: "w-10 h-10", 
    large: "w-16 h-16"
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] space-y-4">
      {/* Spinner */}
      <div className="relative">
        <div className={`${sizeClasses[size]} border-4 border-gray-200 border-t-blue-600 rounded-full animate-spin`}></div>
        
        {/* Pulse effect */}
        <div className={`absolute inset-0 ${sizeClasses[size]} border-4 border-blue-200 rounded-full animate-ping opacity-20`}></div>
      </div>

      {/* Loading text */}
      <div className="text-center">
        <h3 className="text-lg font-medium text-gray-700 mb-1">{message}</h3>
        <p className="text-sm text-gray-500">Please wait while we fetch the data</p>
      </div>

      {/* Loading dots animation */}
      <div className="flex space-x-1">
        <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce"></div>
        <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
        <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
      </div>
    </div>
  );
};

export default LoadingSpinner;