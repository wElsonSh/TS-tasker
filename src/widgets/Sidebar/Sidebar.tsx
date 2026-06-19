import React from 'react';
import { ActivityCalendar } from '../ActivityCalendar/ActivityCalendar';
import { RecentTasks } from '../RecentTasks/RecentTasks';
import styles from './Sidebar.module.scss';

export const Sidebar: React.FC = () => {
    return (
        <aside className={styles.sidebar}>
            <div className={styles.header}>
                <h1 className={styles.logo}>intelly</h1>
            </div>

            <div className={styles.scrollArea}>
                <ActivityCalendar />
                <RecentTasks />
            </div>

            <div className={styles.footer}>
                <button className={styles.logoutBtn}>
                    <span>→</span> Log out
                </button>
            </div>
        </aside>
    );
};