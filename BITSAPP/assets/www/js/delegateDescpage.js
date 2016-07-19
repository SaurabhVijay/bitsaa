
var newLineChar = '\n';

var DELEGATE_FULL_DESC = ['CEO, ECS ME LLC, Dubai, United Arab Emirates ~ +971508804896 ~ jilani@ecsme.ae ~ Batch 1986	~ BITS ID - 86C3PS622 Pilani',
                      'General Manager,	OBS Automotive LLC, Dubai, United Arab Emirates	~ 971507193160	~ agro230366@gmail.com	~ Batch 1982 ~ BITS ID - 82A1PS229 ~ Chemical Eng, Pilani',
                      'Manager - Proposals, Petrofac International Limited, Sharjah, United Arab Emirates ~ +971-50-593-1694 ~ ujwalmk@gmail.com ~ Batch 1995 ~ BITS ID - 95A1PS242	~ B.E.(Hons) Chemical, Pilani',
                      'Consultant, Majid Al Futtaim Properties, Dubai, United Arab Emirates	~ 00971504588384	~ harigovind14981@gmail.com	~ Batch 1972	~ BITS ID - 72S04062	~ B.Sc.(Hons) Physical Sciences, Pilani',
                      'Chairman and President, Techmart, Dubai, United Arab Emirates ~ +971504593122	~ mps@techmartworld.com ~ Batch 1962 ~ BITS ID - 183/1962	~ BE Mechanical, Pilani',
                      'Managing Director and Principal Consultant, Dr Kanak Madrecha & Associates FZ LLE, Dubai, United Arab Emirates ~ +971506583159 ~ dr.kanak.madrecha@gmail.com ~ Batch 1974 ~ BITS ID - 1974E03695	~ BE (Hons.) Mechanical Engg, Pilani',
                      'Manager, Dubai, United Arab Emirates	~ 00971507682655	~ s.ghurair@gmail.com ~ Batch 2001 ~ BITS ID - 2001U8PS094	~ Electronics &n Instrumentation	Dubai',
                      'Engineer, Alwar, India	~ +919352203707	~ melcon_transformers@yahoo.com ~ Batch 1974 ~ BITS ID - 74xxx397	~ BE(Hons) Mechanical, Pilani',
                      'Business Development Manager, Murano Lighting Company LLC, Sharjah, United Arab Emirates	~ +97165776399 ~ luvsuneja@gmail.com ~ Batch 2005, Dubai',
                      'Project Manager, Emircom	Dubai, United Arab Emirates	~ 00971557649843	~ lalit_kjain@hotmail.com ~ Batch 1976 ~ BITS ID - 76F06370 ~EEE, Pilani',
                      'MD, SANGAM SALES, Aligarh, India	~ 09359508880 ~ navsinghal14@gmail.com ~ Batch 1976 ~ BITS ID - 76S01267 ~ B. Pharm (Hons), Pilani',
                      'CMD,	Elfit Arabia Ajman, United Arab Emirates ~ +971506353067 ~ kotharikesar@gmail.com	~ Batch 1974	~ BITS ID- 74e03 486 ~ Electrical	Pilani',
                      'FOUNDER & MANAGING DIRECTOR,	BEACON ENERGY SOLUTIONS, Dubai, United Arab Emirates ~ +971505512481	~ sandhya.p@bitsaa.org ~ Batch 987 ~ BITS ID- 87A6PS289 ~MASTER OF MANAGEMENT STUDIES, Pilani'];

$("#delegateImg").css('background-image','url('+delegateImageList[DELEGATE_POSITION]+')')
$("#delegateName").text(delegateNameList[DELEGATE_POSITION]);


//var result = DELEGATE_FULL_DESC[DELEGATE_POSITION].replace("~", "\n");

var result = DELEGATE_FULL_DESC[DELEGATE_POSITION].split("~").join("\n")
$("#delegateDesc").text(result);