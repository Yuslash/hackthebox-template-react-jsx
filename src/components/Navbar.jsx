// import React from 'react'

const Navbar = () => {
    const somthing = () =>{
        window.location.href = 'https://accounts.google.com/lifecycle/steps/signup/name?ddm=0&dsh=S655201229:1718808304470510&flowEntry=SignUp&flowName=GlifWebSignIn&TL=AC3PFD78YDrScr6IMP_mforvk-qac2900cMWQqkAu-5KiGWuLoRaUFhuTUmQ8taZ'
    }
  return (
      <div className="w-full bg-custom-dark h-20 flex items-center px-10 text-white">
         <span className="font-bold">HACKTHEBOX</span>
          <div className="flex mx-auto text-custom-text gap-x-2">
              <p>Business</p>
            <p>Hackers</p>
            <p>Industries</p>
            <p>Resources</p>
              <p>Company</p>
         </div>
         <div className="flex gap-x-2">
              <p className="text-custom-text flex place-items-center">Sign In</p>
              <button onClick={somthing} className="text-black bg-custom-green p-3 rounded-sm">Get Started</button>
         </div>
    </div>
  )
}

export default Navbar
