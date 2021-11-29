function loadFile(input){
    var file=input.files[0];
    var src=URL.createObjectURL(file);
    var img=new Image();
    img.src=src;
    img.onload=function(){
        ctx.drawImage(this, 0, 0, cvs.width, cvs.height);
    };
}

function invertColor(){
    var pixels=ctx.getImageData(0, 0, cvs.width, cvs.height);
    var data=pixels.data;
    for (var i=0; i<data.length; i+=4){
        data[i]=255-data[i];
        data[i+1]=255-data[i+1];
        data[i+2]=255-data[i+2];
    };
    ctx.putImageData(pixels, 0, 0, cvs.width, cvs.height);
}
