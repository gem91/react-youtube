import styles from './app.module.css';
import React, { useEffect, useState } from 'react';
import SearchHeader from './components/search_header/search_header';
import VideoList from './components/video_list/video_list';
import VideoDetail from './components/video_detail/video_detail';


function App({youtube}) {
  const [videos, setVideos] = useState([]);
  const [selectVideo, setSelectVideo] = useState(null);
  const search = keyword => {
    youtube.search(keyword)
      .then(videos => setVideos(videos))
      .catch(error => console.log('error', error)); 
  }

  useEffect(() => {
    youtube.mostPopular()
    .then(videos => setVideos(videos))
    .catch(error => console.log('error', error)); 
    }, [youtube]);
  
   const goToMain = () => {
    youtube.mostPopular()
      .then(videos => setVideos(videos))
      .catch(error => console.log('error', error)); 
  }
  
  const selectedVideo = (video) => {
    setSelectVideo(video);
  }

  return (
    <>
      <SearchHeader onLogo={goToMain} onSearch={search} />
      <section className={styles.content}>
        {selectVideo && (
          <div className={styles.detail}><VideoDetail video={selectVideo} /> </div>
          )
        }
        <div className={styles.list}><VideoList videos={videos} onVideoClick={selectedVideo} display={selectVideo ? 'list' : 'grid'} /></div>
      </section>
    </>
  );
}

export default App;
