"use client";

import { useState } from "react";

const ContactComponent = () => {
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name.length || !form.email.length || !form.message.length)
      return null;
    setLoading(true);
    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Samuel Ayinde",
          from_email: form.email,
          to_email: "sasamuelayinde@gmail.com",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          toast.success(
            "Thank you. I will get back to you as soon as possible",
            {
              duration: 5000,
            }
          );
          setForm({
            name: "",
            email: "",
            subject: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          toast.error("Error, Unable to send message try again");
        }
      );
  };

  const handleChange = (e) => {
    setForm((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  return (
    <div className="shadow bg-white rounded p-1">
      <h4 className="lead my-1 text-radial fs-2 fw-bolder">Get in touch</h4>

      <form>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Name"
          required
          className="form-control my-1"
        />
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          required
          placeholder="Email"
          className="form-control my-1"
        />
        <input
          type="text"
          name="subject"
          value={form.subject}
          onChange={handleChange}
          placeholder="Subject"
          className="form-control my-1"
        />
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          className="form-control my-1"
          placeholder="Message"
          required
          rows="5"
        ></textarea>
        {/* <button onClick={handleSubmit} className="btn btn-primary mt-1"> */}
        <a
          className="btn btn-primary mt-1 px-3"
          href={`mailto:sasamuelayinde@gmail.com?subject=${encodeURI(
            form.subject
          )}&body=${encodeURI(
            form.message
          )}%0D%0A%0D%0ACheers%2C%0D%0AThank%20You`}
        >
          Send
        </a>
        {/* {loading ? (
        <span
          className="spinner-border spinner-border-sm mx-1"
          role="status"
          aria-hidden="true"
        ></span>
      ) : null} */}
        {/* </button> */}
      </form>
    </div>
  );
};

export default ContactComponent;
