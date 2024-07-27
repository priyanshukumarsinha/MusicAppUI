import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 py-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 sm:px-6 lg:px-8">
        <div>
            <h2 className="text-xl font-bold mb-4">Company</h2>
            <ul>
                <li>About</li>
                <li>Blog</li>
                <li>Careers</li>
                <li>Contact</li>
            </ul>
        </div>
        <div>
            <h2 className="text-xl font-bold mb-4">Support</h2>
            <ul>
                <li>Help Center</li>
                <li>Terms of Service</li>
                <li>Legal</li>
            </ul>
        </div>
        <div>
            <h2 className="text-xl font-bold mb-4">Social</h2>
            <ul>
                <li>Facebook</li>
                <li>Twitter</li>
                <li>Instagram</li>
            </ul>
        </div>
        <div>
            <h2 className="text-xl font-bold mb-4">Newsletter</h2>
            <p>Stay up to date with our latest news and products.</p>
            <div className="mt-4">
                <input type="text" placeholder="Enter your email" className="bg-gray-800 text-white px-4 py-2 w-full" />
                <button className="bg-blue-600 text-white px-4 py-2 mt-2 w-full">Subscribe</button>
            </div>
        </div>

        <p 
        className="text-center text-sm mt-8 col-span-full"
        >
            &copy; 2024 Company. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
