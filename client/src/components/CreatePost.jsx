import { CiImageOn } from 'react-icons/ci';

export default function CreatePost() {
    return (
        <div className="w-full bg-white flex items-center px-6 py-6 flex-col shadow-2xl rounded-xl">
            <div className='cursor-pointer w-full flex justify-around items-center'>
                {/* <input
                    className="w-full outline-offset-2 outline-emerald-900 rounded-md px-5 border-b-2 py-3 bg-gray-100"
                    type="text"
                    placeholder="Bạn đang nghĩ gì?"
                />
                <p className='w-full my-2 border-b-2 border-black'></p> */}
                <span className='text-gray-300'>Ấn vào để đăng một bài viết...</span>
                <CiImageOn className='font-semibold text-2xl' />
            </div>
        </div>
    );
}
