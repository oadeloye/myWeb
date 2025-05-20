document.addEventListener("DOMContentLoaded", ()=>{
    includeHTML("nav.html","nav");
    includeHTML ("footer.html","footing");
});

function includeHTML(file,elementId){
    fetch(file)
    .then(response =>response.text())
    .then(data=>{
        document.getElementById(elementId).innerHTML = data;

    })
    .catch(err => console.error(`error loading ${file}:`,err));
}

function enlarge(img){
    const lightbox = document.getElementById('lightbox');
    const boxImage = document.getElementById('box_image');
    lightbox.style.display ='flex';
    boxImage.src=img.src;
}

function closeBox(){
    document.getElementById('lightbox').style.display='none';
}