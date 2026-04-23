const Info = () => {
  return (
    <div className="flex flex-col justify-between">

          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">
              Get in Touch
            </h2>

            <p className="text-gray-600 mb-6">
              Whether you have feedback, business inquiries, or just want to say hello — we’re here for you.
            </p>

            <div className="space-y-4 text-gray-700">
              <p>📍 Multan, Pakistan</p>
              <p>📧 support@recipehub.com</p>
              <p>📞 +92 300 1234567</p>
            </div>
          </div>

          {/* Social Links */}
          <div className="mt-6 bg-white p-6 rounded-2xl shadow-lg">
            <h3 className="font-semibold text-gray-800 mb-3">
              Follow Us
            </h3>
            <div className="flex gap-4 text-lg">
              <span className="cursor-pointer hover:text-orange-500">🌐</span>
              <span className="cursor-pointer hover:text-orange-500">📸</span>
              <span className="cursor-pointer hover:text-orange-500">▶️</span>
              <span className="cursor-pointer hover:text-orange-500">🐦</span>
            </div>
          </div>

        </div>
  )
}

export default Info
