import React from 'react'
import style from './Contact.module.css'

export default function Contact() {
  return (
    <div className="mx-auto w-full">
      {/* العنوان */}
      <div className={`${style.contact} px-4 sm:px-6 md:px-10 lg:px-20 text-center`}>
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3">
          Get In Touch With Us
        </h1>
        <p className="text-sm sm:text-base md:text-lg leading-relaxed">
          For More Information About Our Product & Services. Please Feel Free To Drop Us An Email. 
          Our Staff Always Be There To Help You Out. Do Not Hesitate!
        </p>
      </div>

      {/* main items */}
      <div className={`${style.items} flex flex-col md:flex-row gap-10 lg:gap-16 px-4 sm:px-6 md:px-10 lg:px-20 mt-10`}>
        
        {/* left side */}
        <div className="md:w-1/2 w-full flex flex-col gap-6">
          <div className={`${style.left_item} flex flex-col`}>
            <div className="flex items-start">
              <i className="fa-solid fa-location-dot text-blue-600 mt-1"></i>
              <div className="pl-3">
                <span className="font-semibold">Address</span>
                <p className="text-sm sm:text-base mt-1">
                  236 5th SE Avenue, New York NY10000, United States
                </p>
              </div>
            </div>
          </div>

          <div className={`${style.left_item} flex flex-col`}>
            <div className="flex items-start">
              <i className="fa-solid fa-phone text-blue-600 mt-1"></i>
              <div className="pl-3">
                <span className="font-semibold">Phone</span>
                <p className="text-sm sm:text-base mt-1">
                  Mobile: +(84) 546-6789 <br />
                  Hotline: +(84) 456-6789
                </p>
              </div>
            </div>
          </div>

          <div className={`${style.left_item} flex flex-col`}>
            <div className="flex items-start">
              <i className="fa-solid fa-clock text-blue-600 mt-1"></i>
              <div className="pl-3">
                <span className="font-semibold">Working Time</span>
                <p className="text-sm sm:text-base mt-1">
                  Monday-Friday: 9:00 - 22:00 <br />
                  Saturday-Sunday: 9:00 - 21:00
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* right side */}
        <div className={`${style.right} md:w-1/2 w-full`}>
          <div className="mb-5">
            <label htmlFor="text" className="block mb-2 text-sm font-medium text-gray-900">
              Your Name
            </label>
            <input 
              type="text" 
              id="text" 
              className="text-gray-900 text-sm rounded-lg block w-full max-w-xl py-2 px-3 border border-gray-300 focus:ring-blue-500 focus:border-blue-500" 
              placeholder="ABC" required 
            />
          </div>

          <div className="mb-5">
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">
              Your Email
            </label>
            <input 
              type="email" 
              id="email" 
              className="text-gray-900 text-sm rounded-lg block w-full max-w-xl py-2 px-3 border border-gray-300 focus:ring-blue-500 focus:border-blue-500" 
              placeholder="forexample@123" required 
            />
          </div>

          <div className="mb-5">
            <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-900">
              Subject
            </label>
            <input 
              type="text" 
              id="subject" 
              className="text-gray-900 text-sm rounded-lg block w-full max-w-xl py-2 px-3 border border-gray-300 focus:ring-blue-500 focus:border-blue-500" 
              placeholder="This is optional" required 
            />
          </div>

          <div className="mb-5">
            <label htmlFor="Message" className="block mb-2 text-sm font-medium text-gray-900">
              Message
            </label>
            <textarea 
              id="Message" 
              rows="4"
              className="text-gray-900 text-sm rounded-lg block w-full max-w-xl py-2 px-3 border border-gray-300 focus:ring-blue-500 focus:border-blue-500" 
              placeholder="Hi! I'd like to ask about" required 
            />
          </div>
        </div>
      </div>

      {/* button */}
      <div className={`${style.btt} text-center mt-8`}>
        <button className="bg-blue-600 text-white px-6 py-2 sm:px-8 sm:py-3 rounded-lg hover:bg-blue-700 transition text-sm sm:text-base">
          Submit
        </button>
      </div>
    </div>
  )
}
