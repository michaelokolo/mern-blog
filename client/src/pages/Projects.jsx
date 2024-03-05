import React from 'react';
import CallToAction from '../components/CallToAction';

export default function Projects() {
  return (
    <div
      className="min-h-screen max-w-2xl mx-auto flex 
    justify-center items-center flex-col gap-6 p-3"
    >
      <h1 className="text-3xl font-semibold">Projects</h1>
      <p className="text-justify text-md text-gray-500">
        Welcome to our Project Page, where we bring the world of web development
        to life through hands-on projects! Dive into the exciting realms of
        JavaScript, React, and Next.js as we guide you through engaging
        tutorials and practical exercises. From building interactive web
        applications to mastering advanced frontend techniques, our projects
        offer a dynamic learning experience for developers of all levels. Join
        us on this journey of discovery and innovation as we harness the power
        of modern web technologies to create impactful projects that inspire and
        empower. Let's code, create, and build together!
      </p>
      <CallToAction />
    </div>
  );
}
