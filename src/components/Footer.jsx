import {
  AiOutlineHeart,
  AiFillLinkedin,
  AiFillFacebook,
  AiFillInstagram,
  AiFillMail,
} from "react-icons/ai";
export default function Footer() {
  return (
    <footer className="mb-2">
      <div>
        <p className="borelType flex justify-center md:text-xl text-[#3F7EA1]">
          Hecho con{" "}
          <span className="px-2 text-[#D99951] animate-bounce">
            {" "}
            <AiOutlineHeart />
          </span>{" "}
          por Indra Lima
        </p>
      </div>
      <div className="mt-4 flex flex-col text-center">
        <span className="text-lg font-bold text-[#071C3B]">Contacto</span>
        <div className="text-[#071C3B] flex justify-between p-2 w-1/4 border border-[#3F7EA1] rounded-lg m-auto mt-2">
          <AiFillLinkedin />
          <AiFillFacebook />
          <AiFillInstagram />
          <AiFillMail />
        </div>
      </div>
    </footer>
  );
}
