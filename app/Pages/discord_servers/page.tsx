import styles from './page.module.css';
import NavigationBar from '@/app/components/navigationBar';

export default function Page() {
  //TODO: add servers page functions + UI
  return (
   <main>
 <div className={`${styles.pageWrapper} w-full min-h-screen`}>
  <NavigationBar></NavigationBar>
    <h1 className="p-10 text-2xl">yo</h1>
  </div>
</main>
  );
}