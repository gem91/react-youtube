import React from 'react';
import styles from './video_item.module.css';

const VideoItem = ({video: {snippet}}) => (
    <li className={styles.container}>
        <div className={styles.video}>
            <div className={styles.thumbnail}>
                <img className={styles.thumbImg} src={snippet.thumbnails.medium.url} alt="video thumbnail" />
            </div>
            
            <div className={styles.textArea}>
                <p className={styles.title}>{snippet.title}</p>
                <span className={styles.channel}>{snippet.channelTitle}</span>
            </div>
        </div>
    </li>
);

export default VideoItem;