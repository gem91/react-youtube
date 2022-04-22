import './app.css';
import React, { useEffect, useState } from 'react';
import SearchHeader from './components/search_header/search_header';
import VideoList from './components/video_list/video_list';


function App({youtube}) {
  const [videos, setVideos] = useState([]);
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

  return (
    <>
      <SearchHeader onLogo={goToMain} onSearch={search} />
      <VideoList videos={videos} />
    </>
  );
}

export default App;
