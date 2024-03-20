export default function Posts() {
    return (
        <div className="w-full mt-5 bg-white flex items-center flex-col shadow-2xl rounded-lg overflow-hidden">
            <img
                className="w-full object-cover object-center"
                src="https://haycafe.vn/wp-content/uploads/2022/01/Hinh-nen-vu-tru-khong-gian-sao-tho-vo-cung-ky-vi.jpg"
                alt="user"
            />
            <div className="w-full px-5 pb-2 pt-5 border-b border-r border-l border-[#FF3F80] rounded-b-lg">
                <div>
                    <div className="flex gap-3">
                        <img
                            className="cursor-pointer w-10 h-10 rounded-full object-cover object-center"
                            src="https://images.hdqwalls.com/wallpapers/bthumb/satoru-gojo-28.jpg"
                            alt="user"
                        />
                        <div className="flex flex-col justify-between">
                            <h1 className="leading-none text-md text-[#3E50B4]">Phan Bá Nhất</h1>
                            <span className="flex items-center gap-2 text-hint text-xs">1 giờ trước</span>
                        </div>
                    </div>
                </div>
                <div className="mt-2 mb-3">
                    <span className="font-normal text-secondary text-sm">
                        Tôi vừa đăng cái quái gì thì tôi hỏng biết !
                    </span>
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
