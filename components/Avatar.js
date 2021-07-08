import Image from "next/image";

function Avatar({url, className}) {
    return (
        <Image 
        src={url}
        alt='profile pic'
        width={60}
        height={60}
        className={`h-10 rounded-full cursor-pointer transition duration-150 transform hover:scale-x-90 ${className}`}
        />
            
   
    )
}

export default Avatar

{/* <Image 
       
        src={url}
        alt='profile pic'
        width={60}
        height={60}
        className={`h-10 rounded-full cursor-pointer transition duration-150 transform hover:scale-110 ${className}`}
        /> */}