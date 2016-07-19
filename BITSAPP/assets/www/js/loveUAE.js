
var parkNameList = [   'PARKS IN DUBAI, UAE',
                        'SHEIKH ZAYED MOSQUE IN ABU DHABI, UAE',
                        'SHARJAH ARCHAEOLOGICAL MUSEUM, SHARJAH, UAE',
                        'RAS AL KHOR WILDLIFE SANCTUARY, UAE',
                        'CYCLING TRACKS, AL QUDRA, UAE', 
                        'DUBAI MUSEUM, BUR DUBAI, UAE', 
                        'BEACHES AND THE WALK, JBR, DUBAI, UAE', 
                        'Burj khalifa', 
                        'Burj Al Arab',
                        'Dubai Mall',
                        'Palm Island',
                        'Desert Safari'];

var parkDescList = ['Get away from the hustle and bustle of the busy city life   and find yourself in a sanctuary of the  most  wonderful parks of  Dubai. With various amenities such as biking tracks for adults  and playgrounds for children, the parks prove to be an ideal  place for everyone. Prominent parks include Safa Park, Al Barsha Park and Za’abeel Park.  Once you get over the impeccable upkeep of the gardens and the overall splendor  of the parks (which include Bose speakers at every second corner), whether it’s for a cup of  coffee at Zabeel  ,boating through the tranquil waters at Al Barsha  or just sight-seeing  at Safa   , you will enjoy every minute of your experience.',
                       'One of the most prominent sights of Abu Dhabi, the  Sheikh Zayed  Grand  Mosque completely lives up to the grandeur that it boasts of. Home to the world’s largest hand-knotted carpet and chandeliers embedded with Swarovski crystals, the mesmerizing architecture mosque is the result of the vision of famous  artists from around the globe. A visit is mandatory, not only to observe all these wonderful aspects of the mosque, but to also to soak in the Islamic culture of the UAE.  During the day, entrance  yourself with the fine intricacies of architecture and the beautiful fountains overlooking the mosque , whereas at night watch the lunar illumination which captivates the senses.',
                       'For the history buffs out there, the Sharjah archaeological museum offers you the opportunity of delving into Sharjah’s past and taking a deeper look into the history of the entire region and its cultural evolution. Become part of thousands of years of culture as you take a trip through all the excavations and artifacts that have been found in Sharjah. Located in the heart of the city, a half-day tour of the museum will allow you to see the  fusion of past and the present of the local culture as well as other Gulf cultures with the periodic special exhibitions. ',
                       'One of the biggest reserves in the UAE that is open to the public, the Ras Al Khor sanctuary (which translates to “Cape of the Creek”) lies close to Dubai’s creek and is one of the most protected urban areas in the world. The 620 hectares are home to more than 20,000 water birds and 67 species and a multitude of flora and fauna. However, one of the major attractions of this sanctuary are the flamingos that migrate through this region during the winter. So, grab your camera and have a literal field day enjoying all that this rich environment has to offer!',
                       'For all the adventure sports or just cycling enthusiasts, the cycling tracks of Al Qudra provide the perfect opportunities while you’re in the UAE. The tracks accommodate both beginners and enthusiasts of long-distance cycling with one 18 kilometer track and the other being close to 50 kilometers. Experience the unique dunes and scenery of these tracks and pass through the famous Bab Al Shams Hotel, a place to rest and grab a cup of coffee. Cycles can easily be rented in the area with pre-set tracks adjusted according to your needs. So make sure you don’t miss out!',
                       'In case you’re curious about just how this vibrant city became what it was, the Dubai Museum is the answer to all your questions. Located in the Al Fahidi fort, which is the oldest building in Dubai, this museum guarantees you an amazing insight into the rich culture and heritage of Dubai. Divided into various wings such as the monument wing and the astronomy wing, the museum captures the interest of every visitor that walks through its doors. Visit and get immersed in the past of Dubai and you will come out with a new appreciation of the journey that this ever-growing city has made to get to where it is now. ',
                       'You haven’t experienced the “posh” Dubai until you don’t step into the JBR (Jumeirah Beach Residences) and the JBR walk.  With its open markets and  fine dining elite restaurants, JBR has a vibrant  nightlife that’s central to the Dubai life. But beware! The shopaholic in you will be awoken by the array of fashion, home and handicraft boutiques. Don’t worry; you can still escape to a long stretch of the beach that runs along this boulevard. Enjoy a lazy evening coffee or a fancy dinner by the edge of the beach and immerse yourself in the rhythm of this amazing city. ',
                       'Ever wondered what is feels to be literally in cloud nine or in the seventh heaven?  With Burj Khalifa’s ‘At the Top’ ,mesmerise yourself with the magnificent skyline of Dubai at 125 floors  above the ground. If you aim higher, why not try the VIP observatory deck  on the 148th floor? Discover the history of Emirates as it has grown from a barren land to an ever-advancing city. ',
                       'Sitting on an island, this sail-shaped building is known for its exuberant luxury. Designed by Atkins, even before the Burj Khalifa, Burj Al Arab has been a significant symbol to Dubai’s identity over the years. At dawn , watch the luminescent sun rise into the horizon and illuminate the turquoise waters of the Emirates. A vista that is bound to leave indelible impressions upon your mind! ',
                       'Dubai Mall, also known as the world’s largest mall, is also home to the largest aquarium in the world. With one of the greatest range of shops, it stands to be a prime shopping location for tourists and residents. The great range of restaurants from around the world will satisfy the foodie in you. The waterfront also boasts a great range of restaurants, all of which overlook the musical fountains that are bound to mesmerize you with the towering Burj Khalifa in the background',
                       'These man made islands are known to be designed in the shape of the most sighted trees around Dubai and the Gulf.  If the architecture isn’t enough to enthrall you, these islands also have their own mono-rail which will allow you to take in all the sights of this magnificent area of Dubai. These islands are also home to the iconic Atlantis Hotel, which is a must visit',
                       'What’s a visit to Dubai without having seen the Desert Safari? Incomplete, unreal and just not right, right?Desert Safari is a not-to-be-missed opportunity that allows you to experience the real Arabia. Gaze upon the exotic scenery of the dunes of the Emirates and pamper yourself in the lap of nature’s beauty. Buggy –riding, sand-surfing  and the electrifying ride on the four-wheel drive as you bash through the dunes at speeds faster than that of light will create unforgettable memories.    Watch your kids build sand-castles,paint their hands with henna and ride on camels through the desert. Relish the scrumptious Arab delicacies as you tap your feet to the vivacious beats of Arab music and watch with amazement the elegance of the belly dancers. There is so much to do, so much for everyone to enjoy!'
                       ];

var parkImageList = ['../img/park.jpg',
                        '../img/SHEIKHZAYEDGRANDMOSQUE.jpg',
                        '../img/museum.jpg',
                        '../img/wildlife.jpg',
                        '../img/cycle.jpg',
                        '../img/DubaiMuseum.jpg',
                        '../img/beaches.jpg',
                        '../img/burjkhalifa.jpg',
                        '../img/burjalarab.jpg',
                        '../img/DubaiMall.jpg',
                        '../img/palm.jpg',
                        '../img/safari.jpg'
                        ];


$.each(parkNameList, function(i, park) {
	$("#loveUAEContainer").append('<div class="ui-grid-a UAE-Content" onclick="descOfUAE(\''+i+'\')"> <div class="ui-block-a UAE-img" style="background-image: url('+parkImageList[i]+')"></div> <div class="ui-block-b UAE-desc">'+parkNameList[i]+'</div> </div> <div class="UAE-div-grey-line"></div>');
});


function descOfUAE(position) {
	UAE_POSITION = position;
	$.mobile.changePage("../pages/UAEDesc.html")
}
