import React, { useState } from 'react';
import { FaShoppingBasket, FaPlus, FaAlignJustify } from 'react-icons/fa';
import { CloseOutlined } from "@ant-design/icons";
import { Link } from 'react-router-dom';

const Sidebar = () => {
    const [isCollapsed, setIsCollapsed] = useState(true);

    const toggleSidebar = () => {
        setIsCollapsed(!isCollapsed);
    };

    return (
        <div className={`sidebar ${isCollapsed ? 'collapsed' : ''}`}>
            <button className="toggle-btn" onClick={toggleSidebar}>
                {isCollapsed ? <FaAlignJustify /> : <CloseOutlined /> }
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
