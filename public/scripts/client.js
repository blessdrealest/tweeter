/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
//re-encode texts for protection from unsafe characters
const escape = function (str) {
  let div = document.createElement("div");
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
};

const data = [];
//loop through all tweets
const renderTweets = function(tweets) {
  tweets.forEach(tweet => {
    const $tweet = createTweetElement(tweet);
    $('#tweets-container').append($tweet);
  });
};
//create a new tweet element from data
const createTweetElement = function(data) {
  let tweetElement = `<article class="tweet">
  <header>
    <div class="left">
      <img src="${data.user.avatars}" />
      <p>${data.user.name}</p>
    </div>
    <div class="right">${data.user.handle}</div>
  </header>
  <div class="tweet-body">
    ${data.content.text}
  </div>
  <hr />
  <footer class="tweet-footer">
    <div class="left">${timeago.format(data.created_at)}</div>
    <div class="right">
      <i class="fa-solid fa-flag"></i>
      <i class="fa-solid fa-retweet"></i>
      <i class="fa-solid fa-heart"></i>
    </div>
  </footer>
</article>`;
return tweetElement;
} 

//Ajax Get request to take tweets from server and add it to renderTweets
const loadTweets = function() {
  $.get("/tweets", function(newTweet) {
    renderTweets(newTweet.reverse()); //use reverse for newest to oldest tweets display
  });
};

loadTweets();