// thanks to https://github.com/hartleybrody/buzzkill/blob/master/settings.js

document.addEventListener('DOMContentLoaded', function() {
  var input = document.getElementById('forbidden-words');
  var saveButton = document.getElementById('save-button');
  var resetButton = document.getElementById('reset-button');

  // set the initial state of the checkbox
  chrome.storage.sync.get('forbidden_words', function(data) {
    forbiddenWords = data['forbidden_words'];
    console.log('oi', forbiddenWords);
    if (forbiddenWords) {
      input.value = forbiddenWords;
    }
  });

  saveButton.addEventListener('click', function() {
    chrome.storage.sync.set({ forbidden_words: input.value });
  });

  resetButton.addEventListener('click', function() {
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
      'elecciones',
      'peje',
      'ine',
      'trife'
    ];
    input.value = dictionary.join(',');
    chrome.storage.sync.set({ forbidden_words: input.value });
  });
});
