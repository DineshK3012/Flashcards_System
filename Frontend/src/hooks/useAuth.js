import { useRecoilState } from 'recoil';
import { authAtom } from '../recoil/authAtom';
import { login, logout, loadUser, register } from '../api/auth';
import { toast } from 'react-toastify';

const useAuth = () => {
    const [auth, setAuth] = useRecoilState(authAtom);

    const handleLogin = async (credentials) => {
        try {
            const { data } = await login(credentials);
            setAuth({ isAuthenticated: true, user: data.user });
            toast.success("Login successful!");
        } catch (error) {
            toast.error(`Login failed!: ${error.message}`);
        }
    };

    const handleLogout = async () => {
        try {
            await logout();
            setAuth({ isAuthenticated: false, user: null });
            toast.success("Logout successful!");
        } catch (error) {
            toast.error(`Login failed!: ${error.message}`);
        }
    };

    const handleRegister = async (userData) => {
        try {
            const { data } = await register(userData);
            setAuth({ isAuthenticated: true, user: data.user });
            toast.success("Registration successful!");
        } catch (error) {
            toast.error("Registration failed!: ", error.message);
        }
    };

    const loadCurrentUser = async () => {
        try {
            const { data } = await loadUser();
            setAuth({ isAuthenticated: true, user: data.user });
        } catch (error) {
            setAuth({ isAuthenticated: false, user: null });
        }
    };

    return { auth, handleLogin, handleLogout, handleRegister, loadCurrentUser };
};

export default useAuth;
