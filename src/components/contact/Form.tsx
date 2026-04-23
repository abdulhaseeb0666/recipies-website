import { useState } from "react"

const Form = () => {
    const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log(form)
    alert("Message sent! 🚀")
  }

  return (
    <form
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded-2xl shadow-lg"
        >
          <h2 className="text-2xl font-bold mb-6 text-gray-800">
            Send a Message
          </h2>

          <div className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-400"
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-400"
              required
            />

            <textarea
              name="message"
              placeholder="Your Message..."
              rows={5}
              value={form.message}
              onChange={handleChange}
              className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-400"
              required
            />

            <button
              type="submit"
              className="w-full py-3 bg-orange-500 text-white rounded-xl font-medium hover:bg-orange-600 transition"
            >
              Send Message 🚀
            </button>
          </div>
        </form>
  )
}

export default Form
