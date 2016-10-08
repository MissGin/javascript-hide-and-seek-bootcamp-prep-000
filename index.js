function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector('#nested .target');
}

function increaseRankBy(n) {
  var rankLists = document.querySelectorAll('ul.ranked-list li');
  for (var i in rankLists){
    rankLists[i].innerHTML = parseInt(rankLists[i].innerHTML) + n;
  }
}

function deepestChild() {
  var nodesArray = Array.prototype.slice.call(document.querySelector("div#grand-node").querySelectorAll('div'));
  return nodesArray[nodesArray.length-1];
}
