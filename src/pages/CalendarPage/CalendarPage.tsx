import React from 'react';
import { ActivityCalendar } from '../../widgets/ActivityCalendar/ActivityCalendar';
import styles from './CalendarPage.module.scss';

export const CalendarPage: React.FC = () => {
    return (
        <div className={styles.pageContainer}>

            <div className={styles.calendarCard}>
                <ActivityCalendar />
            </div>

            {/* Здесь в будущем можно добавить список событий под календарем */}
        </div>
    );
};