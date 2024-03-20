import { CiImageOn } from 'react-icons/ci';

export default function CreatePost() {
    return (
        <div className="w-full bg-white flex items-center px-6 py-6 flex-col shadow-2xl rounded-xl">
            <div className='cursor-pointer w-full flex items-center justify-evenly'>
                <span className='text-[#FF3F80]'>Ấn vào để đăng một bài viết...</span>
                <CiImageOn className='font-semibold text-2xl mb-1 text-[#FF3F80]' />
            </div> 
        </div>
    );
}
