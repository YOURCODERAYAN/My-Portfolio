import React from 'react'

const Type = ({time}) => {
  return (
    <>
        <div className="w-55 bg-cover bg-center flex flex-col pt-3 pb-3 pl-3 pr-3 rounded-2xl"
        
        style={{backgroundImage:"url('/assests/space.jpg')"}}
        >
        Email Copied !!

         <hr className="border1 border-t-2 border-dotted border-white my-1 w-full" />
      <p> DATE & TIME : {time}</p>
        </div>

    </>
  )
}

export default Type