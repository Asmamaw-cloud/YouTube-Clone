import "./Feed.css";
import { Link } from "react-router-dom";
import { API_KEY, value_converter } from "../../data";
import { useEffect, useState } from "react";
import moment from "moment";

const Feed = ({ category }) => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const videoList_url = `https://www.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&chart=mostPopular&maxResults=50&regionCode=US&videoCategoryId=${category}&key=${API_KEY}`;
    try {
      const response = await fetch(videoList_url);
      const result = await response.json();
      if (response.ok) {
        setData(result.items || []); // Ensure that data is an array or empty
      } else {
        console.error("Error fetching data:", result.error.message);
      }
    } catch (error) {
      console.error("Fetch failed:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [category]);

  return (
    <div className="feed">
      {data.length > 0 && data.map((item) => (
        <Link to={`video/${item.snippet.categoryId}/${item.id}`} className="card" key={item.id}>
          <img src={item.snippet.thumbnails?.medium?.url || 'default.jpg'} alt={item.snippet.title || 'No title'} />
          <h2>{item.snippet.title}</h2>
          <h3>{item.snippet.channelTitle}</h3>
          <p>{value_converter(item.statistics.viewCount)} views &bull; {moment(item.snippet.publishedAt).fromNow()}</p>
        </Link>
      ))}
    </div>
  );
};

export default Feed;
