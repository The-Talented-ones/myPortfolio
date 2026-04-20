import { useState } from "react";
import "./Contact.css";

interface FormState {
  name: string;
  email: string;
  message: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormState>({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log("Form Submitted:", formData);

    // Later connect to EmailJS or backend
    alert("Message sent successfully!");

    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="contact-section py-5">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="fw-bold">Get In Touch</h2>
          <p className="contact-subtitle">
            Have a project or opportunity? Let’s talk.
          </p>
        </div>

        <div className="row justify-content-center">
          <div className="col-md-8">
            <form onSubmit={handleSubmit} className="contact-form p-4">
              <div className="mb-3">
                <label className="form-label">Name</label>
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Email</label>
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Message</label>
                <textarea
                  name="message"
                  rows={5}
                  className="form-control"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="text-center">
                <button type="submit" className="btn contact-btn px-4">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;