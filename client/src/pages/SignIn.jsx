import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { signInFailure, signInStart, signInSuccess } from '../redux/user/userSlice';
import { useDispatch } from 'react-redux';

export default function SignIn() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [formData, setFormData] = useState({});

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!formData.email || !formData.password) {
            dispatch(signInFailure('Vui lòng nhập đầy đủ thông tin!'));
        }
        try {
            dispatch(signInStart());
            const res = await fetch('/api/auth/signin', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            const data = await res.json();
            if (data.success === false) {
                dispatch(signInFailure(data.message));
            }
            if (res.ok) {
                dispatch(signInSuccess(data));
                navigate('/');
            }
        } catch (error) {
            dispatch(signInFailure(error.message));
        }
    }

    return (
        <div className="w-full flex items-center justify-center h-dvh bg-gradient-to-r from-blue to-rose">
            <form onSubmit={handleSubmit} className="w-96 h-96 bg-white flex items-center justify-center flex-col gap-5 p-12 shadow-2xl rounded-xl">
                <h1 className='text-xl mb-5 text-green-700 border-b-2 border-green-700'>ĐĂNG NHẬP</h1>
                <input
                    onChange={handleChange}
                    class="focus:border-teal-300 ease-out duration-500 w-full px-4 py-2 text-md outline-none rounded-md border-solid border "
                    placeholder="Nhập email"
                    type="email"
                    id="email"
                />
                <input
                    onChange={handleChange}
                    class="focus:border-teal-300 ease-out duration-500 w-full px-4 py-2 text-md outline-none rounded-md border-solid border "
                    placeholder="Nhập password"
                    type="pasword"
                    id="password"
                />
                <button
                    type="submit"
                    className="w-full hover:bg-[#3E50B4] ease-out duration-200 hover:text-white text-center px-4 py-2 font-semibold text-md rounded-md border "
                >
                    Đăng nhập
                </button>
                <div className="mt-3 text-sm">
                    <span>Bạn chưa có tài khoản ?</span>
                    <Link to="/sign-up" className="hover:underline text-sky-400 ml-2">
                        Đăng ký
                    </Link>
                </div>
            </form>
        </div>
    );
}
