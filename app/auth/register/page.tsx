'use client'
import InputEmail from "@/components/InputEmail";
import InputPassword from "@/components/InputPassword";
import withGuest from "@/hoc/withGuest";
import { generateUID } from "@/lib/functions";
import { storeUser } from "@/lib/store/slice/sliceAuth";
import { useState } from "react";
import { useDispatch } from "react-redux";

function PageRegister() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch()

    const handleRegister = (e: React.FormEvent) => {
        e.preventDefault();
        if (email && password) {
            // Simulasi register sukses (tanpa autentikasi nyata)
            dispatch(storeUser({
                email,
                password,
                token: generateUID()
            }))
            // router.push('/');
        } else {
            alert('Mohon isi email dan password.');
        }
    };

    return (
        <div className="w-full h-screen bg-gray-100">
            <div className="max-w-screen-xl mx-auto p-4 flex items-center justify-center bg-gray-100 px-4 h-screen">
                <form onSubmit={handleRegister} className="bg-white p-6 rounded shadow-md w-full max-w-sm">
                    <h1 className="text-2xl font-bold mb-6 text-center">Register</h1>

                    <label className="block mb-2 text-sm font-medium text-gray-700">Email</label>
                    <InputEmail
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <label className="block mb-2 text-sm font-medium text-gray-700">Password</label>
                    <InputPassword
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <button
                        type="submit"
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded"
                    >
                        Register
                    </button>
                </form>
            </div>
        </div>
    )
}

export default withGuest(PageRegister)
