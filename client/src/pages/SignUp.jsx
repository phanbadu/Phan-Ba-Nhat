import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function SignUp() {
    const [formData, setFormData] = useState({});
    const [errorMessage, setErrorMessage] = useState(null);
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData,[e.target.id]: e.target.value.trim() });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!formData.username || !formData.email || !formData.password) {
            return setErrorMessage("Please fill out all fields.");
        }
        try {
            setLoading(true);
            setErrorMessage(null);
            const res = await fetch('/api/auth/signup', {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            const data = await res.json();
            if (data.success === false) {
                setLoading(false);
                return setErrorMessage(data.message);
            }
            setLoading(false);
            if (res.ok) {
                navigate("/sign-in");
            }
        } catch (error) {
            setErrorMessage(error.message);
            setLoading(false);
        }
    }

    return (
        <div className="w-full flex items-center justify-center h-dvh bg-slate-400">
            <form onSubmit={handleSubmit} className="w-96 h-96 bg-white flex items-center justify-center flex-col gap-5 p-12 shadow-2xl rounded-xl">
                <input
                    onChange={handleChange}
                    class="w-full px-4 py-2 text-md outline-none rounded-md border-dashed border-2 border-indigo-600"
                    placeholder="Username"
                    type="text"
                    id="username"
                />
                <input
                    onChange={handleChange}
                    class="w-full px-4 py-2 text-md outline-none rounded-md border-dashed border-2 border-indigo-600"
                    placeholder="Email"
                    type="email"
                    id="email"
                />
                <input
                    onChange={handleChange}
                    class="w-full px-4 py-2 text-md outline-none rounded-md border-dashed border-2 border-indigo-600"
                    placeholder="Password"
                    type="password"
                    id="password"
                />
                <button
                    type="submit"
                    className="w-full text-center px-4 py-2 font-semibold text-md rounded-md border-dashed border-2 border-indigo-600"
                >
                    Sing Up
                </button>
                <Link to="/sign-in" className="underline text-blue-400">Sign in</Link>
            </form>
        </div>
    );
}
