import { FaFacebook, FaInstagramSquare, FaTwitter, FaYoutube } from 'react-icons/fa';
import { BsTelegram } from 'react-icons/bs';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import Posts from './Posts';

export default function ProfileUser() {
    const { id } = useParams();
    const [user, getUser] = useState(null);
    const [posts, getPosts] = useState(null);
    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const res = await fetch(`/api/user/${id}`);
                const data = await res.json();
                if (res.ok) {
                    getUser(data);
                }
            } catch (error) {
                console.log(error.message);
            }
        };
        fetchPosts();
    }, [id]);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const res = await fetch(`/api/post/see/${id}`);
                const data = await res.json();
                if (res.ok) {
                    getPosts(data);
                }
            } catch (error) {
                console.log(error.message);
            }
        };
        fetchPosts();
    }, [id]);

    return (
        <div className="mt-10">
            <div className="w-full relative bg-white flex items-center flex-col p-12 shadow-2xl rounded-xl">
                {user ? (
                    <>
                        {user.profilePicture && user.username && (
                            <img
                                className="cursor-pointer w-20 h-20 rounded-full object-cover object-center"
                                src={user.profilePicture}
                                alt={user.username}
                            />
                        )}
                        {user.username && (
                            <h2 className="font-semibold text-3xl mt-4 text-[#3E50B4]">{user.username}</h2>
                        )}
                        <h3 className="font-medium mt-1 text-md text-secondary">{user.story}</h3>
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
                    </>
                ) : (
                    <div className="flex py-2 justify-center items-center">
                        <AiOutlineLoading3Quarters className="animate-spin text-md" />
                    </div>
                )}
            </div>
            <div className="w-full grid grid-cols-3 gap-x-5 justify-items-center align-items-center relative">
                {posts ? (
                    posts.map((post) => (
                        <div className="w-full" key={post._id}>
                            <Posts key={post._id} post={post} />
                        </div>
                    ))
                ) : (
                    <div className="mt-5">Loading...</div>
                )}
            </div>
        </div>
    );
}
