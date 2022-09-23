function capture(x, y, width, height) {
    // Get The canvas
    html2canvas(document.body, {
        x: x,
        y: y,
        width: width - x,
        height: height - y
    
      //Callback after image captured
    }).then(function (canvas) {
     
     //Create a dummy element to download the file
     var a = document.createElement("a")
     a.style = "display: none;"
     a.href = canvas.toDataURL("image/png");
     a.download = "Example.png";
     document.querySelector("body").append(a);
     a.click();
     a.remove();
    });
}