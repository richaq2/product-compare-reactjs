import React, { useState } from 'react';
import './SideBar.css';
import { FaShoppingBasket, FaPlus, FaLessThan, FaAlignJustify } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    const [isCollapsed, setIsCollapsed] = useState(false);

    const toggleSidebar = () => {
        setIsCollapsed(!isCollapsed);
    };

    return (
        <div className={`sidebar ${isCollapsed ? 'collapsed' : ''}`}>
            <button className="toggle-btn" onClick={toggleSidebar}>
                {isCollapsed ? <FaAlignJustify /> : <FaLessThan />}
            </button>
            <ul className="sidebar-links">
                <Link to='/'>
                    <li className="sidebar-item">
                        <FaShoppingBasket />
                        {isCollapsed && <div className="tooltip">Product Details</div>}
                        {!isCollapsed && <span>Product Details</span>}
                    </li>
                </Link>
                <Link to='/product-compare'>
                    <li className="sidebar-item">
                        <FaPlus />
                        {isCollapsed && <div className="tooltip">Compare Product</div>}
                        {!isCollapsed && <span>Compare Product</span>}
                    </li>
                </Link>
            </ul>
        </div>
    );
};

export default Sidebar;
