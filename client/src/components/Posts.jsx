import { FaEarthAfrica } from 'react-icons/fa6';
import { AiFillLike } from 'react-icons/ai';
import { FaComment } from 'react-icons/fa';
import { FaShare } from 'react-icons/fa';

export default function Posts() {
    return (
        <div className="w-full mt-5 overflow-hidden bg-white flex items-center flex-col shadow-2xl rounded-xl">
            <img
                className="w-full object-cover object-center"
                src="https://haycafe.vn/wp-content/uploads/2022/01/Hinh-nen-vu-tru-khong-gian-sao-tho-vo-cung-ky-vi.jpg"
                alt="user"
            />
            <div className="w-full px-5 pb-3 mt-3">
                <div>
                    <div className="flex gap-3">
                        <img
                            className="cursor-pointer w-10 h-10 rounded-full object-cover object-center flex-1bg-white"
                            src="https://images.hdqwalls.com/wallpapers/bthumb/satoru-gojo-28.jpg"
                            alt="user"
                        />
                        <div className="flex flex-col justify-between">
                            <h1 className="leading-none font-semibold">Phan Bá Nhất</h1>
                            <span className="flex items-center gap-2 text-gray-500 text-sm">
                                1 giờ trước <FaEarthAfrica />
                            </span>
                        </div>
                    </div>
                </div>
                <div className="mt-2 mb-3">
                    <span className="font-normal">Tôi vừa đăng cái quái gì thì tôi hỏng biết !</span>
                </div>
                <ul className="w-full flex justify-between border-dotted border-t-2 border-gray-400 pt-2">
                    <li className="ease-in active:scale-x-125 duration-200 flex-1 py-1 rounded-md flex justify-center items-center gap-2 text-gray-600 cursor-pointer hover:bg-slate-100">
                        10
                        <AiFillLike />
                        Like
                    </li>
                    <li className="ease-in active:scale-x-125 duration-200 flex-1 py-1 rounded-md flex justify-center items-center gap-2 text-gray-600 cursor-pointer hover:bg-slate-100">
                        10
                        <FaComment />
                        Comment
                    </li>
                    <li className="ease-in active:scale-x-125 duration-200 flex-1 py-1 rounded-md flex justify-center items-center gap-2 text-gray-600 cursor-pointer hover:bg-slate-100">
                        10
                        <FaShare />
                        Share
                    </li>
                </ul>
            </div>
        </div>
    );
}
