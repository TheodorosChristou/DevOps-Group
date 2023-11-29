'use client';


export default function CookieBanner(){
    return (
        <div className={`my-10 mx-auto max-w-max md:max-w-screen-sm
                        fixed bottom-0 left-0 right-0 
                        flex px-3 md:px-4 py-3 justify-between items-center flex-col sm:flex-row gap-4  
                         bg-gray-700 rounded-lg shadow`}>

            <div className='text-center'>
                <p>This website uses cookies to enhance the user experience. By clicking "Agree," you consent to the use of cookies, including the collection of your location data for tracking purposes.</p>
            </div>

            
            <div className='flex gap-2'>
                <button className='bg-gray-900 px-5 py-2 text-white rounded-lg'>Decline</button>
                <button className='bg-gray-900 px-5 py-2 text-white rounded-lg'>Agree</button>
            </div>   
        </div>
    )}