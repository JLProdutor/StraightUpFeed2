import { PencilLine } from "phosphor-react";
import { Avatar } from './Avatar';
import styles from './Sidebar.module.css';


export function Sidebar() {
    return(
        <aside className={styles.sidebar}>
            <img className={styles.banner} src="https://images.unsplash.com/photo-1733235015033-c9aa3264135d?q=50&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Profile Banner" />

            <div className={styles.profile}>
                <Avatar src="https://avatars.githubusercontent.com/u/102752985?v=4"/>
                <strong>Profile Name</strong>
                <span>Title</span>
            </div>
            <footer>
                <a href="#">
                    <PencilLine size={20} />
                    Edit Profile
                </a>
            </footer>
        </aside>
    );
};
