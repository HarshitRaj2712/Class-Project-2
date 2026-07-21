import React from "react";

const About = () => {
  return (
    <section className="max-w-4xl mx-auto px-6 py-12">
      <div className="border rounded-xl shadow-sm p-8">
        <h1 className="text-4xl font-bold text-center mb-6">
          About Us
        </h1>

        <div className="space-y-4 text-lg leading-8">
          <p>
            Welcome to our platform! This page provides information about our
            application and its purpose.
          </p>

          <p>
            We aim to build a clean, responsive, and user-friendly experience
            using React and Tailwind CSS.
          </p>

          <p>
            Explore the available courses, manage your dashboard, and customize
            your experience with the built-in theme toggle.
          </p>

          <p>
            Thank you for visiting our website!
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;