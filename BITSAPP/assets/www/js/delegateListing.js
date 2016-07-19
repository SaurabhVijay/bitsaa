
var delegateNameList = [ 'Jilani Sheikh',
                        'Sanjay Agarwal',
                        'Ujwal Kalpavraksh',
                        'Hari Govind',
                        'M P Sharma', 
                        'Dr Kanak Madrecha', 
                        'Ghurair Shaikh', 
                        'Rajesh Kumar Jain', 
                        'Luv Suneja',
                        'Lalit Kumar Jain',
                        'Navneet Singhal',
                        'Kesar kothari',
                        'Sanndhya Prakash'];

var delegateDescList = ['CEO, ECS ME LLC, Dubai',
                       'General Manager, OBS Automotive LLC, Dubai',
                       'Manager -Proposals,	Petrofac International Limited,	Sharjah',
                       'Consultant,	Majid Al Futtaim Properties, Dubai',
                       'Chairman and President, Techmart, Dubai',
                       'Managing Director and Principal Consultant, Dr Kanak Madrecha & Associates FZ LLE, Dubai',
                       'Manager, Dubai',
                       'Engineer, Alwar',
                       'Business Development Manager, Murano Lighting Company LLC, Sharjah',
                       'Project Manager, Emircom, Dubai',
                       'MD, SANGAM SALES, Aligarh',
                       'cmd, elfit arabia, Ajman',
                       'FOUNDER & MANAGING DIRECTOR, BEACON ENERGY SOLUTIONS, Dubai'
                       ];

var delegateImageList = ['../img/jilani.jpg',
                         '../img/Sanjay.jpg	',
                         '../img/default.png',
                         '../img/default.png',
                         '../img/default.png',
                         '../img/default.png',
                         '../img/default.png',
                         '../img/default.png',
                         '../img/default.png',
                         '../img/Lalit.jpg',
                         '../img/default.png',
                         '../img/default.png',
                         '../img/default.png'
                         ];

$(document).ready(function() {
	document.addEventListener("deviceready", onDeviceReady,false);
});


function onDeviceReady() {
	appendSpeakers();	
}

function appendSpeakers() {
	
	$.each(delegateNameList, function(i, speaker) {
		$("#delegatesContainer").append('<div class="ui-grid-a speaker-content" onclick="delegateDesc(\''+i+'\')"> <div class="ui-block-a speaker"> <div class="speakerImg" style="background-image: url('+delegateImageList[i]+');"></div> </div> <div class="ui-block-b speakerDesc"> <p class="speaker-name">'+delegateNameList[i]+'</p> <span class="about-speaker">'+delegateDescList[i]+'</span> <p class="moreInfo">More Info</p> </div> </div>')	
	});
}

function delegateDesc(position) {
	DELEGATE_POSITION = position;
	$.mobile.changePage("../pages/delegateDescpage.html");
}