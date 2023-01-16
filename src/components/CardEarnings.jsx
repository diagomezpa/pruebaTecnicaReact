import React from 'react';
import { RiLineChartLine, RiHashtag } from "react-icons/ri";

export const CardEarnings = () => {
  return (
    <div className="bg-primary-100 p-8 rounded-xl text-gray-300 flex flex-col gap-6">
            <RiLineChartLine className="text-5xl" />
            <h4 className="text-2xl">Earnings</h4>
            <span className="text-5xl text-white">&euro; 8,350</span>
            <span className="py-1 px-3 bg-primary-300/80 rounded-full">
              + 10% since last month
            </span>
          </div>
  )
}
