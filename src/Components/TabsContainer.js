import React, { useState } from 'react';
import Tab from './Tab';
import '../Styles/TabsContainer.css';

export default function TabsContainer(props) {
    const { tabs } = props;
    const [activeTab, setActiveTab] = useState(0);

    const changeActiveTab = (index) => {
        setActiveTab(index);
    };

    return (
        <div className="tabs-container">
            <ul className="tab-list">
                {tabs.map((tab, index) => (
                    <li
                        key={index}
                        onClick={() => changeActiveTab(index)}
                        className={index === activeTab ? 'active' : ''}
                    >
                        {tab.label}
                    </li>
                ))}
            </ul>

            {tabs.map((tab, index) => (
                <Tab
                    key={index}
                    active={index === activeTab}
                    content={tab.content}
                />
            ))}
        </div>
    );
}