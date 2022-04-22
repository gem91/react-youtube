import React, { useEffect, useState } from 'react';
import './app.css';
import SearchHeader from './components/search_header/search_header';
import VideoList from './components/video_list/video_list';

function App() {
  const [videos, setVideos] = useState([]);
  const search = keyword => {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
    fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${keyword}&key=AIzaSyAWtYKYGSdiZEgsTe49lo1eMJKypePBuFk&type=video`, requestOptions)
      .then(response => response.json())
      .then(result => result.items.map( item => ({...item, id: item.id.videoId })))
      .then(items => setVideos(items))
      .catch(error => console.log('error', error));
  }

  useEffect(() => {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
    fetch("https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyAWtYKYGSdiZEgsTe49lo1eMJKypePBuFk&type=video", requestOptions)
      .then(response => response.json())
      .then(result => setVideos(result.items))
      .catch(error => console.log('error', error)); 
      
    }, []);
    
  return (
    <>
      <SearchHeader onSearch={search} />
      <VideoList videos={videos} />
    </>
  );
}

export default App;
