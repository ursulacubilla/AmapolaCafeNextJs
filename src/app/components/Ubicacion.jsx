

const Ubicacion = () => {
    return (
        <>

            <section className="flex flex-wrap justify-center sm:flex-wrap">
                <h2 className='text-4xl font-semibold text-[#c57b57] pb-5 '>Ubicación</h2>

                <div className='h-px w-full bg-black mb-[40px]'></div>

                <div className="w-[750px] h-[450px] bg-[url('/header.jpg')] sm:h-[450px] sm:w-[600px]">
                </div>
                <div>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d748.1230481623736!2d2.1752519696371233!3d41.40683319820611!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a4a2db6b007995%3A0x6ccce958022d533!2sC%2F%20de%20Padilla%2C%20266%2C%2008025%20Barcelona!5e0!3m2!1sen!2ses!4v1698573340399!5m2!1sen!2ses" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title="Mapa"></iframe>
                </div>
            </section>
        </>
    )
}

export default Ubicacion;