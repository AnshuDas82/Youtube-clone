import React from "react";
import thumbnail from "./assets/thumbnail-1.jpg";
import profilepic from "./assets/profilepic.jpg";
const Main = ({ isExpanded }) => {
  const videos = [
    {
      thumbnail: thumbnail,
      title: "Web Development comlete Roadmap for begginers 👍",
      href: "#",
      channel: {
        name: "ezSnippet",
        image: profilepic,
      },
      views: "92k",
      uploadDate: "2 Days Ago",
    },
    {
      thumbnail: thumbnail,
      title: "Web Development comlete Roadmap for begginers 👍",
      href: "#",
      channel: {
        name: "ezSnippet",
        image: profilepic,
      },
      views: "92k",
      uploadDate: "2 Days Ago",
    },
    {
      thumbnail: thumbnail,
      title: "Web Development comlete Roadmap for begginers 👍",
      href: "#",
      channel: {
        name: "ezSnippet",
        image: profilepic,
      },
      views: "92k",
      uploadDate: "2 Days Ago",
    },
    {
      thumbnail: thumbnail,
      title: "Web Development comlete Roadmap for begginers 👍",
      href: "#",
      channel: {
        name: "ezSnippet",
        image: profilepic,
      },
      views: "92k",
      uploadDate: "2 Days Ago",
    },
    {
      thumbnail: thumbnail,
      title: "Web Development comlete Roadmap for begginers 👍",
      href: "#",
      channel: {
        name: "ezSnippet",
        image: profilepic,
      },
      views: "92k",
      uploadDate: "2 Days Ago",
    },
    {
      thumbnail: thumbnail,
      title: "Web Development comlete Roadmap for begginers 👍",
      href: "#",
      channel: {
        name: "ezSnippet",
        image: profilepic,
      },
      views: "92k",
      uploadDate: "2 Days Ago",
    },
    {
      thumbnail: thumbnail,
      title: "Web Development comlete Roadmap for begginers 👍",
      href: "#",
      channel: {
        name: "ezSnippet",
        image: profilepic,
      },
      views: "92k",
      uploadDate: "2 Days Ago",
    },
    {
      thumbnail: thumbnail,
      title: "Web Development comlete Roadmap for begginers 👍",
      href: "#",
      channel: {
        name: "ezSnippet",
        image: profilepic,
      },
      views: "92k",
      uploadDate: "2 Days Ago",
    },
    {
      thumbnail: thumbnail,
      title: "Web Development comlete Roadmap for begginers 👍",
      href: "#",
      channel: {
        name: "ezSnippet",
        image: profilepic,
      },
      views: "92k",
      uploadDate: "2 Days Ago",
    },
    {
      thumbnail: thumbnail,
      title: "Web Development comlete Roadmap for begginers 👍",
      href: "#",
      channel: {
        name: "ezSnippet",
        image: profilepic,
      },
      views: "92k",
      uploadDate: "2 Days Ago",
    },
    {
      thumbnail: thumbnail,
      title: "Web Development comlete Roadmap for begginers 👍",
      href: "#",
      channel: {
        name: "ezSnippet",
        image: profilepic,
      },
      views: "92k",
      uploadDate: "2 Days Ago",
    },
    {
      thumbnail: thumbnail,
      title: "Web Development comlete Roadmap for begginers 👍",
      href: "#",
      channel: {
        name: "ezSnippet",
        image: profilepic,
      },
      views: "92k",
      uploadDate: "2 Days Ago",
    },
    {
      thumbnail: thumbnail,
      title: "Web Development comlete Roadmap for begginers 👍",
      href: "#",
      channel: {
        name: "ezSnippet",
        image: profilepic,
      },
      views: "92k",
      uploadDate: "2 Days Ago",
    },
    {
      thumbnail: thumbnail,
      title: "Web Development comlete Roadmap for begginers 👍",
      href: "#",
      channel: {
        name: "ezSnippet",
        image: profilepic,
      },
      views: "92k",
      uploadDate: "2 Days Ago",
    },
  ];

  return (
    <div
      className={`grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-6 pt-4 px-4 w-full ${
        isExpanded ? "ml-20" : "ml-60"
      } `}
    >
      {videos.map((video, index) => {
        return (
          <a href={video.href} className={``} key={index}>
            <img src={video.thumbnail} className="rounded-xl " />
            <h1 className="w-[300px] overflow-hidden whitespace-nowrap text-ellipsis">
              {video.title}
            </h1>
            <div className="flex space-x-5">
              <img src={video.channel.image} className="h-5 w-5 rounded-full" />
              <h2>{video.channel.name}</h2>
            </div>
            <p>
              {video.views} views &bull; {video.uploadDate}
            </p>
          </a>
        );
      })}
    </div>
  );
};

export default Main;
