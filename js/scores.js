//use json stringyfy to have a whole object of them having a array of scores, then just add to the array.
function init() {
    var storedscores = JSON.parse(localStorage.getItem("scores"));
    if (storedscores !== null) {
        scores = storedscores;
      }
      storedscores();
      renderscores();
    }
