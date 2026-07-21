import React from "react";

const Contact = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-12">
      <div className="w-full max-w-3xl border rounded-xl shadow-sm p-8">
        <h1 className="text-4xl font-bold text-center mb-8">
          Contact Us
        </h1>

        <div className="space-y-6 text-lg">
          <div>
            <h2 className="font-semibold">Email</h2>
            <p>contact@example.com</p>
          </div>

          <div>
            <h2 className="font-semibold">Phone</h2>
            <p>+91 98765 43210</p>
          </div>

          <div>
            <h2 className="font-semibold">Address</h2>
            <p>123 Main Street, Your City, India</p>
          </div>

          <div>
            <h2 className="font-semibold">Working Hours</h2>
            <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;