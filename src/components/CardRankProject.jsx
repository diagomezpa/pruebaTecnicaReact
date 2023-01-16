import React from 'react'

export const CardRankProject = () => {
  return (
    <div className="p-4 bg-white rounded-xl flex flex-col justify-between gap-4 drop-shadow-2xl">
            <div className="flex items-center gap-4 bg-primary-100/10 rounded-xl p-4">
              <span className="bg-primary-100 text-gray-300 text-2xl font-bold p-4 rounded-xl">
                98
              </span>
              <div>
                <h3 className="font-bold">Rank</h3>
                <p className="text-gray-500">In top 30%</p>
              </div>
            </div>
            <div className="bg-primary-100/10 rounded-xl p-4">
              <div className="flex items-center gap-4 mb-4">
                <span className="bg-primary-100 text-gray-300 text-2xl font-bold p-4 rounded-xl">
                  32
                </span>
                <div>
                  <h3 className="font-bold">Projects</h3>
                  <p className="text-gray-500">8 this month</p>
                </div>
              </div>
              <div className="flex items-center gap-2 text-gray-500 text-sm">
                <span className="bg-primary-100/20 py-1 px-4 rounded-full">
                  Mobile app
                </span>
                <span className="bg-primary-100/20 py-1 px-4 rounded-full">
                  Branding
                </span>
              </div>
            </div>
          </div>
  )
}
