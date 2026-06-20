import React from 'react';
import { Tooltip } from '../../shared/Tooltip/Tooltip';
import styles from './ActivityCalendar.module.scss';

export const ActivityCalendar: React.FC = () => {


    const weeks = Array.from({ length: 14 }, (_, i) => ({
        number: i + 1,
        days: Array.from({ length: 7 }, () => Math.floor(Math.random() * 5))
    }));

    return (
        <div className={styles.section}>
            <h3 className={styles.title}>Activity</h3>
            <div className={styles.calendarWrapper}>
                <div className={styles.labels}>
                    {weeks.map(w => (
                        <span key={w.number} className={styles.num}>{w.number}</span>
                    ))}
                </div>
                <div className={styles.grid}>
                    {weeks.map((week, wIdx) => (
                        <div key={wIdx} className={styles.column}>
                            {week.days.map((level, dIdx) => (
                                <Tooltip key={dIdx} count={level * 2} date="Oct 12, 2023">
                                    <div className={`${styles.day} ${styles[`level${level}`]}`} />
                                </Tooltip>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};