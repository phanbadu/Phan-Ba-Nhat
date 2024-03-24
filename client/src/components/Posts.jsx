import moment from 'moment';
import { Link } from 'react-router-dom';

export default function Posts({ post }) {
    return (
        <div className="w-full mt-5 bg-white flex items-center flex-col shadow-2xl rounded-lg overflow-hidden">
            {post.image && <img className="w-full h-96 object-cover object-center" src={post.image} alt="post" />}
            <div className="w-full px-5 pb-2 pt-5 border-b border-r border-l border-[#FF3F80] rounded-b-lg">
                <div>
                    <div className="flex gap-3">
                        <Link to={`/profile/${post.userId}`}>
                            <img
                                className="cursor-pointer w-10 h-10 rounded-full object-cover object-center"
                                src={post.profilePicture}
                                alt="user"
                            />
                        </Link>
                        <div className="flex flex-col justify-between">
                            <Link to={`/profile/${post.userId}`}>
                                <h1 className="hover:underline leading-none text-md text-[#3E50B4]">{post.username}</h1>
                            </Link>
                            <span className="flex items-center gap-2 text-hint text-xs">
                                {`${moment(post.createdAt).fromNow()}`}
                            </span>
                        </div>
                    </div>
                </div>
                <div className="mt-2 mb-3">
                    <span className="font-normal text-secondary text-sm">{post.content}</span>
                </div>
                <ul className="text-sm w-full flex justify-between border-t border-[#3E50B4] pt-2">
                    <li className="ease-in active:scale-x-125 duration-200 flex-1 py-1 rounded-md flex justify-center items-center gap-2 cursor-pointer hover:bg-[#FF3F80] hover:text-white">
                        10 Like
                    </li>
                    <li className="ease-in active:scale-x-125 duration-200 flex-1 py-1 rounded-md flex justify-center items-center gap-2 cursor-pointer hover:bg-[#FF3F80] hover:text-white">
                        10 Comment
                    </li>
                    <li className="ease-in active:scale-x-125 duration-200 flex-1 py-1 rounded-md flex justify-center items-center gap-2 cursor-pointer hover:bg-[#FF3F80] hover:text-white">
                        10 Share
                    </li>
                </ul>
            </div>
        </div>
    );
}
