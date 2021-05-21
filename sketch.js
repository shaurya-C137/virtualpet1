//Create variables here
var dog,happyDog,foods = 0,foodStock,database
function preload()
{
	//load images here
  dogimg = loadImage("images/dogImg.png")
  happyDog = loadImage("images/dogImg1.png")
}

function setup() {
	createCanvas(500, 500);
  dog = createSprite(250,250)
  dog.addImage(dogimg)
  dog.scale = 0.15
  database = firebase.database()
  foodStock = database.ref('food')
  foodStock.on("value",readstock)
}


function draw() {  
background("lightblue")
if(keyWentDown(UP_ARROW)){
  writefoodstock(foods)
  dog.addImage(happyDog)

}  

drawSprites();
stroke("black")
textSize(12)
text("food:",+foods,150,150)

  //add styles here

}

function readstock(data){
  foods = data.val()
}

function writefoodstock(x){
if(x <= 0){
   x =0
}else{
x = x-1
}
database.ref('/').update({
  food:x
})
}





