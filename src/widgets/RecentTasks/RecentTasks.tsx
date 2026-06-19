import React from 'react';
import styles from './RecentTasks.module.scss';

export const RecentTasks: React.FC = () => {
    const tasks = [
        { id: 1, title: 'Quarterly_report_v2.doc', completed: true },
        { id: 2, title: 'Patient_meeting_notes.txt', completed: false },
        { id: 3, title: 'Research_paper_asthma.pdf', completed: false },
        { id: 4, title: 'New_clinic_layout.draft', completed: false },
    ];

    return (
        <div className={styles.section}>
            <h3 className={styles.title}>Recent Tasks</h3>
            <div className={styles.list}>
                {tasks.map(task => (
                    <div key={task.id} className={styles.item}>
                        <span className={styles.icon}>{task.completed ? '✓' : '📄'}</span>
                        <span className={`${styles.taskTitle} ${task.completed ? styles.completed : ''}`}>
                            {task.title}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
};