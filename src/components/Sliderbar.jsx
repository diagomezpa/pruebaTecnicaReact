import React , {useState}from 'react'
import { RiFileCopyLine, RiHome3Line, RiPieChartLine, RiWalletLine, RiMore2Fill } from "react-icons/ri";


export const Sliderbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleShowMenu = () => {

    
    setShowMenu(!showMenu);
    
  }

  return (
   <>
     <div className={`bg-primary-900 h-full fixed xl:static w-[80%] md:w-[40%] lg:w-full first-line:top-0 transition-all z-50 duration-300
          ${showMenu ? "left-0" : "-left-full"}`}>
        {/*profile*/}
        <div className='flex flex-col items-center justify-center p-8 gap-2 h-[30vh]'>
            <img 
                src="https://img.freepik.com/foto-gratis/anciano-sonriente-gafas_23-2148740051.jpg?w=740&t=st=1673812507~exp=1673813107~hmac=ac70351a24abee4e5e3ee7e9cdaa70b7393039f0e1678be78420ada2f2983fa5"
                className='w-20 h-20 object-cover rounded-full ring-2 ring-gray-300'></img>
            <h1 className='text-xl text-white font-bold '> Diego Gomez</h1>
            <p className='bg-primary-100 py-1 px-3 rounded-full text-white'> Pro level</p>
        </div>
        {/*Nav*/}
        <div className='bg-primary-300 p-8 rounded-tr-[100px] h-[70vh] overflow-y-scroll flex flex-col justify-between gap-8 '>
            <nav className='flex flex-col gap-8'>
                <a
                href='#'
                className='flex items-center gap-4 text-white py-2 px-4 rounded-xl hover:bg-primary-900/50
                transition-colors '
                >
                    <RiHome3Line></RiHome3Line>Home
                </a>
                <a
                href='#'
                className='flex items-center gap-4 text-white py-2 px-4 rounded-xl hover:bg-primary-900/50
                transition-colors '
                >
                    <RiFileCopyLine></RiFileCopyLine>Projects
                </a>
                <a
                href='#'
                className='flex items-center gap-4 text-white py-2 px-4 rounded-xl hover:bg-primary-900/50
                transition-colors '
                >
                    <RiWalletLine></RiWalletLine>Invoices
                </a>
                <a
                href='#'
                className='flex items-center gap-4 text-white py-2 px-4 rounded-xl hover:bg-primary-900/50
                transition-colors '
                >
                    <RiPieChartLine></RiPieChartLine>Reports
                </a>
                
            </nav>
            <div className='bg-primary-900/50 text-white p-4 rounded-xl'>
                <p className='text-gray-400'> Having troubles?</p>
                <a href='#'>Contact us</a>
            </div>
        </div>
    </div>
    <button onClick={handleShowMenu} className='lg:hidden fixed right-4 bottom-4 text-2xl bg-primary-900 p-2.5 rounded-full text-white z-50' >
        <RiMore2Fill></RiMore2Fill>
    </button>
   </>
  )
}
