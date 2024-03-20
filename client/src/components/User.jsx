import { FaFacebook, FaInstagramSquare, FaTwitter, FaYoutube } from 'react-icons/fa';
import { BsTelegram } from "react-icons/bs";

export default function User() {
    return (
        <div className="w-full bg-white flex items-center flex-col p-12 shadow-2xl rounded-xl">
            <img
                className="w-20 h-20 rounded-full object-cover object-center"
                src="https://images.hdqwalls.com/wallpapers/bthumb/satoru-gojo-28.jpg"
                alt="user"
            />
            <h2 className="font-semibold text-3xl mt-4 text-[#3E50B4]">Phan Bá Nhất</h2>
            <h3 className="font-medium mt-1 text-md text-secondary">story</h3>
            <ul className="flex mt-5 gap-4 text-hint">
                <li>
                    <FaFacebook />
                </li>
                <li>
                    <FaInstagramSquare />
                </li>
                <li>
                    <BsTelegram />
                </li>
                <li>
                    <FaTwitter />
                </li>
                <li>
                    <FaYoutube />
                </li>
            </ul>
        </div>
    );
}
