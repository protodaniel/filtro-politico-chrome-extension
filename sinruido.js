chrome.storage.sync.get('forbidden_words', function(data) {
  dictionary = data['forbidden_words'].split(',');

  if (document.location.href.indexOf('facebook') > -1) {
    sinRuido();
  }

  var scrollSinRuido = debounce(sinRuido, 300);
  document.addEventListener('scroll', scrollSinRuido);
});

punctuation = '¡!,. ¿?:;<>"\'';
scannedPosts = {};
parentClass = 'userContentWrapper';

function findAncestor(el, cls) {
  while ((el = el.parentElement) && !el.classList.contains(cls));
  return el;
}

function removePosts(postArray, dictionary) {
  if (!postArray.length) return;
  for (i = 0; i < postArray.length; i++) {
    innerHTML = postArray[i].innerHTML;
    if (innerHTML) {
      md5Hash = md5(innerHTML);
      if (!scannedPosts[md5Hash]) {
        scannedPosts[md5Hash] = true;
        lowerCaseText = innerHTML.toLowerCase();
        for (j = 0; j < dictionary.length; j++) {
          matchThis = RegExp(
            `[${punctuation}]${dictionary[j].trim()}[${punctuation}]`
          );
          if (matchThis.test(lowerCaseText)) {
            // console.debug('removing: ', matchThis.exec(lowerCaseText));
            postArray[i].remove();
            break;
          }
        }
      }
    }
  }
}

function sinRuido() {
  userPosts = document.getElementsByClassName(parentClass);
  removePosts(userPosts, dictionary);
}
