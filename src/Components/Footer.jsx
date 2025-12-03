import { FaFacebook, FaInstagram, FaPinterest } from "react-icons/fa";
import { Link } from "react-router";
import logo from '../assets/green-nest-logo.jpg';

const Footer = () => {
    return (
        <footer className="bg-green-100 text-black px-24 py-12 mt-10">

            <div className="grid md:grid-cols-5 gap-8">

                {/* About Section */}
                <div>
                    <div className="flex items-center gap-2">
                        <Link to="/" className="flex items-center gap-2">
                            <img src={logo} alt="GreenNest Logo" className="w-10 h-10 rounded-full" />
                            <span className="text-2xl font-bold">GreenNest</span>
                        </Link>
                    </div>
                    <p className="text-sm leading-relaxed mt-2">
                        GreenNest is your trusted companion for indoor gardening. We provide tips, plant care guides,
                        and access to healthy indoor plants to bring nature into your home.
                    </p>
                </div>

                {/* Plants Section */}
                <div>
                    <h4 className="font-semibold mb-2">Plants</h4>
                    <ul className="space-y-1 text-sm">
                        <li><Link to="/plants" className="hover:text-gray-700 transition-colors">All Plants</Link></li>
                        <li><Link to="/new" className="hover:text-gray-700 transition-colors">New Arrivals</Link></li>
                        <li><Link to="/popular" className="hover:text-gray-700 transition-colors">Popular Plants</Link></li>
                        <li><Link to="/gift" className="hover:text-gray-700 transition-colors">Gift Ideas</Link></li>
                    </ul>
                </div>

                {/* Support Section */}
                <div>
                    <h4 className="font-semibold mb-2">Support</h4>
                    <ul className="space-y-1 text-sm">
                        <li><Link to="/help" className="hover:text-gray-700 transition-colors">Help Center</Link></li>
                        <li><Link to="/shipping" className="hover:text-gray-700 transition-colors">Shipping Info</Link></li>
                        <li><Link to="/returns" className="hover:text-gray-700 transition-colors">Return Policy</Link></li>
                        <li><Link to="/faq" className="hover:text-gray-700 transition-colors">FAQs</Link></li>
                    </ul>
                </div>

                {/* About / Info Section */}
                <div>
                    <h4 className="font-semibold mb-2">About</h4>
                    <ul className="space-y-1 text-sm">
                        <li><Link to="/about" className="hover:text-gray-700 transition-colors">About Us</Link></li>
                        <li><Link to="/privacy" className="hover:text-gray-700 transition-colors">Privacy Policy</Link></li>
                        <li><Link to="/terms" className="hover:text-gray-700 transition-colors">Terms & Conditions</Link></li>
                        <li><Link to="/contact" className="hover:text-gray-700 transition-colors">Contact</Link></li>
                    </ul>
                </div>

                {/* Social Section */}
                <div>
                    <h4 className="font-semibold mb-2">Follow Us</h4>
                    <div className="flex gap-3 mt-1">
                        <a href="https://www.facebook.com/" target="_blank" className="w-9 h-9 flex items-center justify-center rounded-full bg-black bg-opacity-10 hover:bg-opacity-20 transition">
                            <FaFacebook size={18} className="text-blue-600" />
                        </a>
                        <a href="https://www.instagram.com/" target="_blank" className="w-9 h-9 flex items-center justify-center rounded-full bg-black bg-opacity-10 hover:bg-opacity-20 transition">
                            <FaInstagram size={18} className="text-pink-500" />
                        </a>
                        <a href="https://www.pinterest.com/" target="_blank" className="w-9 h-9 flex items-center justify-center rounded-full bg-black bg-opacity-10 hover:bg-opacity-20 transition">
                            <FaPinterest size={18} className="text-red-500" />
                        </a>
                    </div>
                </div>

            </div>

            {/* Footer Bottom */}
            <div className="text-left md:text-center text-sm border-t border-green-800 pt-4 mt-10">
                © 2025 GreenNest. Nurturing Nature, One Leaf at a Time!
            </div>

        </footer>
    );
};

export default Footer;
