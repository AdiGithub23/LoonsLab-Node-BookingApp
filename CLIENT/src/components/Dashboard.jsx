import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Dashboard = ({ token }) => {
    const [userMe, setUserMe] = useState(null);
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchMe = async () => {
            try {
                const response = await axios.get('http://localhost:5000/users/me', {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                setUserMe(response.data.user);
            } catch (error) {
                console.error(error);
            }
        };

        const fetchAllUsers = async () => {
            try {
                const response = await axios.get('http://localhost:5000/users/allUsers');
                setUsers(response.data.users);
                console.log(response.data.users)
            } catch (error) {
                console.error(error);
            }
        };

        fetchMe();
        fetchAllUsers();
    }, [token]);

    if (!userMe) return <div>Loading...</div>;

    return (
        <div className="container mx-auto p-4">
            <div className="bg-white shadow-lg rounded-lg p-6 mb-6">
                <h2 className="text-2xl font-bold mb-4">Dashboard</h2>
                <div className="flex items-center space-x-4 mb-4">
                    <img
                        src={userMe.picture}
                        alt="Profile"
                        className="w-24 h-24 rounded-full object-cover bg-slate-500"
                    />
                    <div className="space-y-2">
                        <div className="flex">
                            <span className="w-40 font-semibold text-gray-700">First Name</span>
                            <span className="text-gray-900">: {userMe.firstName}</span>
                        </div>
                        <div className="flex">
                            <span className="w-40 font-semibold text-gray-700">Last Name</span>
                            <span className="text-gray-900">: {userMe.lastName}</span>
                        </div>
                        <div className="flex">
                            <span className="w-40 font-semibold text-gray-700">Mobile Number</span>
                            <span className="text-gray-900">: {userMe.mobileNumber}</span>
                        </div>
                        <div className="flex">
                            <span className="w-40 font-semibold text-gray-700">Email</span>
                            <span className="text-gray-900">: {userMe.email}</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-white shadow-lg rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4">All Registered Users</h3>
                <ul className="space-y-2">
                    {users.map((user, index) => (
                        <li key={index} className="p-2 bg-gray-100 rounded-md flex items-center space-x-4">
                            <img src={user.picture} alt="Profile" className="w-10 h-10 rounded-full object-cover bg-slate-500" />
                            <span> </span>
                            {user.firstName} {user.lastName}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Dashboard;
