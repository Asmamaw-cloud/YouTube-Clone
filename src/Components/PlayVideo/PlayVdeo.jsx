import "./PlayVideo.css";
import jack from "../../assets/jack.png";
import { BiDislike, BiLike } from "react-icons/bi";
import { FaShare } from "react-icons/fa";
import { MdLibraryMusic, MdSaveAlt } from "react-icons/md";
import { useState, useEffect } from "react";
import { API_KEY, value_converter } from "../../data";
import moment from "moment";

const PlayVideo = ({ videoId }) => {
  const [apiData, setApiData] = useState(null);
  const [channelData, setChannelData] = useState(null);
  const [commentData, setCommentData] = useState(null);

  const fetchVideoData = async () => {
    const videoDetails_url = `https://www.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&id=${videoId}&key=${API_KEY}`;
    await fetch(videoDetails_url)
      .then((response) => response.json())
      .then((data) => setApiData(data.items[0]));
  };

  const fetchChannelData = async () => {
    const channelData_url = `https://www.googleapis.com/youtube/v3/channels?part=snippet,statistics&id=${
      apiData ? apiData.snippet.channelId : ""
    }&key=${API_KEY}`;
    await fetch(channelData_url)
      .then((response) => response.json())
      .then((data) => setChannelData(data.items[0]));

    // Fetch video comments
    const comments_url = `https://www.googleapis.com/youtube/v3/commentThreads?part=snippet&videoId=${videoId}&maxResults=25&key=${API_KEY}`;
    await fetch(comments_url)
      .then((response) => response.json())
      .then((data) => setCommentData(data.items));
  };

  useEffect(() => {
    fetchVideoData();
  }, [videoId]);

  useEffect(() => {
    if (apiData) {
      fetchChannelData();
    }
  }, [apiData]);

  return (
    <div className="play-video">
      <iframe
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
      <h3>{apiData ? apiData.snippet.title : "Title"}</h3>
      <div className="play-video-info">
        <p>
          {apiData ? value_converter(apiData.statistics.viewCount) : "16K"}{" "}
          Views &bull;{" "}
          {apiData ? moment(apiData.snippet.publishedAt).fromNow() : ""}
        </p>
        <div>
          <span>
            <BiLike className="icon" />
            {apiData ? value_converter(apiData.statistics.likeCount) : "155"}
          </span>
          <span>
            <BiDislike className="icon" />
          </span>
          <span>
            <FaShare className="icon" />
            Share
          </span>
          <span>
            <MdLibraryMusic className="icon" />
            Save
          </span>
        </div>
      </div>
      <hr />
      <div className="publisher">
        <img
          src={
            channelData && channelData.snippet && channelData.snippet.thumbnails
              ? channelData.snippet.thumbnails.default.url
              : jack
          }
          alt=""
        />
        <div>
          <p>{apiData ? apiData.snippet.channelTitle : ""}</p>
          <span>
            {channelData
              ? value_converter(channelData.statistics.subscriberCount)
              : "1M"}{" "}
            Subscribers
          </span>
        </div>
        <button>Subscribe</button>
      </div>
      <div className="vid-description">
        <p>{apiData ? apiData.snippet.description : "Description Here"}</p>
        <hr />
        <h4>
          {apiData ? value_converter(apiData.statistics.commentCount) : "102"}{" "}
          Comments
        </h4>
        {commentData && commentData.length > 0 ? (
          commentData.map((item, index) => {
            const comment = item.snippet.topLevelComment.snippet;
            return (
              <div key={index} className="comment">
                <img src={comment.authorProfileImageUrl} alt="" />
                <div>
                  <h3>
                    {comment.authorDisplayName}{" "}
                    <span>{moment(comment.publishedAt).fromNow()}</span>
                  </h3>
                  <p>{comment.textDisplay}</p>
                </div>
                <div className="comment-action">
                  <BiLike className="icon comment-like" />
                  <span>{value_converter(comment.likeCount)}</span>
                  <BiDislike className="icon comment-like" />
                </div>
              </div>
            );
          })
        ) : (
          <p>No comments available</p>
        )}
      </div>
    </div>
  );
};

export default PlayVideo;
