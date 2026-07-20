function Navbar() {
  return (
    <nav>
    
      <h2 display="inline" justifyContent="center">SYED PORTFOLIO</h2>

      <ul display="flex" justify content="center" gap="4">
        <li className="bg-gray-500 text-white px-4 py-2 rounded">Home</li>
        <li className="hover:bg-gray-200 px-4 py-2 rounded">About</li>
        <li className="hover:bg-gray-200 px-4 py-2 rounded">Contact</li>
      </ul>
    </nav>
  );
}

export default Navbar;