//use json stringyfy to have a whole object of them having a array of scores, then just add to the array.

function result () {
    var scores=0;
if (document.getElementById('correctanswer1').checked)

{
scores++;
}

if (document.getElementById('correctanswer2').checked)
{
    scores++;
    }
    
if (document.getElementById('correctanswer3').checked)
{
    scores++;
    }
    
if (document.getElementById('correctanswer4').checked)
{
    scores++;
    }
    
if (document.getElementById('correctanswer5').checked)
{
    scores++;
    }    

    alert("your overall score is:" +scores)
    
function init() {
    var storedscores = JSON.parse(localStorage.getItem("scores"));
    if (storedscores !== null) {
        scores = storedscores;
      }
      storedscores();
      renderscores();
    }

}