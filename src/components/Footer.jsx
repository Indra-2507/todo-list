import { AiOutlineHeart , AiFillLinkedin, AiFillFacebook, AiFillInstagram, AiFillMail} from "react-icons/ai"
export default function Footer(){
    return(
        <footer className="fixed bottom-0 left-0 w-full z-10">
        <div className="bg-white p-4">
            <p className="borelType flex justify-center text-xl ">Hecho con  <span className="px-2 text-red-600 animate-bounce"> <AiOutlineHeart /></span>  por Indra Lima</p>
        </div>
        <div className="mt-4 flex flex-col text-center">
            <span className="text-lg font-bold">Contacto</span>
            <div className=" flex justify-between p-2 w-1/4 border rounded-lg m-auto mt-2"> 
            <AiFillLinkedin />
            <AiFillFacebook />
            <AiFillInstagram />
            <AiFillMail />
            </div>
           

        </div>
        </footer>
    )
}