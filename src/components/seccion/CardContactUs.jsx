import React from 'react'
import {  RiHashtag } from "react-icons/ri";

export const CardContactUs = () => {
  return (
    <div className="bg-primary-900 text-gray-300 p-8 rounded-xl shadow-2xl flex items-center justify-between flex-wrap xl:flex-nowrap gap-8">
              <div>
                <RiHashtag className="text-4xl -rotate-12" />
              </div>
              <div>
                <h5 className="font-bold text-white">Engage with clients</h5>
                <h5>Join slack channel</h5>
              </div>
              <div className="w-full xl:w-auto">
                <button className="bg-primary-100 py-2 px-6 rounded-xl text-white w-full">
                  Join now
                </button>
              </div>
            </div>
  )
}
