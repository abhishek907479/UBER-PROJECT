import React from 'react'

const LocationSearchPanel = (props) => {
    console.log(props)
    
    // sample array for location 
    const locations = [
        "24B, Near BBG cafe , Collage of Engineering Trivandrum , Trivandrum ",
        "  3, Commercial Complex, Hanuman Road",
        "Bhandup Laghu Udyog Mandal, Nr Bhandup Police Station, M D Shah, Bhandup - W"


    ]
  return (
    <div className='mt-5'>

      {/*this is just a sample data */}

      {
        locations.map(function(ele){
            return <div onClick={() => {
                props.setVehiclePanel(true);
                props.setPanelOpen(false)
            }} className='flex gap-4  border-2 p-3 border-gray-50 active:border-black rounded-xl items-center justify-start ml-6 my-4'>
            <h2 className='bg-[#eee] h-8 flex items-center justify-center w-10  rounded-full '><i className="ri-map-pin-fill"></i></h2>
            <h4 className='font-medium'> {ele} </h4>
        </div>
        })
      }






    </div>
  )
}

export default LocationSearchPanel
