
const FormReservaMesa = () => {
    return(
        <div className="mt-[70px]">
        <form>
            <label htmlFor="nombre">Nombre:</label>
            <input id="nombre" type="text" required name="nombre" className="shadow appearance-none border border-[#c57b57] rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />

            <label htmlFor="nombre">Correo Electrónico:</label>
            <input id="nombre" type="text" required name="nombre" className="shadow appearance-none border border-[#c57b57] rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />

            <label htmlFor="nombre">Fecha de Reserva:</label>
            <input id="nombre" type="date" required name="nombre" className="shadow appearance-none border border-[#c57b57] rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />

            <label htmlFor="nombre">Hora de Reserva:</label>
            <input id="nombre" type="time" required name="nombre" className="shadow appearance-none border border-[#c57b57] rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
            
            <label htmlFor="nombre">Cantidad de comensales:</label>
            <input id="nombre" type="number" required name="nombre" className="shadow appearance-none border border-[#c57b57] rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
            
            <label>
            <input type="checkbox" required/>
            <b>Aceptar políticas</b>
            </label>
        </form>
        </div>
    )
}

export default FormReservaMesa;