var clrs=generateRandom(6); //generating random colors
var selectRandom=selRandom(); //picking a randon colors from generated.
var pickedclr=selectRandom;
var s1=document.getElementById("s1");
var sq=document.querySelectorAll(".square");
var disp=document.querySelector("#disp");
var h1clr=document.querySelector("h1");
var play=document.querySelector("#play");
var easybtn=document.querySelector("#easy");
var hardbtn=document.querySelector("#hard");
var numsquare=6;
//change text at h1
s1.textContent=pickedclr;
//creating first set of colors for game can be reset by refresh and new colors button or play again
logic();
hardbtn.style.backgroundColor="cornflowerblue";

//game logic
function logic(){
    for(var i=0;i<sq.length;i++)
    {
        sq[i].style.backgroundColor=clrs[i]; //use backgroundColor instead of background since compatible with most browsers
        //check the clicked square clr with the picked 1
        sq[i].addEventListener("click",function(){
            var clrSelected=this.style.backgroundColor;
            if(clrSelected === pickedclr){
            //alert("corect clr");
            disp.textContent="Correct !!";
            play.textContent="PLAY AGAIN?";
            changeclr(clrSelected);
            h1clr.style.backgroundColor=clrSelected;
            }
            else
            {
                this.style.backgroundColor="#232323";
                disp.textContent="Try Again !!";
            }
        })
    }
}


//when we get correct ans all squares get same clr
 //we write a function to do so and call it when condition gets true
 function changeclr(color)
 {
     for(var i=0;i<sq.length;i++)
     {
        sq[i].style.backgroundColor=color;
     }
 }

 //picking a random color 
 //math.random goes from 0 to 1 excluding 1
 //so when we do math.random() * clrs.length 
 //clrs.lenght will give exat no.and we want index less than length to acees it
 //so no probs. we can go with math.random
function selRandom()
{
    var random=Math.floor(Math.random() * clrs.length);
    return clrs[random];
}

//generate random color
function generateRandom(num)
{
    // arr=[] ...initialize this way
    var arr=[];
    for(var i=0;i<num;i++)
    {
        //form a color and push to array
        //maintain rgb format
        arr.push(formColor());
    }
    return arr;
} 

function formColor()
{
    //select random no from 0 to 255 for red green and blue
    var r=Math.floor(Math.random() * 256);
    var g=Math.floor(Math.random() * 256); 
    var b=Math.floor(Math.random() * 256);
    //return in proper format in which color is displayed in console..
    //check proper spaces
    // or else == gives false
    return "rgb(" + r + "," +" "+ g + "," +" "+ b + ")";
}

//on clicking play again or new clr button generate colors
play.addEventListener("click",function(){
        clrs=generateRandom(numsquare); //generating random colors
        pickedclr = selRandom(); //picking a randon colors from generated.
        s1.textContent=pickedclr;
        //give colors to the squares the logic of correct is already written and connected with sq selector 
        for(var i=0;i<clrs.length;i++)
        {
            sq[i].style.backgroundColor=clrs[i];
        }
        h1clr.style.backgroundColor="cornflowerblue";     
        play.textContent="NEW COLORS";
         //empty the text in span 
         disp.textContent="";
});

//hard and easy mode
easybtn.addEventListener("click",function(){
    h1clr.style.backgroundColor="cornflowerblue";
    easybtn.style.backgroundColor="cornflowerblue";
    hardbtn.style.backgroundColor="white";
     //empty the text in span 
     disp.textContent="";
     //generate 3 rnadom colors
     numsquare=3;
     clrs=generateRandom(numsquare);
     //select one randomly
     pickedclr=selRandom();
     //update h1
     s1.textContent=pickedclr;
     //hide last 3 blocks and display upper 3 blocks
     logic();
     //hide last 3 blocks
     for(var i=3;i<sq.length;i++)
     {
        // sq[i].style.backgroundColor="#232323";
         document.querySelectorAll(".square")[i].style.display="none";
     }
});

hardbtn.addEventListener("click",function(){
    h1clr.style.backgroundColor="cornflowerblue";
    hardbtn.style.backgroundColor="cornflowerblue";
    easybtn.style.backgroundColor="white";
    //make text in disp clear
    disp.textContent="";
    numsquare=6;
    clrs=generateRandom(numsquare); //generating random colors
    selectRandom=selRandom(); //picking a randon colors from generated.
    pickedclr=selectRandom;
    s1.textContent=pickedclr;//updating h1
    logic();
    for(var i=3;i<sq.length;i++)
    {
       // sq[i].style.backgroundColor="#232323";
        document.querySelectorAll(".square")[i].style.display="block";
    }
});