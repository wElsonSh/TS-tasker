import React, { ReactNode } from 'react';
import styles from './Tooltip.module.scss';

interface TooltipProps {
    children: ReactNode;
    count: number;
    date: string;
}

export const Tooltip: React.FC<TooltipProps> = ({ children, count, date }) => {
    return (
        <div className={styles.tooltipWrapper}>
            {children}
            <div className={styles.tooltipBox}>
                <span className={styles.count}>{count} tasks</span>
                <span className={styles.date}>{date}</span>
            </div>
        </div>
    );
};