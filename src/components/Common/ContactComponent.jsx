"use client";

import { useState } from "react";
import { Button } from "../UI/Button";
import toast, { Toaster } from "react-hot-toast";
import Api from "@/Api/api";

const ContactComponent = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    if (
      !form.name.trim().length ||
      !form.email.trim().length ||
      !form.message.trim().length ||
      !form.subject.trim().length
    ) {
      setError(true);
      return toast.error("Please fill all required field", {
        duration: 5000,
      });
    }
    setLoading(true);
    try {
      const res = await Api.post("/api/contact", form);
      toast.success("Your message has been sent successfully", {
        duration: 5000,
      });
      setLoading(false);
      setForm({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      setLoading(false);
      setError(true);
      toast.error(
        "Your message was not successfully sent. Please try again later.",
        {
          duration: 5000,
        }
      );
    }
  };

  const handleChange = (e) => {
    const { value, name } = e.target;
    setForm((prev) => {
      return { ...prev, [name]: value };
    });
  };

  return (
    <>
      <Toaster />
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
          <Button
            loading={loading}
            type="submit"
            className="btn btn-primary mt-1 px-5"
            text="Submit"
            func={handleSubmit}
            disabled={loading}
          />
        </form>
      </div>
    </>
  );
};

export default ContactComponent;
