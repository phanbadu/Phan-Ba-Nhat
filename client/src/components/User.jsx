import { FaFacebook, FaInstagramSquare, FaTwitter, FaYoutube } from 'react-icons/fa';
import { BsTelegram } from "react-icons/bs";
import { useSelector } from 'react-redux';
import { signoutSuccess } from '../redux/user/userSlice';
import { useDispatch } from 'react-redux';
import { FaSignOutAlt } from "react-icons/fa";

export default function User() {
    const { currentUser } = useSelector(state => state.user);
    const dispatch = useDispatch();

    const handleSignout = async () => {
        try {
            const res = await fetch("/api/user/signout", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            const data = await res.json();

            if (!res.ok) {
                console.log(data.message);
            } else {
                dispatch(signoutSuccess());
            }
        } catch (error) {
            console.log(error.message);
        }
    }

    return (
        <div className="w-full relative bg-white flex items-center flex-col p-12 shadow-2xl rounded-xl">
            <img
                className="w-20 h-20 rounded-full object-cover object-center"
                src={currentUser.profilePicture}
                alt={currentUser.username}
            />
            <h2 className="font-semibold text-3xl mt-4 text-[#3E50B4]">{currentUser.username}</h2>
            <h3 className="font-medium mt-1 text-md text-secondary">{currentUser.story}</h3>
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
            <FaSignOutAlt onClick={handleSignout} className='hover:scale-125 absolute ease-in duration-200 cursor-pointer bottom-10 right-10 text-4xl text-[#FF3F80]' />
        </div>
    );
}
