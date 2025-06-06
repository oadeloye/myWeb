document.addEventListener("DOMContentLoaded", ()=>{
    includeHTML("nav.html","nav");
    includeHTML ("footer.html","footing");
    includeHTML("intro2.html","nav2")
});

// this function creates a navigation and footer for every document with an nav id
function includeHTML(file,elementId){
    fetch(file)
    .then(response =>response.text())
    .then(data=>{
        document.getElementById(elementId).innerHTML = data;

    })
    .catch(err => console.error(`error loading ${file}:`,err));
}


/*this below is for the pictures. yyou click them and the get bigger ;) */
function enlarge(img){
    const lightbox = document.getElementById('lightbox');
    const boxImage = document.getElementById('box_image');
    lightbox.style.display ='flex';
    boxImage.src=img.src;
}

function closeBox(){
    document.getElementById('lightbox').style.display='none';
}


document.getElementById('logForm').addEventListener('submit',function(e){
    e.preventDefault();

    const date = document.getElementById('date').value;
    const exercise = document.getElementById('exercise').value;
    const duration = document.getElementById('duration').value;
    const notes = document.getElementById('notes').value;

    const table = document.getElementById('logTable').getElementsByTagName('tbody')[0];
    const newRow=table.insertRow();

    newRow.innerHTML = `
    <td>${date}</td>
    <td>${exercise}</td>
    <td>${duration}</td>
    <td>${notes}</td>
    `;

    document.getElementById("logForm"). reset();


});

