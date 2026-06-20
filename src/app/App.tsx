import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { CalendarPage } from '../pages/CalendarPage/CalendarPage';
import { Footer } from '../widgets/Footer/Footer';
import { Sidebar } from '../widgets/Sidebar/Sidebar';
import styles from './App.module.scss';

// Представим, что у тебя есть эти страницы
const TasksPage = () => <div>Tasks Page</div>;

export function App() {
  return (
    <BrowserRouter>
      <div className={styles.appLayout}>
        <Sidebar />

        {/* Контейнер для страниц */}
        <main className={styles.mainContent}>
          <Routes>
            <Route path="/" element={<TasksPage />} />
            <Route path="/calendar" element={<CalendarPage />} />
            {/* Добавь остальные роуты здесь */}
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}