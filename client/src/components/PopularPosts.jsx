import { AiFillLike } from "react-icons/ai";
import { FaComment } from "react-icons/fa";
import { FaEarthAfrica } from "react-icons/fa6";

export default function PopularPosts() {
    return (
        <div className="w-full bg-white flex items-center flex-col p-6 shadow-2xl rounded-xl">
            <h1 className="font-semibold text-lg">POPULAR POST</h1>
            <div className="w-full mt-6 flex border-b-2 pb-2 border-gray-200">
                <img
                    className="w-20 h-20 rounded-xl object-cover object-center"
                    src="https://images.hdqwalls.com/wallpapers/bthumb/satoru-gojo-28.jpg"
                    alt="postImg"
                />
                <div className="ml-4 flex flex-col gap-5 justify-between">
                    <div>
                        <h3 className="font-semibold text-md leading-none">Phan Bá Nhất</h3>
                        <h4 className="text-sm mt-1 text-gray-600">Nội dung đăng về 1 điều gì đó oke ?</h4>
                    </div>
                    <div className='text-sm flex text-gray-400'>
                        <span className="flex items-center gap-2">
                            10 <AiFillLike />
                        </span >
                        <span className="ml-3 flex items-center gap-2">
                            10 <FaComment />
                        </span>
                        <span className="ml-6 flex items-center gap-2">
                            Đã đăng 1 giờ trước <FaEarthAfrica />
                        </span>
                    </div>
                </div>
            </div>
            <div className="w-full mt-6 flex border-b-2 pb-2 border-gray-200">
                <img
                    className="w-20 h-20 rounded-xl object-cover object-center"
                    src="https://images.hdqwalls.com/wallpapers/bthumb/satoru-gojo-28.jpg"
                    alt="postImg"
                />
                <div className="ml-4 flex flex-col gap-5 justify-between">
                    <div>
                        <h3 className="font-semibold text-md leading-none">Phan Bá Nhất</h3>
                        <h4 className="text-sm mt-1 text-gray-600">Nội dung đăng về 1 điều gì đó oke ?</h4>
                    </div>
                    <div className='text-sm flex text-gray-400'>
                        <span className="flex items-center gap-2">
                            10 <AiFillLike />
                        </span >
                        <span className="ml-3 flex items-center gap-2">
                            10 <FaComment />
                        </span>
                        <span className="ml-6 flex items-center gap-2">
                            Đã đăng 1 giờ trước <FaEarthAfrica />
                        </span>
                    </div>
                </div>
            </div>
            <div className="w-full mt-6 flex border-b-2 pb-2 border-gray-200">
                <img
                    className="w-20 h-20 rounded-xl object-cover object-center"
                    src="https://images.hdqwalls.com/wallpapers/bthumb/satoru-gojo-28.jpg"
                    alt="postImg"
                />
                <div className="ml-4 flex flex-col gap-5 justify-between">
                    <div>
                        <h3 className="font-semibold text-md leading-none">Phan Bá Nhất</h3>
                        <h4 className="text-sm mt-1 text-gray-600">Nội dung đăng về 1 điều gì đó oke ?</h4>
                    </div>
                    <div className='text-sm flex text-gray-400'>
                        <span className="flex items-center gap-2">
                            10 <AiFillLike />
                        </span >
                        <span className="ml-3 flex items-center gap-2">
                            10 <FaComment />
                        </span>
                        <span className="ml-6 flex items-center gap-2">
                            Đã đăng 1 giờ trước <FaEarthAfrica />
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}
