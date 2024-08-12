import React, { useState } from 'react';
import Sidebar from '../Components/Sidebar';
import AddFlashcard from '../Components/AddFlashcard';
import EditFlashcard from '../Components/EditFlashcard';
import {EditUsers} from "../Components/EditUsers.jsx";

const Dashboard = () => {
    const [activeComponent, setActiveComponent] = useState(0);

    const handleOptionClick = (option) => {
        setActiveComponent(option);
    };

    const renderComponent = () => {
        switch (activeComponent) {
            case 0:
                return <EditUsers />;
            case 1:
                return <AddFlashcard />;
            case 2:
                return <EditFlashcard />;
            default:
                return <EditUsers />;
        }
    };

    return (
        <div className="flex">
            <Sidebar onOptionClick={handleOptionClick} active={activeComponent}/>
            <div className="flex-1 p-4">
                {renderComponent()}
            </div>
        </div>
    );
};

export default Dashboard;
