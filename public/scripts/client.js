/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

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

const tweetData = {
  "user": {
    "name": "Newton",
    "avatars": "https://i.imgur.com/73hZDYK.png",
      "handle": "@SirIsaac"
    },
  "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
  "created_at": 1461116232227
}

const $tweet = createTweetElement(tweetData);

// Test / driver code (temporary)
console.log($tweet); // to see what it looks like
$('#tweets-container').append($tweet);
