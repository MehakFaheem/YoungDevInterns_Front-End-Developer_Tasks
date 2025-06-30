// src/components/ErrorMessage.jsx
const ErrorMessage = ({ 
  message = "Something went wrong", 
  onRetry, 
  type = "error" 
}) => {
  const typeStyles = {
    error: {
      bg: "bg-red-50",
      border: "border-red-200",
      text: "text-red-800",
      icon: "text-red-500",
      button: "bg-red-600 hover:bg-red-700"
    },
    warning: {
      bg: "bg-yellow-50",
      border: "border-yellow-200", 
      text: "text-yellow-800",
      icon: "text-yellow-500",
      button: "bg-yellow-600 hover:bg-yellow-700"
    },
    info: {
      bg: "bg-blue-50",
      border: "border-blue-200",
      text: "text-blue-800", 
      icon: "text-blue-500",
      button: "bg-blue-600 hover:bg-blue-700"
    }
  };

  const styles = typeStyles[type];

  const getIcon = () => {
    switch(type) {
      case 'warning':
        return (
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
          </svg>
        );
      case 'info':
        return (
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        );
      default:
        return (
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        );
    }
  };

  return (
    <div className="flex items-center justify-center min-h-[400px] p-4">
      <div className={`max-w-md w-full ${styles.bg} ${styles.border} border rounded-xl p-8 text-center shadow-lg`}>
        {/* Icon */}
        <div className={`flex justify-center mb-4 ${styles.icon}`}>
          {getIcon()}
        </div>

        {/* Title */}
        <h3 className={`text-xl font-semibold ${styles.text} mb-2`}>
          {type === 'error' ? 'Oops! Something went wrong' : 
           type === 'warning' ? 'Warning' : 'Information'}
        </h3>

        {/* Message */}
        <p className={`${styles.text} mb-6 opacity-80`}>
          {message}
        </p>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          {onRetry && (
            <button
              onClick={onRetry}
              className={`px-6 py-2 ${styles.button} text-white rounded-lg font-medium transition-colors duration-200 flex items-center justify-center space-x-2`}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
              <span>Try Again</span>
            </button>
          )}
          
          <button
            onClick={() => window.location.reload()}
            className="px-6 py-2 bg-gray-200 text-gray-700 rounded-lg font-medium hover:bg-gray-300 transition-colors duration-200"
          >
            Refresh Page
          </button>
        </div>

        {/* Additional help text */}
        <p className="text-xs text-gray-500 mt-4">
          If the problem persists, please contact support
        </p>
      </div>
    </div>
  );
};

export default ErrorMessage;