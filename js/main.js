var myImg = document.getElementById("the-canvas");
        var currWidth = myImg.clientWidth;
        var currHeight = myImg.clientHeight;
function zoomin(){
  var myImg = document.getElementById("the-canvas");
  var currWidth = myImg.clientWidth;
  var currHeight = myImg.clientHeight;
  //if(currWidth == 2500) return false;
  // else{
  //    myImg.style.width = (currWidth + 100) + "px";
  //} 
  myImg.style.width = (currWidth + 50) + "px";
  myImg.style.height = (currHeight + 50) + "px";
}
function zoomout(){
  var myImg = document.getElementById("the-canvas");
  var currWidth = myImg.clientWidth;
  var currHeight = myImg.clientHeight;
  // if(currWidth == 100000) return false;
  //  else{
      myImg.style.width = (currWidth - 50) + "px";
      myImg.style.height= (currHeight- 50) + "px";
  // }
}

function chagnefile() {
  var pdfjsLib = window['pdfjs-dist/build/pdf'];
var thePdf = null;
var scale = 2.3;
  const loadingTask =  pdfjsLib.getDocument(`https://pdftron.s3.amazonaws.com/downloads/pl/webviewer-demo.pdf`)
  loadingTask.promise
  .then(function (pdfDocument) {
      // Request a first page
      const viewer = document.getElementById("the-canvas");
      let renderTask;
      for (let page = 1; page <= pdfDocument.numPages; page++) {
          pdfDocument.getPage(page).then(function (pdfPage) {
              const viewport = pdfPage.getViewport({ scale: 1.0 });
              const canvas = document.createElement("canvas");
              canvas.width = viewport.width;
              canvas.height = viewport.height;
              const ctx = canvas.getContext("2d");
              viewer.appendChild(canvas);
              renderTask = pdfPage.render({
                  canvasContext: ctx,
                  viewport,
              });
          });
      }
      return renderTask.promise;
  })
  .catch(function (reason) {
      console.error("Error: " + reason);
  });
}