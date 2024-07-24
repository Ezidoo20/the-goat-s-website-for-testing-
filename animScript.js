const mInfo = document.getElementById("marioInfo");
const wInfo = document.getElementById("wendellInfo");


mInfo.animate(
	[{transform:'translateX(-70%)',left:'30%'},
	{transform:'translateX(-35%)',left:'65%'}],
	{duration:1000,iterations:1,easing:'ease-in-out'});
wInfo.animate(
	[{transform:'translateX(-30%)',left:'70%'},
	{transform:'translateX(-65%)',left:'35%'}],
	{duration:1000,iterations:1,easing:'ease-in-out'});


//(function frame(){
//	
//	
//	requestAnimationFrame(frame);
//})()