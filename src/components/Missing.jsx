import { Link } from "react-router";

const Missing = () => {
  return <main className="flex flex-col items-center justify-center h-screen bg-BODY-BG">
    <p className="text-[1.2rem] font-bold mb-4"  >404</p>
    <p className="font-bold text-[0.8rem] mb-1">Page not found</p>
    <p className="text-[0.8rem] text-LIGHT-TEXT">The page you're looking for doesn't exist or has been removed</p>
    <Link to="/" className="text-white bg-GREEN rounded-md text-[0.8rem] px-2 py-1 mt-4">Go Home</Link >
  </main>;
};

export default Missing;
