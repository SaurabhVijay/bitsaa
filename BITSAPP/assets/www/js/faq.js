

$('.faqDescList').empty();

var faqRegQue = ['1. How do I register ?',
              '2. What is included in my registration fee?',
              '3. Can I register on the venue',
              "4. Can't register for event through registration site?",
              '5. Can I register now and pay when I arrive for Reunion?',
              '6. May I receive a registration refund if I have to cancel my plans to attend reunion?',
              '7. How do I change or add to my registration once it has been submitted?',
              '8. Will I receive an event admission tickets?',
              '9. 1-day or 2-day passes available for the event?',
              '10. I registered and paid online, but my name is not on the “Delegates” list. What do I do?',
              '11. How can I register as a speaker?',
              '12. What is the topic of conference?',
              '13. Who all are coming for the event from my batch?',
              "14. Can't get access to delegate information and host team through this app?",
              '15. How do to update my profile in this app?',
              ];
var faqRegAns = [' Register online at http://bitsaaglobalmeet.org/event/bgm2017/. The prompt submission of your registration materials will ensure that you receive reserved spaces at meals and other events. Full payment is necessary to guarantee your reservation.<br/> Registering early is important, so that we can do our best to plan activities.',
              ' The fee covers Lunches on both conference days ie 5th and 6th of January,<br/> Day1: High Tea on Day 1 <br/> Day2: Gala Dinner and Entertainment <br/> Day3: Desert Safari, Dinner and Cultural Programs <br/>Please note that cost of visas, hotel accommodation (including breakfast) and local sightseeing tours are to be met from your account.',
              'a. Yes. Registration fee to register on the venue would be 950.',
              'a. If you find any technical difficulty in registering through our BGM Website, Kindly get in touch with the host team or mail us at bgm2017@bitsaa.org .',
              'a. No, payment must accompany the reservation.',
              'a. The registration can be cancelled on or before 21st October and  amount AED150 will be deducted as administrative expenses . After 21 October there will be no refund. ',
              'a. Kindly mail us at  bgm2017@bitsaa.org briefing about the changes you would like to incorporate in your registration details.',
              'a. Yes, You will be receiving a confirmation email after successful registration for the event.It will also contain details about your travel and accommodation. ',
              'a, No',
              'a. This app gets updated once in a week. If you don’t find your name in the delegate list even after a week, Please contact us at bgm2017@bitsaa.org.',
              'a. To register as speaker for this event. Kindly contact Sandhya sandhya@bitsaa.org and cc to jilani@ecsm.ae ',
              'a. Theme of the Conference is Inspiration, innovation industry',
              'a. Please check the delegates list in this app. You can search for your batchmates by mentioning campus location followed by year of joining eg: Dubai Campus 2012',
              'a. Delegates and host team  informations are kept confidential to avoid misuse. Everyone registered for BGM 2017 have been provided with a password. Use that password to access the informations.',
              'a. Your profile in this app can be modified only by the admin. Kindly send a mail at bgm2017@bitsaa.org briefing about the changes to be made.',
              ];

var faqAccomodationque = ['1. Are children welcome?',
                          '2. What’s the dress code?',
                          '3. Is there any fun events for spouse and\or kids?',
                          '4. Will sheets and towels be provided in the college rooms?',
                          '5. Can I volunteer to work for this event?',
                          '6. Is free food provided for all three days?',
                          '7. Will there be transport?',
                          '8. Will refreshments be provided ?',
                          '9. Where is the accommodation?',
                          '10. How will this conference benefit me?',
                          '11. Is it all about serious discussion or fun elements included?',
                          '12.	Can we skip events and attend only the ones we prefer?'
                          ];

var faqAccomodationans = ['a. Yes, they can join you for the entertainment events after the conference. We are making arrangements to keep spouse and children entertained.',
                          'a. Suggested attire for all fun events is casual (e.g. khakis, polo shirts, comfortable shoes, etc.) with the exception of conference and the Gala dinner, where we recommend business attire.',
                          'a. Yes, We are planning many fun events for spouse, which will be updating shortly.',
                          'a. No, sheets and towels will not be provided in the hostel room.',
                          'a. Yes, Kindly contact Mr. Jilani at jilani@ecsme.ae',
                          'a. No, but there is a canteen in the BPDC where food can be purchased on the first 2 days of the event.',
                          'a. Please have a look at the app for further information under the " Travel desk " Tab.',
                          'a. Yes, water and other soft drinks will be provided throughout the event.',
                          'a. Accommodation is provided ranging from 7 Star,5 Star, 4 star, 3 star and also the BPDC Hostel . For more information please check the "travel desk " tab.',
                          'a. You will be able to build up your network of connections and also meet old time friends.',
                          'a. Yes, the conference covers knowledge sharing during the day with loads of fun event in the evening.',
                          'a. The choice is yours. But it is suggested to attend all as it will be good. :)',
                          ];

var faqSponsorque = ['1. How do I sponsor this event?',
                     '2. What privilege do I get as a sponsor?',
                     '3. How can I exhibit my products?'
                     ];

var faqSponsorans = ['a. Kindly get in touch with host team or email us at bgm2017@bitsaa.org.',
                     'a. As sponsor you get to exhibit your products, set up kisoki  , put up banners at the conference venue and  sponsor advertisement Will be posted on all BGM 2017 sites.',
                     'a. In order to exhibit your products you need to be a sponsor of this event.'];

if( service == 1){
	 $('.faqDescList').append('<div class="faqTop"></div>');
	 $('.faqTop').text('Registration');
	$.each(faqRegQue,function(que,val){
		 $('.faqDescList').append('<div style="width:92%;margin:auto;"><p class="faq-que">'+val+'</p><p style="margin-top:5px;">'+faqRegAns[que]+'</p></div>');
	 });
}
 
if( service == 2){
	$('.faqDescList').append('<div class="faqTop"></div>');
	$('.faqTop').text('Accomodation');
	$.each(faqAccomodationque,function(que,val){
		 $('.faqDescList').append('<div style="width:92%;margin:auto;"><p class="faq-que">'+val+'</p><p style="margin-top:5px;">'+faqAccomodationans[que]+'</p></div>');
	 });
}

if( service == 3){
	$('.faqDescList').append('<div class="faqTop"></div>');
	$('.faqTop').text('Sponsor');
	$.each(faqSponsorque,function(que,val){
		 $('.faqDescList').append('<div style="width:92%;margin:auto;"><p class="faq-que">'+val+'</p><p style="margin-top:5px;">'+faqSponsorans[que]+'</p></div>');
	 });
}