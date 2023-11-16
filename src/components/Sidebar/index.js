import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {

    return (
        <div className={`bg-gray-800 text-white h-full min-w-[300px] top-0 left-0 p-8 transform`}>
            <div>
                <div className="text-2xl font-bold mb-4">Pokemon App</div>
                <ul>
                    <li className="mb-2">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="mb-2">
                        <Link to="/my-pokemon">My Pokemon</Link>
                    </li>
                    {/* Add more links as needed */}
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;