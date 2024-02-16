let lists=document.getElementsByClassName("list");
let rightBox=document.getElementById("right");
let leftBox=document.getElementById("left");
for (list of lists)
{
    list.addEventListener("dragstart",function(e)
    {
        let selected=e.target;
        rightBox.addEventListener("dragover",function(e)
        {
            e.preventDefault();

        });
        rightBox.addEventListener("drop",function(e)
        {
            rightBox.appendChild(selected);
            selected=null;

        })

        leftBox.addEventListener("dragover",function(e)
        {
            e.preventDefault();

        });
        leftBox.addEventListener("drop",function(e)
        {
            leftBox.appendChild(selected);
            selected=null;

        })

    })
}
  

document.getElementById('uploadBtn').addEventListener('click', function() {
  
    document.getElementById('fileInput').click();
  });
  
  document.getElementById('fileInput').addEventListener('change', function() {
    const file = this.files[0];
    if (file) {
      renderPDF(file);
    }
  });
  
  function renderPDF(file) {
    const reader = new FileReader();
    reader.onload = function(event) {
      const pdfUrl = event.target.result;
      const embed = `<embed src="${pdfUrl}" width="100%" height="100%" type="application/pdf">`;
      document.getElementById('documentViewer').innerHTML = embed;
    };
    reader.readAsDataURL(file);
  }
 
  

  
  