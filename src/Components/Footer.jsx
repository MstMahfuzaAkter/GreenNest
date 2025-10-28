import { FaFacebook, FaInstagram, FaPinterest } from "react-icons/fa";
import { Link } from "react-router";

const Footer = () => {
    return (
        <footer className="bg-green-800 text-white py-6 mt-10">
            <div className="container mx-auto px-30 grid md:grid-cols-3  gap-6 text-center md:text-left">
                <div>
                    <h3 className="font-semibold mb-2 text-lg ">Quick Links</h3>
                    <ul className="space-y-1">
                        <li><Link to="/about" className="hover:underline">About</Link></li>
                        <li><Link to="/contact" className="hover:underline">Contact</Link></li>
                        <li><Link to="/privacy" className="hover:underline">Privacy Policy</Link></li>
                    </ul>
                </div>

                <div>
                    <h3 className="font-semibold mb-2 text-lg">Follow Us</h3>
                    <div className="flex justify-center md:justify-start gap-4">
                        <a href="https://www.instagram.com/" target="_blank" className="hover:text-gray-300"><FaInstagram size={22} /></a>
                        <a href="https://www.facebook.com/mahfuza.akter.927980" target="_blank" className="hover:text-gray-300"><FaFacebook size={22} /></a>
                        <a href="https://www.pinterest.com/" target="_blank" className="hover:text-gray-300"><FaPinterest size={22} /></a>

                    </div>
                </div>

                <div className="md:text-right">
                    <p>© 2025 GreenNest. All rights reserved.</p>
                    <p>Mst.Mahfuza AKter</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
