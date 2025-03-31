import React from "react";
import { useLocation, useNavigate } from "react-router";

export default function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  const pathMatchRoute = (route) => {
    if (route === location.pathname) {
      return true;
    }
  };
  return (
    <div className="bg-white border-b shadow-sm sticky top-0 z-50">
      <header className="flex justify-between items-center px-3 max-w-6xl mx-auto">
        <div>
          <img
            onClick={() => {
              navigate("/");
            }}
            className="h-7 cursor-pointer"
            src="https://www.cdnlogo.com/logos/b/94/booking-com.svg"
            alt="logo"
          />
        </div>
        <div>
          <ul className="flex space-x-10">
            <li
              onClick={() => {
                navigate("/");
              }}
              className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent ${
                pathMatchRoute("/") && "text-black border-b-red-500"
              }`}
            >
              Home
            </li>
            <li
              onClick={() => {
                navigate("/offers");
              }}
              className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent ${
                pathMatchRoute("/offers") && "text-black border-b-red-500"
              }`}
            >
              Offers
            </li>
            <li
              onClick={() => {
                navigate("/sign-in");
              }}
              className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent ${
                pathMatchRoute("/sign-in") && "text-black border-b-red-500"
              }`}
            >
              Sign in
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
}
