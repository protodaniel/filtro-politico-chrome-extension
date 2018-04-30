punctuation = '¡!,. ¿?:;';
dictionary = ['pan', 'pri', 'prd', 'amlo', 'anaya', 'meade'];
alreadyscannedArray = [];
removedArray = [];

parentAttribute = 'article';
parentClass = 'userContentWrapper';

function findAncestor(el, cls) {
  while ((el = el.parentElement) && !el.classList.contains(cls));
  return el;
}

userPosts = $$('.userContent');

function removePosts(postArray, dictionary) {
  if (!postArray.length) return;
  for (i = 0; i < postArray.length; i++) {
    innerText = postArray[i].innerHTML;
    if (innerText) {
      lowerCaseText = innerText.toLowerCase();
      for (j = 0; j < dictionary.length; j++) {
        matchThis = RegExp(`[${punctuation}]${dictionary[j]}[${punctuation}]`);
        if (matchThis.test(lowerCaseText)) {
          parentToRemove = findAncestor(postArray[i], parentClass);
          // console.log(`removing: ${parentToRemove} because it matched: ${matchThis.exec(lowerCaseText)}`)
          // parentToRemove && parentToRemove.remove();
          parentToRemove.style.display = 'none';
          break;
        }
      }
    }
  }
}

removePosts(userPosts, dictionary);
