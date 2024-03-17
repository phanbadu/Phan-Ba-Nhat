import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { CiSearch } from 'react-icons/ci';

export default function Header() {
    const location = useLocation();
    const [tab, setTab] = useState('');

    useEffect(() => {
        setTab(location.pathname);
    }, [location.pathname]);

    return (
        <div className="flex justify-between items-center">
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
            <div className="text-xl flex gap-10">
                <div className="flex-1 flex">
                    <input
                        className="bg-white text-sm outline-none w-52 rounded-tl-lg rounded-bl-lg h-full px-2"
                        type="text"
                        placeholder="Search...."
                    />
                    <button className="hover:bg-gray-100 bg-white rounded-tr-lg rounded-br-lg px-4">
                        <CiSearch className="font-semibold" />
                    </button>
                </div>
                <img
                    className="cursor-pointer w-10 h-10 rounded-full object-cover object-center flex-1bg-white"
                    src="https://images.hdqwalls.com/wallpapers/bthumb/satoru-gojo-28.jpg"
                    alt="user"
                />
            </div>
        </div>
    );
}
