"use client";
import { useState } from "react";

function page() {
  const [showForm, setShowForm] = useState(false);

  const onSubmits = (e) => {
    e.preventDefault();
    setShowForm(true);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Welcome dashboard</h1>
      <div className="flex items-center justify-center mt-4">
        <form onSubmit={onSubmits}>
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
            Create Profile
          </button>
        </form>
      </div>

      {showForm && (
        <div className="mt-6 p-6 border rounded shadow-lg bg-white">
          <h2 className="text-xl font-bold text-teal-600">Create Your Profile</h2>
          <p>Let's get some information to make your profile</p>
          <form className="mt-4">
            <select className="block w-full p-2 border rounded">
            <option>Select Professional nebnfbnsndndadssssus</option>
              <option>Select Professional sdhgghjskhgfghjkjhg</option>
              <option>Select Professional sdhgfghjsdfdfkjhgfghjkghjskhgfghjkjhg</option>
              <option>Select Professional sdhgfghjsdfdfkjhgfghjkghjskhgfghjkjhg</option>
            </select>
            <input type="text" placeholder="Company" className="block w-full p-2 mt-2 border rounded" />
            <input type="text" placeholder="Website" className="block w-full p-2 mt-2 border rounded" />
            <input type="text" placeholder="Location" className="block w-full p-2 mt-2 border rounded" />
            <input type="text" placeholder="Skills" className="block w-full p-2 mt-2 border rounded" />
            <input type="text" placeholder="Github Username" className="block w-full p-2 mt-2 border rounded" />
            <textarea placeholder="A short bio of yourself" className="block w-full p-2 mt-2 border rounded"></textarea>
            <button type="submit" className="bg-teal-500 text-white px-4 py-2 mt-4 rounded">
              Submit
            </button>
            <button  type="submit" className="bg-blue-500 text-white px-4 py-2 mt-4 rounded">go back</button>
          </form>
        </div>
      )}
    </div>
  );
}

export default page;
