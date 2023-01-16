import React from 'react'

export const CardYourProjects = () => {
  return (
    <div className="col-span-1 md:col-span-2 flex flex-col justify-between">
            <h1 className="text-2xl font-bold mb-8">Your projects</h1>
            <div className="bg-white p-8 rounded-xl shadow-2xl">
              <div className="flex items-center gap-4 mb-8">
                <img
                  src="https://img.freepik.com/foto-gratis/retrato-mujer-mayor-cerca_23-2149207185.jpg"
                  className="w-14 h-14 object-cover rounded-full"
                />
                <div>
                  <h3 className="font-bold">Logo design for Bakery</h3>
                  <p className="text-gray-500">1 day remaining</p>
                </div>
              </div>
              <div className="flex items-center gap-4 mb-4">
                <img
                  src="https://img.freepik.com/foto-gratis/retrato-mujer-mayor-cerca_23-2149207185.jpg"
                  className="w-14 h-14 object-cover rounded-full"
                />
                <div>
                  <h3 className="font-bold">Logo design for Bakery</h3>
                  <p className="text-gray-500">1 day remaining</p>
                </div>
              </div>
              <div className="flex justify-end">
                <a
                  href="#"
                  className="hover:text-primary-100 transition-colors hover:underline"
                >
                  See all projects
                </a>
              </div>
            </div>
          </div>
  )
}
