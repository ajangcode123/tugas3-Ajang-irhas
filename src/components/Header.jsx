import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-green-700 p-4 shadow-md">
      <nav className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-2xl font-bold">My List Friend</h1>
        <ul className="flex space-x-6">
          <li>
            <Link to="/" className="text-white hover:text-green-300 transform transition-transform duration-300 hover:scale-105">Home</Link>
          </li>
          <li>
            <Link to="/about" className="text-white hover:text-green-300 transform transition-transform duration-300 hover:scale-105">About</Link>
          </li>
          <li>
            <Link to="/contact" className="text-white hover:text-green-300 transform transition-transform duration-300 hover:scale-105">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
