import { Facebook, Twitter, Instagram } from 'lucide-react'; 

const Footer = () => {
  return (
    <footer className="bg-green-700 text-white py-4 mt-0 shadow-md">
      <div className="container mx-auto text-center">
        <p>&copy; 2024 My List Friend. All rights reserved.</p>
        <div className="flex justify-center space-x-6 mt-2">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-green-300 transform transition-transform duration-300 hover:scale-105">
            <Facebook size={24} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-green-300 transform transition-transform duration-300 hover:scale-105">
            <Twitter size={24} />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-green-300 transform transition-transform duration-300 hover:scale-105">
            <Instagram size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
