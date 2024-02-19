chrome.runtime.onInstalled.addListener(() => {
  chrome.action.setBadgeText({
    text: 'OFF'
  });
});


const extensions = 'https://developer.chrome.com/docs/extensions'
const webstore = 'https://developer.chrome.com/docs/webstore'
const musics = ['https://music.youtube.com/', 'https://www.jango.com/', 'https://open.spotify.com/', 'https://soundcloud.com/', 'https://www.pandora.com/'
, 'https://www.iheart.com/', 'https://tunein.com/', 'https://www.siriusxm.com/']



function checkExtensions(tab, extents) {
  for(var i = 0;  i < extents.length; i++){
      if(tab.url.startsWith(extents[i])){
          return true;
      }
  }
  return false;
}

chrome.action.onClicked.addListener(async (tab) => {
  if (checkExtensions(tab, musics)) {
    console.log("on music website");
  }
});