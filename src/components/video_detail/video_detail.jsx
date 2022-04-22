import styles from './video_detail.module.css';
import React from 'react';

const VideoDetail = ({video, video: {snippet}}) => {
    console.log(video);
    return (
        <section className={styles.detail}>
            <iframe className={styles.video} id="ytplayer" type="text/html" width="100%" height="500px"
            src={`https://www.youtube.com/embed/${video.id}`}
            frameborder="0" allowfullscreen></iframe>
            <h2>{snippet.title}</h2>
            <span className={styles.channel}>{snippet.channelTitle}</span>
            <p className={styles.desc}>{snippet.description}</p>
        </section>
    )
};

export default VideoDetail;
