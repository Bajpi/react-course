import React from 'react'
import { Link } from 'react-router-dom'

export default function About() {
  return (
    <div className="py-16 bg-white">
      <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
        <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
          <div className="md:5/12 lg:w-5/12">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP2_oktMjnBYTWSkNCn4WTJC1mJdu1MVgz8A&s"
              alt="image"
            />
          </div>
          <div className="md:7/12 lg:w-6/12">
            <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
              React development is carried out by passionate developers
            </h2>
            <p className="mt-6 text-gray-600">
              Building applications with React is not just a job, but a hobby including innovation and creating user-friendly experiences. Dedicated developers use React to deliver fast, modern, and reliable web solutions.
            </p>
            <p className="mt-4 text-gray-600">
              The React community is constantly growing, sharing knowledge and inspiring each other to build even better projects. Together, we shape the future of web development!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}