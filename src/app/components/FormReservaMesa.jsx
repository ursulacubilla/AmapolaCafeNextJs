'use client'
import { useFormState } from 'react-dom'
import { useState } from 'react'

const FormReservaMesa = () => {
    //  const initialState = {
    //     message: null
    //   }
    //   const [state, formAction] = useFormState(testService, initialState)

    return (
        <div className="mt-[70px] content-center">
            <form className="w-[500px] sm:w-[500px] md:w-[500px] m-auto">
                <label htmlFor="nombre" className="mt-5">Nombre:</label>
                <input id="nombre" type="text" required name="nombre" className="shadow appearance-none border border-[#c57b57] rounded w-[500px] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-[15px] lg:w-[500px]" placeholder="Nombre"/>

                <label htmlFor="email" className="mt-5">Correo Electrónico:</label>
                <input id="email" type="email" required name="email" className="shadow appearance-none border border-[#c57b57] rounded w-[500px] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-[15px] lg:w-[500px]" placeholder="Email" />

                <label htmlFor="fechaReserva" className="mt-5">Fecha de Reserva:</label>
                <input id="fechaReserva" type="date" required name="fechaReserva" className="shadow appearance-none border border-[#c57b57] rounded w-[500px] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-[15px] lg:w-[500px]" />

                <label htmlFor="horaReserva" className="mt-5">Hora de Reserva:</label>
                <input id="horaReserva" type="time" required name="horaReserva" className="shadow appearance-none border border-[#c57b57] rounded w-[500px] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-[15px] lg:w-[500px]" />

                <label htmlFor="cantidadComensales" className="mt-5">Cantidad de comensales:</label>
                <input id="cantidadComensales" type="number" required name="cantidadComensales" className="shadow appearance-none border border-[#c57b57] rounded w-[500px] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-[15px] lg:w-[500px]" placeholder="Cantidad de comensales" />

                <label className="mt-5">
                    <input type="checkbox" required className=" mr-[15px]" />
                    <b>Aceptar políticas</b>
                </label>
                <br></br>
                <div className="text-center">
                    <button type="submit" className="mt-[30px] w-[200px] h-[40px] bg-[#f1ab86] border border-[#c57b57] rounded font-[15px] mb-[30px]">Enviar reserva</button>
                </div>
            </form>
        </div>
    )
}

export default FormReservaMesa;