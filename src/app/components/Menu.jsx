
const Menu = () => {
    return (
        <>
            <h2 className='text-4xl font-semibold text-[#c57b57] pb-5'>Menu</h2>

            <div className='h-px w-full bg-black'></div>

            <div className='flex justify-around flex-row sm:flex-col md:flex-col lg:flex-row'>
                <div className='text-left w-2/5 sm:w-full md:w-2/5'>
                    <h2 className='text-2xl font-semibold text-[#c57b57] text-center tracking-wide pt-8 mb-5'>Desayuno (de 8:30 a 10:30am)</h2>
                    <p className='leading-loose text-sm mb-4 font-sans'>Pan con tomate (tostada de pan de masa madre, tomate y aceite de Oliva Extra Virgen)</p>
                    <p className='leading-loose text-sm mb-4 font-sans'>Bikini en pan de molde con Jamon dulce natural y queso edam</p>
                    <p className='leading-loose text-sm mb-4 font-sans'>Bikini Amapola en pan de pages de masa madre con Jamon dulce natural y queso</p>
                    <p className='leading-loose text-sm mb-4 font-sans'>Bocadillo del dia (preguntar en mostrador)</p>
                    <p className='leading-loose text-sm mb-4 font-sans'>Tostadas de pan de pages de masa madre con mantequilla o queso crema y mermelada</p>
                    <p className='leading-loose text-sm mb-4 font-sans'>Budin de frutos rojos</p>
                    <p className='leading-loose text-sm mb-4 font-sans'>Muffins de Chocolate</p>
                </div>

                <div className='text-left w-4/5 sm:w-full md:w-2/5'>
                    <h2 className='text-2xl font-semibold text-[#c57b57] text-center tracking-wide pt-8 mb-5'>Brunch and Lunch</h2>
                    <p className='leading-loose text-sm mb-4 font-sans'><b>Tostada de Hummus:</b> Tostada de pan de masa madre integral con base de Hummus de remolacha de la casa, chips de Kale, mini muzzarella y rabanitos.</p>
                    <p className='leading-loose text-sm mb-4 font-sans'><b>Tostada de Salmon:</b> Tostada de pan de masa madre integral con base de queso crema, rulos de calabacin, salmon ahumado, rayadura de lima y eneldo.</p>
                    <p className='leading-loose text-sm mb-4 font-sans'><b>Tostada de Aguacate:</b> Tostada de pan de masa madre integral, base de aguacate rustico, mix de brotes, queso feta y cebollas encurtidas de la casa.</p>
                    <p className='leading-loose text-sm mb-4 font-sans'><b>American Breakfast:</b> 3 huevos camperos revueltos, con jamon dulce, aguacate y pan de masa madre.</p>
                    <p className='leading-loose text-sm mb-4 font-sans'><b>Huevos Benedictos de Amapola:</b> Base de pan de masa madre con mantequilla especiada, salmon ahumado, dos huevos escalfados bañados en nuestra salsa casera con cebollin y rabanitos acompañados de patatas horneadas.</p>
                </div>
            </div>
        </>
    )
}

export default Menu;