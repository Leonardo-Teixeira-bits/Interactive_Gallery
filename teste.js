    function upDate(previewPic)
    {
        var image = document.getElementById("image");
        image.style.backgroundImage = "url('"+previewPic.src+"')";
        image.innerHTML = '';
    }

    function unDo()
    {
        var image2 = document.getElementById("image");
        image2.style.backgroundImage = "url('')";
        image2.innerHTML = 'Hover over an image below to display here.';
        
    }