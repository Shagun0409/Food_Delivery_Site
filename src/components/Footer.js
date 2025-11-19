const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 mt-12">
      {/* Top Section */}
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 border-b border-gray-700 pb-8">
        
        {/* Quick Links */}
        <div>
          <h4 className="text-white font-semibold text-lg mb-4 border-b-2 border-green-500 inline-block">
            Quick Links
          </h4>
          <ul className="space-y-2">
            <li className="hover:text-green-400 transition duration-200 cursor-pointer">Home</li>
            <li className="hover:text-green-400 transition duration-200 cursor-pointer">Contact Us</li>
            <li className="hover:text-green-400 transition duration-200 cursor-pointer">Terms & Conditions</li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h4 className="text-white font-semibold text-lg mb-4 border-b-2 border-green-500 inline-block">
            Follow Us
          </h4>
          <div className="flex space-x-5 text-2xl">
            <a href="#" className="hover:text-green-400 transition duration-200">🌐</a>
            <a href="#" className="hover:text-green-400 transition duration-200">📘</a>
            <a href="#" className="hover:text-green-400 transition duration-200">🐦</a>
            <a href="#" className="hover:text-green-400 transition duration-200">📸</a>
          </div>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-white font-semibold text-lg mb-4 border-b-2 border-green-500 inline-block">
            Contact
          </h4>
          <p className="text-sm leading-relaxed">
            123, Food Street, Sector 18 <br />
            Chandigarh, India <br />
            📞 +91 9876543210 <br />
            ✉️ info@foodapp.com
          </p>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="text-center text-sm text-gray-400 mt-6">
        © 2025 <span className="text-green-400 font-semibold">FoodApp</span>. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
