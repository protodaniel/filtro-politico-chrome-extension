dictionary = [
  'pan',
  'pri',
  'prd',
  'morena',
  'amlo',
  'anaya',
  'meade',
  'populismo',
  'populista',
  'populistas',
  'debate',
  'senado',
  'lopez obrador',
  'lópez obrador',
  'prian',
  'peña nieto',
  'salinas',
  'vicente fox',
  'elecciones'
];

// when the extension is first installed
chrome.runtime.onInstalled.addListener(function(details) {
  chrome.storage.sync.set({ clean_news_feed: true });
  chrome.storage.sync.set({ forbidden_words: dictionary.join(',') });
});

// listen for any changes to the URL of any tab.
chrome.tabs.onUpdated.addListener(function(id, info, tab) {
  if (tab.url.toLowerCase().indexOf('facebook.com') > -1) {
    chrome.pageAction.show(tab.id);
  }
});
