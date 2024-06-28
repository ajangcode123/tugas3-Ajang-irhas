const About = () => {
  return (
    <div className="min-h-screen bg-cover bg-center" style={{ backgroundImage: `url(daun.jpg)` }}>
      <div className="bg-gray-800 bg-opacity-50 min-h-screen flex items-center justify-center">
        <div className="bg-white bg-opacity-90 p-6 rounded-lg shadow-md border border-gray-300 max-w-3xl w-full md:w-2/3 lg:w-1/2">
          <h1 className="text-3xl font-bold mb-6 text-green-700 text-center">Tentang Aplikasi</h1>
          <p className="text-gray-700">
            Aplikasi ini dirancang untuk memudahkan pengelolaan data absensi dalam sebuah institusi pendidikan. Dengan fitur-fitur
            yang intuitif, pengguna dapat dengan mudah menambah, mengedit, dan menghapus catatan absensi setiap siswa. Selain itu,
            aplikasi ini juga dilengkapi dengan fitur pencarian dan filter sehingga memudahkan dalam melakukan analisis dan pemrosesan
            data absensi secara efisien.
          </p>
          <p className="mt-4 text-gray-700">
            Dibangun menggunakan teknologi web terkini, aplikasi ini memberikan pengalaman pengguna yang responsif dan cepat, serta
            dapat diakses dari berbagai perangkat. Dengan demikian, proses pengelolaan absensi diharapkan menjadi lebih efektif dan
            efisien.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
