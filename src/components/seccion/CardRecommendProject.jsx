import React from 'react'

export const CardRecommendProject = () => {
  return (
    <div>
            <h1 className="text-2xl font-bold mb-8">Recommended project</h1>
            <div className="bg-white p-8 rounded-xl shadow-2xl mb-8 flex flex-col gap-8">
              <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <img
                    src="https://img.freepik.com/foto-gratis/retrato-mujer-mayor-cerca_23-2149207185.jpg"
                    className="w-14 h-14 object-cover rounded-full"
                  />
                  <div>
                    <h3 className="font-bold">Thomas Martin</h3>
                    <p className="text-gray-500">Updated 10m ago</p>
                  </div>
                </div>
                <div>
                  <span className="bg-primary-100 py-2 px-4 rounded-full text-white">
                    Design
                  </span>
                </div>
              </div>
              <div>
                <h5 className="text-lg font-bold">
                  Need a designer to form branding essentials for my business.
                </h5>
                <p className="text-gray-500">
                  Looking for a talented brand designer to create all the
                  branding materials my new startup.
                </p>
              </div>
              <div className="bg-primary-100/10 flex flex-col md:flex-row items-center justify-between gap-4 py-8 px-4 rounded-lg">
                <div>
                  <sup className="text-sm text-gray-500">&euro;</sup>{" "}
                  <span className="text-2xl font-bold mr-2">8,700</span>
                  <span className="text-sm text-gray-500">/ month</span>
                </div>
                <div>
                  <span className="border border-primary-100 text-primary-100 py-2 px-4 rounded-full">
                    Full time
                  </span>
                </div>
              </div>
            </div>
          </div>
  )
}
