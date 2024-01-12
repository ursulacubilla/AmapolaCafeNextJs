
const SobreNosotros = () => {
    return(
        <>
        <h2 className='text-4xl font-semibold text-[#c57b57] pb-5 pt-20'>Sobre Nosotros</h2>

        <div className='h-px w-full bg-black'></div>

        <div className='flex justify-around flex-row sm:flex-col md:flex-col lg:flex-row'>
        <div className='text-left w-2/5 sm:w-full md:w-2/5'>
        <h2 className='text-2xl font-semibold text-[#c57b57] text-center tracking-wide pt-8 mb-5'>Nuestra Historia</h2>

        <p className="leading-loose text-sm font-sans">
        Desde nuestros humildes inicios en 2009, Amapola Café ha sido un faro en el mundo del café de especialidad. Fundada por un grupo de amantes del café con una visión común, nuestra misión siempre ha sido clara: llevar la excelencia en el café a cada taza.
        </p>
        <p className="mt-5 leading-loose text-sm font-sans">
        A lo largo de los años, hemos establecido relaciones directas con fincas cafetaleras en las regiones más destacadas del mundo. Esto nos permite seleccionar granos de la más alta calidad y apoyar a comunidades locales en el proceso. Nuestros tostadores, con años de experiencia perfeccionan cada lote, resaltando los perfiles de sabor únicos de cada origen.
        </p>
        </div>

        <div className='text-left w-4/5 sm:w-full md:w-2/5'>
        <h2 className='text-2xl font-semibold text-[#c57b57] text-center tracking-wide pt-8 mb-5'>Nuestra Compromiso con el Planeta</h2>
        
        <p className="leading-loose text-sm font-sans">
        En Amapola, valoramos la sostenibilidad y la responsabilidad social. Nos esforzamos por operar de manera ética y sostenible, desde la fuente de nuestros granos hasta la taza que servimos. Colaboramos con agricultores comprometidos con prácticas agrícolas respetuosas con el medio ambiente y apiyamos proyectos que benefician a las comunidades cafetaleras.
        </p>
        <p className="mt-5 leading-loose text-sm font-sans">
        Además, buscamos crear un espacio acogedor y abierto donde los amantes del café puedan reunirse, aprender y explorar juntos. Nuesto equipo de baristas apasionados está siempre dispuesto a compartir su conocimiento y guiar a los clientes en su viaje de descubrimiento del café.
        </p>
        </div>

        </div>
        </>
    )
}

export default SobreNosotros;