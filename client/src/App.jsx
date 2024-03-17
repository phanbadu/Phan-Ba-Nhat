import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Friends from './pages/Friends';
import Users from './pages/Users';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/sign-in" element={<SignIn />} />
                <Route path="/sign-up" element={<SignUp />} />
                <Route path="/friends" element={<Friends />} />
                <Route path="/users" element={<Users />} />
            </Routes>
        </BrowserRouter>
    );
}
