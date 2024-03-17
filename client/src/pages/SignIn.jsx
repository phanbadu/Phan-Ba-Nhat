import { Link } from 'react-router-dom';

export default function SignIn() {
    
    return (
        <div className="w-full flex items-center justify-center h-dvh bg-slate-400">
            <form className="w-96 h-96 bg-white flex items-center justify-center flex-col gap-5 p-12 shadow-2xl rounded-xl">
                <input
                    class="w-full px-4 py-2 text-md outline-none rounded-md border-dashed border-2 border-indigo-600"
                    placeholder="Email"
                    type="email"
                />
                <input
                    class="w-full px-4 py-2 text-md outline-none rounded-md border-dashed border-2 border-indigo-600"
                    placeholder="Password"
                    type="password"
                />
                <button
                    type="submit"
                    className="w-full text-center px-4 py-2 font-semibold text-md rounded-md border-dashed border-2 border-indigo-600"
                >
                    Sing In
                </button>
                <Link to="/sign-up" className="underline text-blue-400">
                    Sign up
                </Link>
            </form>
        </div>
    );
}
