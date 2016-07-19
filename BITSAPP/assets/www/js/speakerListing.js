
var speakerNameList = [ 'Praveen Kumar',
                        'Roger Narayan',
                        'B. Kinnera Murthy',
                        'Ranvir Trehan',
                        'Rajat  Gupta', 
                        'Harsh Bhargava', 
                        'Anita Sakuru', 
                        'Ajay Chaturvedi', 
                        'Anu Hasan'];

var speakerDescList = ['Praveen Kumar is rated as one of the Top 100 Celebrities in India by Forbes and among the 10 Best Stand-Up Comedians. With over 900 shows to his name, he will be enrapturing the audience  with his intelligent humor  at this BGM 2017.He pursued Management Studies from Bits Pilani, Rajasthan in 1998.',
                       'Roger Narayan, a highly-celebrated  Hollywood star and a revered Indian Film actor  was nominated for the ‘Emerging Top Star of Asia  Award’  He  attained  his Bachelor’s degree from Bits Pilani, Rajasthan in 1997   and is prepared to intrigue everyone with his speech, ‘Right-Brained’.',
                       'B. Kinnera Murthy,is the author of ‘Bits of Success’, a Strategy Consultant and  Director of  Corporate Boards and Academic Governing Councils , who served as Dean and Professor of Strategic Management at The Administrative Staff College of India . Her undergraduate education  was from Bits Pilani, Rajasthan in 1969 . As a panel speaker at BGM 2017, Dr. Murthy will enlighten us with ‘Leadership and Strategy Lessons from Mahabharata’',
                       'Ranvir Trehan, a technologist-cum-entrepreneur and a devotee of philanthropy  was the former CEO of SETA Corporation and also the Vice Chairman of  Apptis Holdings who completed  electrical engineering from Bits Pilani, Rajasthan in 1961. A prominent name in the American industry, this keynote speaker is determined to leave an indelible impression with his talk on ‘Reflections of a Multidimensional Career’. ',
                       'Rajat  Gupta, a powerful business magnate  and Director of  McKinsey and Materials Practice,Asia is a gold-medalist from   Bits Pilani, Rajasthan who attained his  engineering in 1986 . With the vision to transform entrepreneurship and create global leaders, his speech will shed light on ‘TBD-Management and Government’',
                       'Harsh Bhargava, is the Editor of the inspirational self-help book, ‘BITS of Success’  who acquired his postgraduate studies from Bits Pilani , Rajasthan in the year of 1973. He is currently working as the Adjunct Professor at  Vishwa Vishwani School of Business, VSSB and has also served at The ICFAI Business School, Hyderabad. With the theme of ‘Bitsians-Wake up!’,he is all set to transform lives.',
                       'Anita Sakuru, Chief Operating Officer of Ekham Mobile Technologies completed her education from Bits Pilani, Rajasthan in 1987. She will be sharing her knowledge  and insightful  experiences on the theme of ‘Non-Profits and partnership with Governmental Programs’ as a panel speaker.',
                       'Ajay Chaturvedi, founder of India’s first non-profit organization in the field of rural development, ‘HarVa-Harnessing   Value’  which empowers women in sustainable farming is an engineer from Bits Pilani (1991) . An honoree  of the ‘Young Global Leader of 2013’ which was  presented by the World Economic Forum, Mr. Chaturvedi is determined  to inspire us with his talk , ‘ Impactful Innovations and Entrepreneurships Leading to a Meaningful Life!’',
                       'Anu Hasan, is  an alumnus from Bits Pilani, Rajasthan who graduated in 1988. She is an admired film actress and  a television presenter who reached glorious heights with  her talk show, ‘Koffee with Anu’ . This renowned entrepreneur has also earned the position as the  Director of the UK-based technology firm, ’Ivy Mobility’ and Head of South India Cine Creations. As the author of a novel which describes her journey of success and transition of careers, she will enlighten us with her definition of ‘Life- Sunny Side Up!’'
                       ];

var speakerImageList = ['../img/praveen.jpg',
                        '../img/roger.jpg',
                        '../img/kinnera.jpg',
                        '../img/Ranvir.jpg',
                        '../img/Rajat.jpg',
                        '../img/harsha.jpg',
                        '../img/anita.jpg',
                        '../img/ajay.jpg',
                        '../img/anu.jpg'
                        ];

$(document).ready(function() {
	document.addEventListener("deviceready", onDeviceReady,false);
});


function onDeviceReady() {
	appendSpeakers();	
}

function appendSpeakers() {
	
	$.each(speakerNameList, function(i, speaker) {
		speakerDescription = speakerDescList[i].slice(0,70)+"...";
		$("#speakerContainer").append('<div class="ui-grid-a speaker-content" onclick="speakerDesc(\''+speakerNameList[i]+'\', \''+speakerDescList[i]+'\', \''+speakerImageList[i]+'\')"> <div class="ui-block-a speaker"> <div class="speakerImg" style="background-image: url('+speakerImageList[i]+');"></div> </div> <div class="ui-block-b speakerDesc"> <p class="speaker-name">'+speakerNameList[i]+'</p> <span class="about-speaker">'+speakerDescription+'</span> <p class="moreInfo">More Info</p> </div> </div>')	
	});
}

function speakerDesc(name, desc, image) {
	SPEAKER_NAME = name;
	SPEAKER_DESC = desc;
	SPEAKER_IMG = image;
	$.mobile.changePage("../pages/speakerDescpage.html");
}