/* Youtube API */
// This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
function onYouTubeIframeAPIReady() {
player = new YT.Player('teaserYoutube', {
    height: '100%',
    width: '100%',
    videoId: '_9UeVB0Ytw8',
    events: {
        'onReady': onPlayerReady,
    }
});
}

// 4. The API will call this function when the video player is ready.
function onPlayerReady(event) {
    $('.imgBehind').on('click',function(){
        event.target.pauseVideo();
    });
    $('.opacity').on('click',function(){
        event.target.pauseVideo();
    });
}
