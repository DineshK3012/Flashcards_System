import React, { useState, useEffect } from 'react';
import { FaPlus, FaEdit, FaAngleDoubleLeft, FaAngleDoubleRight, FaUser } from 'react-icons/fa';

const DashboardSidebar = ({ onOptionClick, active }) => {
    const [isExpanded, setIsExpanded] = useState(true);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 768) {
                setIsExpanded(false); // Automatically shrink sidebar on mobile
            } else {
                setIsExpanded(true); // Expand sidebar on larger screens
            }
        };

        // Initial check
        handleResize();

        // Adding event listener
        window.addEventListener('resize', handleResize);

        // Cleanup event listener
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className={`bg-white h-screen w-fit border-r-2 transition-all duration-300 flex flex-col`}>
            <div className="p-4 text-gray-500 cursor-pointer" onClick={() => setIsExpanded(!isExpanded)}>
                {isExpanded ? <FaAngleDoubleLeft size={24} /> : <FaAngleDoubleRight size={24} />}
            </div>

            <div className="flex flex-col flex-grow">
                {/*<button*/}
                {/*    className={`flex items-center space-x-2 text-gray-800 p-4 ${active === 0 ? 'bg-gray-100': ''}  hover:bg-gray-100`}*/}
                {/*    onClick={() => onOptionClick(0)}*/}
                {/*>*/}
                {/*    <FaUser size={20}/>*/}
                {/*    {isExpanded && <span>Edit Users</span>}*/}
                {/*</button>*/}
                <button
                    className={`flex items-center space-x-2 text-gray-800 p-4 ${active === 1 ? 'bg-gray-100': ''}  hover:bg-gray-100`}
                    onClick={() => onOptionClick(1)}
                >
                    <FaPlus size={20}/>
                    {isExpanded && <span>Add Flashcard</span>}
                </button>
                <button
                    className={`flex items-center space-x-2 text-gray-800 p-4 ${active === 2 ? 'bg-gray-100': ''}  hover:bg-gray-100`}
                    onClick={() => onOptionClick(2)}
                >
                    <FaEdit size={20}/>
                    {isExpanded && <span>Edit Flashcard</span>}
                </button>
            </div>
        </div>
    );
};

export default DashboardSidebar;
