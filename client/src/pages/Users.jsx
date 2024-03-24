import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';

export default function Users() {
    const [users, setUsers] = useState(null);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        const fetchUsers = async () => {
            setLoading(true);
            const res = await fetch('/api/user/users');
            const data = await res.json();

            if (res.ok) {
                setLoading(false);
                setUsers(data);
            }
        };
        fetchUsers();
    }, []);
    return (
        <div className="w-full h-full py-10 bg-slate-200 py-3xl">
            <div
                className="
                container 
                m-auto 
                xl:max-w-7xl 
                md:max-w-4xl 
                sm:max-w-xl
                max-w-sm
            "
            >
                <Header />
                <div className="w-full rounded-xl gap-5 mt-5 p-5 bg-white justify-center flex flex-wrap">
                    {loading && (
                        <div className="flex justify-center items-center">
                            <AiOutlineLoading3Quarters className="animate-spin text-md" />
                        </div>
                    )}
                    <div className="w-full grid grid-cols-4 gap-x-4 gap-4 justify-items-center align-items-center">
                        {users &&
                            users.map((user) => (
                                <div key={user._id} className="w-full overflow-hidden shadow-sm shadow-hint rounded-md">
                                    <img
                                        className="w-full h-72 object-cover object-center"
                                        src={user.profilePicture}
                                        alt={user.username}
                                    />
                                    <div className="flex py-4 px-10 text-sm justify-center flex-col gap-4">
                                        <button className="rounded-md hover:scale-105 ease-in duration-200 py-2 bg-[#3E50B4] text-white">
                                            Thêm bạn bè
                                        </button>
                                    </div>
                                </div>
                            ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
