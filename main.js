noseX=0;
noseY=0;

function preload() {
clown_nose=loadImage('https://i.postimg.cc/3x3QzSGq/m.png');
}

function setup() {
    canvas=createCanvas(500,500);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(500,500);
    video.hide();
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses)
}

function draw() {
    image(video,0,0,500,500);
    image(clown_nose,noseX,noseY,80,35);
}

function take_snapshot() {
    save('myfilteredimage.png')
}

function modelLoaded() {
    console.log("poseNet initialized")
}

function gotPoses(results) {
    if(results.length>0){
        console.log(results);
        console.log("nose x="+results[0].pose.nose.x);
        console.log("nose y="+results[0].pose.nose.y);
    }
}