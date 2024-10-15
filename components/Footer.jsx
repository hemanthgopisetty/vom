import React from 'react'

export const Footer = () => {
  return (
    <footer className="bg-violet-900 text-white flex  flex-row justify-between">
        <div className="flex flex-col items-start justify-evenly">
          <h1 className="text-2xl">ParkSpot</h1>
          <p>
            A ParkSpot is a website designed to make finding and reserving
            parking spots easier and more convenient
          </p>
          <p>CopyRight 2024 ParkSpot. All rights reserved</p>
        </div>

        <div className="flex flex-col items-start justify-evenly">
          <h2>Links</h2>
          <p>Home</p>
          <p>About</p>
          <p>Contact us</p>
          <p>Our Team</p>
        </div>
        <div className="flex flex-col items-start justify-evenly">
          <h2>Others</h2>
          <p>Terms of service</p>
          <p>Privacy Ploicy</p>
          <p>Portifolio</p>
          <p>Corporate</p>
          <p>Advertise</p>
        </div>
        <div className="flex flex-col items-start justify-evenly">
          <h2>Others</h2>
          <p>Follow us on social Media</p>
        </div>
      </footer>
  )
}
