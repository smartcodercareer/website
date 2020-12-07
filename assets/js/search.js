var fuse;
var firstRun = true;
var resultsAvailable = false;

for (item of document.querySelectorAll(".search input")) {
  item.addEventListener("keyup", async (event) => {
    try {
      if (firstRun) {
        await loadSearch();
        firstRun = false;
      }

      const target = event.target;
      console.log(target.value);
      executeSearch(target.value, target.parentNode);

    } catch (err) {
      console.error(err)
    }
  });
}

function fetchJSONFile(path, callback) {
  var httpRequest = new XMLHttpRequest();
  httpRequest.onreadystatechange = function() {
    if (httpRequest.readyState === 4) {
      if (httpRequest.status === 200) {
        var data = JSON.parse(httpRequest.responseText);
        if (callback) callback(data);
      }
    }
  };
  httpRequest.open('GET', path);
  httpRequest.send();
}

function executeSearch(term, wrapper) {
  let results = fuse.search(term);
  let searchitems = '';

  if (results.length === 0) {
    resultsAvailable = false;
    searchitems = '';

  } else {
    for (let item in results.slice(0,5)) {
      searchitems = searchitems + '<li><a href="' + results[item].item.permalink + '" tabindex="0">' + '<span class="title">' + results[item].item.title + '</span>';
    }
    resultsAvailable = true;
  }

  wrapper.querySelector("ul").innerHTML = searchitems;
}

function loadSearch() {
  return new Promise((resolve, reject) => fetchJSONFile('/index.json', data => {
    var options = {
      shouldSort: true,
      location: 0,
      distance: 100,
      threshold: 0.4,
      minMatchCharLength: 2,
      keys: [
        'title',
        'permalink',
        'summary'
      ]
    };

    try {
      fuse = new Fuse(data, options);
      resolve();

    } catch (err) {
      reject();
    }
  }));
}