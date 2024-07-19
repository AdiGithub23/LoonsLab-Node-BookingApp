import React, { useState } from 'react';
import Register from './components/Register';
import Login from './components/Login';
import Dashboard from './components/Dashboard';

const App = () => {
    const [token, setToken] = useState(null);
    const [showRegister, setShowRegister] = useState(true);

    if (token) {
        return <Dashboard token={token} />;
    }

    return (
        <div className=" bg-grey-100 flex flex-col items-center justify-center p-5">
            <h1 className="text-3xl font-bold mb-5 text-center">Dispensary Booking System</h1>
            
            {showRegister ? (
                <>
                    <Register />
                    <p className="mt-4">
                        <button 
                            onClick={() => setShowRegister(false)} 
                            className="text-blue-500 hover:underline"
                        >
                            Back to Login
                        </button>
                    </p>
                </>
            ) : (
                <>
                    <Login setToken={setToken} />
                    <p className="mt-4">
                        <button 
                            onClick={() => setShowRegister(true)} 
                            className="text-blue-500 hover:underline"
                        >
                            Need an account? Register here
                        </button>
                    </p>
                </>
            )}
        </div>
    );
};

export default App;


// Email   : adigunx@gmail.com
// Password: Adix@Gunx
