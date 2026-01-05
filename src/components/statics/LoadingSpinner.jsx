export default function LoadingSpinner(props) {
  return (
    <div className={`flex ${props.className}`}>
      <div className="text-center">
        <div className="h-8 w-8 lg:w-16 lg:h-16 mx-auto mb-4 relative">
          <div className="absolute inset-0 border-4 border-white rounded-full"></div>
          <div className="absolute inset-0 border-4 border-transparent border-t-[#a934dc] rounded-full animate-spin"></div>
        </div>
      </div>
    </div>
  );
}
