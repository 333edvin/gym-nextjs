import Navbar from "../Navbar";

export default function Layout({children}){
    return(
        <>
        <header>
            <Navbar/>
        </header>
        {children}
        <footer className="bg-gray-900 text-white py-8">
  <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
    {/* Logo and Description */}
    <div>
      <h2 className="text-2xl font-bold mb-4">GymName</h2>
      <p className="text-gray-400">
        Your fitness journey starts here. Join us to achieve your fitness goals
        with the best trainers and equipment.
      </p>
    </div>

    {/* Contact Information */}
    <div>
      <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
      <ul className="space-y-2">
        <li className="text-gray-400">
          <i className="fas fa-map-marker-alt mr-2"></i> 123 Gym Street, City,
          State
        </li>
        <li className="text-gray-400">
          <i className="fas fa-phone mr-2"></i> +1 (123) 456-7890
        </li>
        <li className="text-gray-400">
          <i className="fas fa-envelope mr-2"></i> info@gymname.com
        </li>
      </ul>
      {/* Social Media Icons */}
      <div className="flex space-x-4 mt-4">
        <a href="#" className="text-gray-400 hover:text-orange-500">
          <i className="fab fa-facebook-f"></i>
        </a>
        <a href="#" className="text-gray-400 hover:text-orange-500">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="#" className="text-gray-400 hover:text-orange-500">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="#" className="text-gray-400 hover:text-orange-500">
          <i className="fab fa-linkedin"></i>
        </a>
      </div>
    </div>
  </div>
  {/* Copyright Section */}
  <div className="mt-8 border-t border-gray-800 pt-4 text-center text-gray-500">
    © 2024 GymName. All rights reserved.
  </div>
</footer>

        </>
    )
}