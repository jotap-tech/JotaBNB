import Logo from "../assets/logo.png"

const Header = () => {
  return (
    <>
    <div className="shadow-md">
      <div className="flex max-w-7xl items-center justify-between px-8 py-4 mx-auto ">
        <div className="flex items-center">
        <img 
          src={Logo} 
          alt="Logo" 
          className="h-20"
        />
        <p className="text-2xl font-bold text-primary">JotaBNB</p>

        </div>
        <div className="flex items-center border shadow-md border-gray-300 rounded-full pr-4 pl-6 py-2">
          <p className="pr-4 border-r border-r-gray-300">Qualquer lugar</p>
          <p className="px-4  border-r border-r-gray-300">Qualquer semana</p>
          <p className="px-4">Hóspedes</p>

          <div className="bg-primary p-2 rounded-full text-white">
              <svg xmlns="http://www.w3.org/2000/svg" 
              fill="none" viewBox="0 0 24 24" 
              strokeWidth={1.5} stroke="currentColor" 
              className="size-5">
                <path strokeLinecap="round" 
                strokeLinejoin="round" 
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>
          </div>
          

        </div>
        <div className="flex gap-2 items-center border shadow-md border-gray-300 rounded-full pr-4 pl-6 py-2">
          
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>

          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-7">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
          </svg>


          <p>Joao Pedro</p>
        </div>
      </div>
    </div>
    </>
  )
}

export default Header