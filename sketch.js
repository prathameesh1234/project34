//Create variables here
var dog,dogimg,happyDogimg;
var foodS,foodStock;
var score,num;
var database;

function preload()
{
  dogimg = loadImage("images/dogImg1.png");
 //happyDogimg = loadImage("images/dogImg.png");
	//load images here
}
function setup() {
database = firebase.database();
  createCanvas(500,500);
  dog = createSprite(250,250,10,10)
  dog.addImage(dogimg)
  dog .scale = 0.25
  foodStock = database.ref("food")
  foodStock.on("value",readfood,showerror);
 
}


function draw() {  

 if(keyDown(UP_ARROW)){
Writefood(foodS)
 }

 text("Food remaining:"+ foodS,170,50)
  drawSprites();
  //add styles here

}

function readfood(newdata){
  foodS = newdata.val();
  console.log(foodS)
   
  }
  
  function showerror(){
  console.log("error in reading");
  
  }
  
  function Writefood(x){
    if(x<0){
x=0;
    }

    else {
      x=x-1;
    }
    

      database.ref("/").update({
      food:x
    
      });
  }


