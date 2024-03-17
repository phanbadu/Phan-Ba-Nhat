import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { CiSearch } from 'react-icons/ci';

export default function Header() {
    const location = useLocation();
    const [tab, setTab] = useState('');
    const [logout, setLogout] = useState(false);

    useEffect(() => {
        setTab(location.pathname);
    }, [location.pathname]);

   

    return (
        <div className="flex justify-between items-center bg-white py-5 px-5 rounded-xl">
            <ul className="flex gap-14 flex-auto gap-90 text-lg font-semibold">
                <Link
                    to="/"
                    className={`${tab === '/' && 'bg-rose-500 rounded-lg text-white'} flex items-center px-4 h-10`}
                >
                    <li>Home</li>
                </Link>
                <Link
                    to="/friends"
                    className={`${
                        tab === '/friends' && 'bg-rose-500 rounded-lg text-white'
                    } flex items-center px-4 h-10`}
                >
                    <li>Friends</li>
                </Link>
                <Link
                    to="/users"
                    className={`${tab === '/users' && 'bg-rose-500 rounded-lg text-white'} flex items-center px-4 h-10`}
                >
                    <li>Users</li>
                </Link>
            </ul>
            <div className="text-xl flex gap-10 relative">
                <div className="flex-1 flex rounded-lg overflow-hidden border-dotted border-2 border-gray-600">
                    <input
                        className="bg-white text-sm outline-none w-52 rounded-bl-lg h-full px-2"
                        type="text"
                        placeholder="Search...."
                    />
                    <button className="hover:bg-gray-100 bg-white rounded-tr-lg rounded-br-lg px-4">
                        <CiSearch className="font-semibold" />
                    </button>
                </div>
                <img
                    onClick={() => setLogout(!logout)}
                    className="cursor-pointer w-10 h-10 rounded-full object-cover object-center flex-1bg-white"
                    src="https://images.hdqwalls.com/wallpapers/bthumb/satoru-gojo-28.jpg"
                    alt="user"
                />
                {logout && (
                    <div className='font-medium ease-in active:scale-x-95 hover:bg-gray-100 absolute top-16 text-sm left-56 py-1 cursor-pointer rounded-md bg-white w-32 text-center'>Đăng xuất</div>
                )}
            </div>
        </div>
    );
}
