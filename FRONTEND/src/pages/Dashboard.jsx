import React from "react";

const Dashboard = () => {
  return (
    <section className="min-h-screen px-6 py-12">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">
          Dashboard
        </h1>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="border rounded-xl shadow-sm p-6">
            <h2 className="text-xl font-semibold mb-2">Courses</h2>
            <p className="text-sm">
              View and manage your enrolled courses.
            </p>
          </div>

          <div className="border rounded-xl shadow-sm p-6">
            <h2 className="text-xl font-semibold mb-2">Progress</h2>
            <p className="text-sm">
              Track your learning progress and achievements.
            </p>
          </div>

          <div className="border rounded-xl shadow-sm p-6">
            <h2 className="text-xl font-semibold mb-2">Settings</h2>
            <p className="text-sm">
              Customize your profile and preferences.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;