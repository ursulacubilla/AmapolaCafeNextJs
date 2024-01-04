
const NuestrasCreaciones = () => {
    return(
        <>
        <h2 className='text-4xl font-semibold text-[#c57b57] pb-5 pt-20'>Nuestras Creaciones</h2>

        <div className='h-px w-full bg-black'></div>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 mt-8'>
        <div className="w-[250px] h-[300px]">
          <img src='/dostazasdecafe.jpg' className="object-cover w-full h-full" />
        </div>
        <div className="w-[250px] h-[300px]">
          <img src='/budindefrutosrojos.jpg' className="object-cover w-full h-full" />
        </div>
        <div className="w-[250px] h-[300px]">
          <img src='/especialidadCafe.jpg' className="object-cover w-full h-full" />
        </div>
        <div className="w-[250px] h-[300px]">
          <img src='/mufindechocolate.jpg' className="object-cover w-full h-full" />
        </div>
        <div className="w-[250px] h-[300px]">
          <img src='/pasteldechocolate.jpg' className="object-cover w-full h-full" />
        </div>
        <div className="w-[250px] h-[300px]">
          <img src='/cafeespecial.jpg' className="object-cover w-full h-full" />
        </div>
        <div className="w-full h-[300px]">
          <img src='/cafeteria.jpg' className="object-cover w-full h-full" />
        </div>
      </div>
        </>
    )
}

export default NuestrasCreaciones;