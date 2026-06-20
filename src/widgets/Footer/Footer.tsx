import { Calendar, ListTodo, Plus, Search, User } from 'lucide-react';
import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Footer.module.scss';

export const Footer: React.FC = () => {
    // Функция для определения стилей активной ссылки
    const setActive = ({ isActive }: { isActive: boolean }) =>
        isActive ? `${styles.navItem} ${styles.active}` : styles.navItem;

    return (
        <nav className={styles.footer}>
            <div className={styles.container}>
                <NavLink to="/" className={setActive} aria-label="Tasks">
                    <ListTodo size={24} />
                </NavLink>

                <NavLink to="/calendar" className={setActive} aria-label="Calendar">
                    <Calendar size={24} />
                </NavLink>

                <div className={styles.fabWrapper}>
                    <button className={styles.fab} aria-label="Add new task">
                        <Plus size={28} />
                    </button>
                </div>

                <NavLink to="/search" className={setActive} aria-label="Search">
                    <Search size={24} />
                </NavLink>

                <NavLink to="/profile" className={setActive} aria-label="Profile">
                    <User size={24} />
                </NavLink>
            </div>
        </nav>
    );
};