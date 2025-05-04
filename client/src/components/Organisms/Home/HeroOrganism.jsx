import ButtonAtom from "@/components/Atoms/ButtonAtom";
import React from 'react'

function HeroOrganism() {
  return (
    <section className="py-10 md:py-20 px-6 md:px-12 lg:px-20">
    <div className="container mx-auto">
      <div className="flex flex-col md:flex-row items-center">
        {/* Left Content */}
        <div className="w-full md:w-1/2 md:pr-12 mb-10 md:mb-0">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            We create <span className="text-primary">amazing</span><br />
            software.
          </h1>
          <p className="text-gray-600 mb-8 max-w-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet adipiscing nam
            suspendisse et lobortis. Adipiscing auctor lobortis in lorem cursus cursus eget
            duis massa. Diam sem volutpat turpis condimentum.
          </p>
          <ButtonAtom label="KNOW MORE" variant="outline"/>
        </div>
        
        {/* Right Content - 3D Illustration */}
        <div className="w-full md:w-1/2 relative">
          <div className="relative w-full h-[400px] md:h-[500px]">
            {/* Main Character Illustration */}
            <svg
              className="w-full h-full object-contain"
              viewBox="0 0 500 500"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g transform="translate(250, 250)">
                <circle cx="0" cy="0" r="200" fill="#f9f9f9" />
                <g transform="translate(-100, -100)">
                  {/* Stylized character with trophy */}
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 500 500" 
                    className="w-full h-full"
                  >
                    {/* Character */}
                    <g transform="translate(100, 50) scale(0.8)">
                      {/* Head */}
                      <circle cx="150" cy="100" r="50" fill="#FFD6A5" />
                      {/* Face */}
                      <circle cx="135" cy="90" r="5" fill="#333" />
                      <circle cx="165" cy="90" r="5" fill="#333" />
                      <path d="M140,110 Q150,120 160,110" stroke="#333" strokeWidth="2" fill="none" />
                      {/* Hair */}
                      <path d="M100,100 Q150,50 200,100" stroke="#FF9A3C" strokeWidth="40" fill="none" />
                      {/* Body - Yellow Shirt */}
                      <rect x="125" y="150" width="50" height="80" fill="#FFD700" rx="10" />
                      {/* Arms */}
                      <path d="M125,160 Q100,140 90,180" stroke="#FFD6A5" strokeWidth="15" fill="none" />
                      <path d="M175,160 Q200,100 220,130" stroke="#FFD6A5" strokeWidth="15" fill="none" />
                      {/* Purple Pants */}
                      <path d="M125,230 L115,330 Q115,350 135,350 L165,350 Q185,350 185,330 L175,230" fill="#7e3af2" />
                      {/* Red Cape */}
                      <path d="M150,140 Q220,180 250,250" stroke="#FF5252" strokeWidth="25" fill="none" />
                      {/* Trophy */}
                      <g transform="translate(220, 130) scale(0.4)">
                        <path d="M50,0 L150,0 L150,50 Q150,100 100,100 Q50,100 50,50 Z" fill="#FFD700" />
                        <rect x="85" y="100" width="30" height="50" fill="#FFD700" />
                        <rect x="60" y="150" width="80" height="20" fill="#FFD700" />
                      </g>
                    </g>
                  </svg>
                </g>
              </g>
            </svg>
            
            {/* Trophy Graphic */}
            <div className="absolute top-20 right-32 animate-bounce">
              <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
            
            {/* Award Badge */}
            <div className="absolute top-28 right-8">
              <div className="bg-white p-2 rounded-xl shadow-lg flex items-center">
                <div className="bg-yellow-400 rounded-full p-1 mr-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="text-xs font-bold">
                  <span className="text-gray-500 block text-[10px]">Create Best</span>
                  <span className="text-black">Software Solutions</span>
                </div>
              </div>
            </div>
            
            {/* Marketing Award */}
            <div className="absolute bottom-20 left-16">
              <div className="bg-white p-2 rounded-lg shadow-lg flex items-center">
                <div className="bg-yellow-400 rounded-full p-1 mr-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
                <div className="text-xs">
                  <span className="text-gray-500 block text-[8px]">Create Best</span>
                  <span className="text-black font-bold">Website and Application</span>
                </div>
              </div>
            </div>
            
            
            {/* Small Decorative Elements */}
            <div className="absolute top-36 left-16 animate-pulse">
              <div className="w-3 h-3 bg-gray-200 rounded-full"></div>
            </div>
            <div className="absolute bottom-32 right-24 animate-pulse delay-300">
              <div className="w-4 h-4 bg-gray-200 rounded-full"></div>
            </div>
            <div className="absolute bottom-24 right-40 animate-pulse delay-500">
              <div className="w-2 h-2 bg-gray-200 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default HeroOrganism