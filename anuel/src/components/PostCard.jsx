import React from 'react';

const PostCard = ({ post }) => {
  const { userName, userHandle, timeAgo, content, image, likes, replies, reposts } = post;
  return (
    <div className="border-b border-gray-200 p-4 hover:bg-gray-50 transition-colors cursor-pointer">
      <div className="flex">
        <div className="w-14 h-14 rounded-full mr-3 bg-gray-200 flex items-center justify-center text-gray-400">
          {userName ? userName.charAt(0).toUpperCase() : 'U'}
        </div>
        
        <div className="flex-grow">
          {}
          <div className="flex items-center mb-2">
            <span className="font-bold text-base mr-1 hover:underline">{userName}</span>
            <span className="text-gray-500 mr-1">@{userHandle}</span>
            <span className="text-gray-500">· {timeAgo}</span>
          </div>
          
          {}
          <p className="mb-3 text-base leading-relaxed">{content}</p>
          
          {}
          {image && (
            <div className="mb-3 rounded-xl overflow-hidden border border-gray-100">
              <img src={image} alt="Post attachment" className="w-full h-auto object-cover hover:opacity-95 transition-opacity" />
            </div>
          )}            {}
          <div className="flex justify-between text-gray-500 max-w-md mt-2">
            <button className="flex items-center hover:text-blue-500 group">
              <div className="p-2 rounded-full group-hover:bg-blue-50 transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              {replies > 0 && <span className="ml-2 text-sm">{replies}</span>}
            </button>
            
            <button className="flex items-center hover:text-green-500 group">
              <div className="p-2 rounded-full group-hover:bg-green-50 transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              {reposts > 0 && <span className="ml-2 text-sm">{reposts}</span>}
            </button>
            
            <button className="flex items-center hover:text-red-500 group">
              <div className="p-2 rounded-full group-hover:bg-red-50 transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              {likes > 0 && <span className="ml-2 text-sm">{likes}</span>}
            </button>
            
            <button className="flex items-center hover:text-blue-500 group">
              <div className="p-2 rounded-full group-hover:bg-blue-50 transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                </svg>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
