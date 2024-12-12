import { ThumbsUp, Trash } from "phosphor-react";
import { Avatar } from './Avatar.jsx';
import styles from './Comment.module.css';
import { useState } from "react";

export function Comment({ content, onDeleteComment }) {
    const [likeCount, setLikeCount] = useState(0);

    function handleDeleteComment() {
        onDeleteComment(content);
    }

    function handleLikeComment() {
        setLikeCount((state => {
            return state + 1
        }));
    }

    return(
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://avatars.githubusercontent.com/u/102752985?v=4" />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.commentAuthorAndTime}>
                            <strong>Comment Author</strong>
                            <time title="05 de Dezembro às 17:00" dateTime="2024-12-05 17:00:00">Published at XX:XX</time>
                        </div>

                        <button onClick={handleDeleteComment} title="Delete Comment">
                            <Trash size={24}/>
                        </button>
                    </header>

                    <p>{content}</p>
                </div>

                <footer>
                    <button onClick={handleLikeComment}>
                        <ThumbsUp/>
                        Like <span>{likeCount}</span>
                    </button>
                    
                </footer>
            </div>
        </div>
    );
};
