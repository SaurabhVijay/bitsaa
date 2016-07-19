var googleapi = {
	authorize : function(options) {
		var deferred = $.Deferred();

		// Build the OAuth consent page URL
		var authUrl = 'https://accounts.google.com/o/oauth2/auth?' + $.param({
			client_id : options.client_id,
			redirect_uri : options.redirect_uri,
			response_type : 'code',
			scope : options.scope
		});

		// Open the OAuth consent page in the InAppBrowser
		var authWindow = window.open(authUrl, '_blank',
				'location=no,toolbar=yes');

		$(authWindow).on('loadstart', function(e) {
			var url = e.originalEvent.url;
			var code = /\?code=(.+)$/.exec(url);
			var error = /\?error=(.+)$/.exec(url);

			if (code || error) {
				// Always close the browser when match is found
				authWindow.close();
			}

			if (code) {
				// Exchange the authorization code for an access token
				$.post('https://accounts.google.com/o/oauth2/token', {
					code : code[1],
					client_id : options.client_id,
					client_secret : options.client_secret,
					redirect_uri : options.redirect_uri,
					grant_type : 'authorization_code'
				}).done(function(data) {
					deferred.resolve(data);
				}).fail(function(response) {
					deferred.reject(response.responseJSON);
				});
			} else if (error) {
				// The user denied access to the app
				deferred.reject({
					error : error[1]
				});
			}
		});
		return deferred.promise();
	}
};

$(document).ready(function() {
	document.addEventListener("deviceready", onDeviceReady, false);
});

function onDeviceReady() {

	setTimeout(function() {
		
		switch (localStorage.getItem('IS_VALID_USER')) {
		case true:
			$.mobile.changePage("pages/postLogin.html");
			break;

		case false:
			$.mobile.changePage("pages/loginpage.html");			
			break;
		default:

			break;
		}
	}, 3000);

	// Defaults to sessionStorage for storing the Facebook token
	openFB.init({
		appId : '1629653980686174'
	}); // BITSAA
}

function loginWithFacebook() {
	openFB.login(function(response) {
		if (response.status === 'connected') {
			SOCIAL_ACCESS_TOKEN = response.authResponse.accessToken;
//			alert('Facebook login succeeded, got access token: '
//					+ response.authResponse.accessToken);
			getFacebookProfileInfo();
		} else {
//			alert('Facebook login failed: ' + response.error);
		}
	}, {
		scope : 'email,public_profile'
	}); // public_profile, email

}

function FBerrorHandler(error) {
	console.log(error.message);
}

function getFacebookProfileInfo() {

	openFB.api({
		path : '/me?fields=id,name,email,picture.type(large),gender',
		success : function(data) {
//			alert(JSON.stringify(data));
			SOCIAL_USER_NAME = data.name;
			SOCIAL_USER_EMAIL = data.email;
			USER_GENDER = data.gender;
			SOCIAL_USER_PROFILE_PIC_URL = data.picture.data.url;
			localStorage.setItem('IS_VALID_USER', true);

			$.mobile.changePage("../pages/postLogin.html");
		},
		error : FBerrorHandler
	});
}

function loginWithGplus() {

	googleapi
			.authorize(
					{
						client_id : '997519897586-8sqt86st6ctuo47c0v7ibck7dnjuk9un.apps.googleusercontent.com',
						redirect_uri : 'http://localhost', // urn:ietf:wg:oauth:2.0:oob
						scope : 'https://www.googleapis.com/auth/plus.login https://www.googleapis.com/auth/userinfo.email'
					}).done(function(data) {
				SOCIAL_ACCESS_TOKEN = data.access_token;
				getGoogleProfileInfo(SOCIAL_ACCESS_TOKEN);

				localStorage.setItem('googleAccessToken', SOCIAL_ACCESS_TOKEN);
			}).fail(function(data) {
//				alert('Error Google Login' + data.error);
			});

}

function getGoogleProfileInfo(token) {
	console.log('TKN---' + token);
	var term = null;
	$
			.ajax({
				url : 'https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token='
						+ token,
				type : 'GET',
				data : term,
				dataType : 'json',
				error : function(jqXHR, text_status, strError) {
				},
				success : function(data) {
					var item;
					console.log(JSON.stringify(data));
					SOCIAL_USER_NAME = data.name;
					SOCIAL_USER_EMAIL = data.email;
					SOCIAL_USER_PROFILE_PIC_URL = data.picture;
					USER_GENDER = data.gender;
					localStorage.setItem('IS_VALID_USER', true);

					$.mobile.changePage("../pages/postLogin.html");
				}
			});
}

function loginWithLinkedIn() {
	$.mobile.changePage("../pages/postLogin.html");
}

function backHistroy(page) {
	if (page == "index") {
		$.mobile.changePage('../' + page + '.html');
	} else {
		$.mobile.changePage('../pages/' + page + '.html');
	}

}

function footerClick(result) {
	checkResult = result;
	switch (checkResult) {
	case "home":
		$.mobile.changePage('../pages/dashBoard.html');
		break;
	case "gallery":
		$.mobile.changePage('../pages/gallery.html');
		break;
	case "loveUAE":
		$.mobile.changePage('../pages/loveUAE.html');
		break;
	case "news":
		$.mobile.changePage('../pages/news.html');
		break;

	default:
		console.log('homePage');
		break;
	}

}

function bgmEvents() {
	$.mobile.changePage("../pages/dashBoard.html");
}

function speakerListingPage() {
	$.mobile.changePage("../pages/speakerListingpage.html");
}

function gallery() {
	$.mobile.changePage("../pages/gallery.html");
}

function news() {
	$.mobile.changePage("../pages/news.html");
}

function sponsor() {
	$.mobile.changePage("../pages/sponsor.html");
}
function delegates() {
	$.mobile.changePage("../pages/delegates.html");
}

function transport() {
	$.mobile.changePage("../pages/transport.html");
}

function loveUAE() {
	$.mobile.changePage("../pages/loveUAE.html");
}

function faq() {
	$.mobile.changePage("../pages/FAQ.html");
}

function travel() {
	alert("This Page is under Development");
}

function events() {
	alert("This Page is under Development");
}

function bitsaa_btn() {
	alert("This Page is under Development");
}

function register() {
	alert("This Page is under Development");
}

function faqRegistration() {
    service = 1;
	$.mobile.changePage("../pages/FAQDesc.html");
}

function faqAccomodation() {
	service = 2;
	$.mobile.changePage("../pages/FAQDesc.html");
}

function sponsor() {
	service = 3;
	$.mobile.changePage("../pages/FAQDesc.html");
}