import Image from "next/image";

const Banner = () => {
    return(
        <header className="h-[650px] bg-opacity-50 relative">
        <img src="/header.jpg"
        className="h-full w-full object-cover absolute inset-0"
        />
        
        </header>
    )
}

export default Banner;