import Image from "next/image";

function Avatar({url, className}) {
    return (
        <Image 
        loading='lazy'
        src={url}
        alt='profile pic'
        width={10}
        height={10}
        className={`h-10 rounded-full cursor-pointer transition duration-150 transform hover:scale-110 ${className}`}
        />
            
   
    )
}

export default Avatar
