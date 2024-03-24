import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import { IoClose } from 'react-icons/io5';
import { IoSend } from 'react-icons/io5';
import { SlLike } from 'react-icons/sl';
import { MdOutlineModeComment } from 'react-icons/md';
import { PiShareFatLight } from 'react-icons/pi';
import { Link } from 'react-router-dom';
import Comment from './Comment';

export default function Comments({ idPost, setComment }) {
    const [post, setPost] = useState(null);
    useEffect(() => {
        const handleSignout = async () => {
            try {
                const res = await fetch(`/api/post/getpost/${idPost}`);
                const data = await res.json();

                if (res.ok) {
                    setPost(data);
                }
            } catch (error) {
                console.log(error.message);
            }
        };
        handleSignout();
    }, [idPost]);

    return (
        <div
            onClick={() => setComment(false)}
            className="fixed w-full rounded-xl top-0 right-0 left-0 bottom-0 bg-hint flex items-center justify-center "
        >
            {post ? (
                <div
                    onClick={(e) => e.stopPropagation()}
                    className="w-4/12 h-[42rem] relative overflow-hidden bg-white overflow-y-auto scroll-smooth rounded-xl"
                >
                    <div className="border-b py-3 text-xl border-hint w-full sticky top-0 bg-white text-center">
                        Bài viết của <span className="text-[#3E50B4]">{post.username}</span>
                        <IoClose
                            onClick={() => setComment(false)}
                            className="cursor-pointer absolute right-2 top-2 text-4xl hover:scale-105 duration-200 bg-slate-200 rounded-full"
                        />
                    </div>
                    <div className="p-2 w-full bg-white">
                        <div className="flex gap-2">
                            <Link to={`/profile/${post.userId}`}>
                                <img
                                    className="w-12 h-12 object-cover object-center rounded-full"
                                    src={post.profilePicture}
                                    alt={post.username}
                                />
                            </Link>
                            <div>
                                <Link to={`/profile/${post.userId}`}>
                                    <h1 className="text-[#3E50B4] hover:underline">{post.username}</h1>
                                </Link>
                                <span className="text-hint text-xs">{`${moment(post.createdAt).fromNow()}`}</span>
                            </div>
                        </div>
                    </div>
                    <div className="w-full h-96 border-t border-b border-gray-400">
                        <img className="w-full h-full" src={post.image} alt={post.usetname} />
                    </div>
                    <div className="w-full text-sm p-2 border-b flex justify-between border-gray-400">
                        <div>10</div>
                        <ul className="flex gap-5">
                            <li>10 bình luận</li>
                            <li>10 chia sẻ</li>
                        </ul>
                    </div>
                    <div className="flex p-2 text-sm border-b border-gray-400 justify-around">
                        <button className="flex items-center gap-1 text-md hover:scale-110 duration-150 hover:text-regal-blue">
                            <SlLike />
                            Thích
                        </button>
                        <button className="flex items-center gap-1 text-md hover:scale-110 duration-150 hover:text-regal-blue">
                            <MdOutlineModeComment />
                            Bình luận
                        </button>
                        <button className="flex items-center gap-1 text-md hover:scale-110 duration-150 hover:text-regal-blue">
                            <PiShareFatLight />
                            Chia sẻ
                        </button>
                    </div>
                    <Comment />
                    <Comment />
                    <Comment />
                    <Comment />
                    <div className="border-t w-full bg-white p-3 sticky bottom-0 bg text-center">
                        <textarea
                            className="w-full text-sm border rounded-md outline-none pl-1 pr-9 text-secondary"
                            placeholder="Viết bình luận...."
                            rows="3"
                        ></textarea>
                        <IoSend className="absolute top-1/2 right-5 cursor-pointer hover:scale-105 hover:text-regal-blue duration-200 text-2xl text-hint" />
                        {/* <div className="w-full bg-white flex justify-end">
                            <IoSend />
                        </div> */}
                    </div>
                </div>
            ) : (
                <div className="flex justify-center items-center">
                    <AiOutlineLoading3Quarters className="text-white text-4xl animate-spin text-md" />
                </div>
            )}
        </div>
    );
}
