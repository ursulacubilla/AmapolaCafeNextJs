import Link from "next/link";
import FormReservaMesa from "./FormReservaMesa";

const Contactanos = () => {
   


    return(
        <>
        <h2 className='text-4xl font-semibold text-[#c57b57] pb-5 pt-20'>¡Contactanos y Reserva tu Mesa!</h2>

        <div className='h-px w-full bg-black'></div>

        <div className="w-11/12 flex justify-between sm:flex-col lg:flex-row">
        <div className="sm:ml-0 lg:ml-[100px]">
        <p className="leading-loose text-base font-sans mt-[80px] sm:text-center">
        Representantes o Asesores están disponibles: <br></br>
        Lunes a Viernes 8:00a.m a 8:00p.m.
        <br></br>
        Sábados y domingos: 9:00a.m a 3:00p.m.
        </p>
        <br></br>
        <img src="/contactoimg.png" className="w-[150px] h-[150px] sm:m-auto" />
        </div>

        <FormReservaMesa />
        </div>

        </>
    )
}

export default Contactanos;