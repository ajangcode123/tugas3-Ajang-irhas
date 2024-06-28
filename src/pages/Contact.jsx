const Contact = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center"
      style={{ 
        backgroundImage: `url(daun.jpg)`,
      }}
    >
      <div className="bg-gray-800 bg-opacity-50 min-h-screen flex items-center justify-center">
        <div className="bg-white bg-opacity-90 p-6 rounded-lg shadow-md max-w-3xl w-full md:w-2/3 lg:w-1/2">
          <h1 className="text-3xl font-bold text-green-700 text-center mb-6">Halaman Kontak</h1>
          <div className="bg-white bg-opacity-90 p-6 rounded-lg shadow-lg">
            <p className="text-gray-800">
              Untuk informasi lebih lanjut atau pertanyaan seputar aplikasi kami, silakan hubungi kami di:
            </p>
            <ul className="mt-4 text-gray-800">
              <li>Email: Mylisfriend.com</li>
              <li>Telepon: +62 83645526376</li>
              <li>Alamat: Jl. Sukaraja No. 8, Kota Bandung, Indonesia</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
