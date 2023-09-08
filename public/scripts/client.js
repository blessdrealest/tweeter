/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
// Fake data taken from initial-tweets.json
const data = [
    {
      "user": {
        "name": "Newton",
        "avatars": "https://i.imgur.com/73hZDYK.png"
        ,
        "handle": "@SirIsaac"
      },
      "content": {
        "text": "If I have seen further it is by standing on the shoulders of giants"
      },
      "created_at": 1461116232227
    },
    {
      "user": {
        "name": "Descartes",
        "avatars": "https://i.imgur.com/nlhLi3I.png",
        "handle": "@rd" },
      "content": {
        "text": "Je pense , donc je suis"
      },
      "created_at": 1461113959088
    }
  ]

const renderTweets = function(tweets) {
  tweets.forEach(tweet => {
    const $tweet = createTweetElement(tweet);
    $('#tweets-container').append($($tweet));
    
  });
  // loops through tweets
  // calls createTweetElement for each tweet
  // takes return value and appends it to the tweets container
}
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
    <div class="left">${data.created_at}</div>
    <div class="right">
      <i class="fa-solid fa-flag"></i>
      <i class="fa-solid fa-retweet"></i>
      <i class="fa-solid fa-heart"></i>
    </div>
  </footer>
</article>`;
return tweetElement;
} 

renderTweets(data);