import { RiTeamFill } from "react-icons/ri";
import { IoPersonSharp } from "react-icons/io5";

import './tabs.css';
import { useState } from "react";

const Tabs = ({ activeTab, onChangeTab }) => {

    const handleClick = () => {
        const newTab = (activeTab === 'Funcionário')? 'Time' : 'Funcionário';
        onChangeTab(newTab);
        console.log(activeTab)
    }

    return (
        <section className="tabs">
            <nav aria-label="Selecionar tipo de formulário">
                <ul>
                    <li className={
                        activeTab === 'Funcionário' ? 'active' : ''} 
                        onClick={handleClick} 
                        role="button">
                            <IoPersonSharp/>
                            Funcionário
                    </li>
                    <li className={
                        activeTab === 'Time' ? 'active' : ''} 
                        onClick={handleClick} 
                        role="button">
                            <RiTeamFill />
                            Time
                    </li>
                </ul>
            </nav>
        </section>
    );
}

export default Tabs