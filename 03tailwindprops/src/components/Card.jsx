import React from 'react'

function Card() {
    //console.log(props);
    let myObj = {
        name: "Simon",
        age: 24,
        job: "IT Engineer"
    }
  return (
    <div>
        <figure className="bg-slate-100 rounded-l p-8 dark:bg-slate-800">
            <img className="w-24 h-24 rounded-full mx-auto" src="https://cdn.pixabay.com/photo/2012/04/11/14/06/joker-28361_1280.png" alt="" width="384" height="512"/>
            <div className="pt-6 space-y-4">
                <blockquote>
                <p className="text-lg font">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt ipsam necessitatibus pariatur consequuntur!
                </p>
                </blockquote>
                <figcaption className='font-medium'>
                <div className='text-sky-500 dark:text-sky-400'>
                    {myObj.name} {" "} {myObj.age}
                </div>
                <div className='text-slate-700 dark:text-slate-500'>
                    {myObj.job}
                </div>
                </figcaption>
            </div>
        </figure>
    </div>
  )
}

export default Card 