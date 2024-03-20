import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { CiSearch } from 'react-icons/ci';
import { useDispatch, useSelector } from 'react-redux';
import { signoutSuccess } from '../redux/user/userSlice';

export default function Header() {
    const dispatch = useDispatch();
    const location = useLocation();
    const [tab, setTab] = useState('');
    const [logout, setLogout] = useState(false);

    const { currentUser } = useSelector(state => state.user);

    useEffect(() => {
        setTab(location.pathname);
    }, [location.pathname]);

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
        <div className="flex justify-between items-center bg-white py-5 px-5 rounded-xl">
            <ul className="flex gap-14 flex-auto gap-90 text-lg font-semibold">
                <Link
                    to="/"
                    className={`${
                        tab === '/' && 'border-b-2 text-[#FF3F80] ease-linear duration-500 border-[#FF3F80] text-primary'
                    } flex items-center px-4 h-10`}
                >
                    <li>Home</li>
                </Link>
                <Link
                    to="/friends"
                    className={`${
                        tab === '/friends' && 'border-b-2 text-[#FF3F80] ease-linear duration-500 border-[#FF3F80] text-primary'
                    } flex items-center px-4 h-10`}
                >
                    <li>Friends</li>
                </Link>
                <Link
                    to="/users"
                    className={`${
                        tab === '/users' && 'border-b-2 text-[#FF3F80] ease-linear duration-500 border-[#FF3F80] text-primary'
                    } flex items-center px-4 h-10`}
                >
                    <li>Users</li>
                </Link>
            </ul>
            <div className="text-xl flex gap-10 relative">
                <div className="flex-1 flex rounded-lg overflow-hidden border border-[#FF3F80]">
                    <input
                        className="bg-white outline-none w-52 text-sm rounded-bl-lg h-full px-2"
                        type="text"
                        placeholder="Tìm kiếm một điều gì đó ?"
                    />
                    <button className="hover:bg-gray-100 bg-white rounded-tr-lg rounded-br-lg px-4">
                        <CiSearch className="font-semibold  text-[#FF3F80]" />
                    </button>
                </div>
                <img
                    onClick={() => setLogout(!logout)}
                    className="cursor-pointer w-10 h-10 rounded-full object-cover object-center flex-1bg-white"
                    src={currentUser.profilePicture}
                    alt={currentUser.username}
                />
                {logout && (
                    <div onClick={handleSignout} className="font-medium ease-in active:scale-x-95 hover:bg-gray-100 absolute top-16 text-sm left-56 py-1 cursor-pointer rounded-md bg-white w-32 text-center">
                        Đăng xuất
                    </div>
                )}
            </div>
        </div>
    );
}
