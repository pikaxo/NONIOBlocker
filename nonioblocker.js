var toRemove = "";
var triesNonio = 0;
var triesCookies = 0;
var sucCount = 0;

console.log("BEGIN");
if (document.URL.indexOf("4men.pt") >= 0) { //Falta NONIO
	remCookies();
} else if (document.URL.indexOf("abola.pt") >= 0) { //Falta NONIO
	remCookies();
} else if (document.URL.indexOf("aquelamaquina.pt") >= 0) {
	remCookies();
	toRemove = ["layer_gatting", "sso_layer"];
	removeIdNONIO(toRemove);
} else if (document.URL.indexOf("blitz.pt") >= 0) {
	remCookies();
	toRemove = ["imp-content-gate-root"];
	removeIdNONIO(toRemove);
} else if (document.URL.indexOf("classificadoscm.pt") >= 0) {
	remCookies();
	toRemove = ["sso_layer"];
	removeIdNONIO(toRemove);
} else if (document.URL.indexOf("cmjornal.pt") >= 0) {
	remCookies();
	toRemove = ["layer_gatting", "layer_gattingLN158779e703c0cf0052639127a684ef48", "sso_layer"];
	removeIdNONIO(toRemove);
} else if (document.URL.indexOf("dinheirovivo.pt") >= 0) {
	remCookies();
	var iframes = document.querySelectorAll('iframe');
	for (var i = 0; i < iframes.length; i++) {
		iframes[i].parentNode.removeChild(iframes[i]);
	}
} else if (document.URL.indexOf("dn.pt") >= 0) {
	remCookies();
	toRemove = ["tp-modal", "tp-backdrop tp-active"];
	removeClassNONIO(toRemove);
} else if (document.URL.indexOf("evasoes.pt") >= 0) { //Falta NONIO
	remCookies();
//	var iframes = document.querySelectorAll('iframe');
//	for (var i = 0; i < iframes.length; i++) {
//		iframes[i].parentNode.removeChild(iframes[i]);
//	}
} else if ((document.URL.indexOf("expresso.pt") >= 0) || (document.URL.indexOf("famashow.pt") >= 0)) {
	remCookies();
	toRemove = ["imp-content-gate-root"];
	removeIdNONIO(toRemove);
} else if (document.URL.indexOf("flash.pt") >= 0) {
	remCookies();
	toRemove = ["layer_gatting"];
	removeIdNONIO(toRemove);
} else if (document.URL.indexOf("iol.pt") >= 0) { //autoportal;cidade;lux;m80;maisfutebol;radiocomercial;selfie;smoothfm;tvi;tvi24;tviplayer
	remCookies();
	toRemove = ["nonioBox"];
	removeClassNONIO(toRemove);
} else if (document.URL.indexOf("jn.pt") >= 0) {
	remCookies();
	toRemove = ["tp-modal", "tp-backdrop tp-active"];	
	removeClassNONIO(toRemove);
} else if (document.URL.indexOf("jornaldenegocios.pt") >= 0) {
	remCookies();
	toRemove = ["layer_gatting", "sso_layer"];	
	removeIdNONIO(toRemove);
} else if (document.URL.indexOf("maxima.pt") >= 0) {
	remCookies();
	toRemove = ["layer_gatting", "sso_layer"];
	removeIdNONIO(toRemove);
} else if (document.URL.indexOf("menshealth.pt") >= 0) {
	remCookies();
	
	/*
	var element = document.getElementsByClassName("df-post-content");
	element[0].classList.remove("df-post-content");
	*/
	
	var e = document.getElementsByTagName('article')[0];
	var d = document.createElement('nonio');
	d.innerHTML = e.innerHTML;

	e.parentNode.insertBefore(d, e);
	e.parentNode.removeChild(e);
	
	
	var iframes = document.querySelectorAll('iframe');
	for (var i = 0; i < iframes.length; i++) {
		iframes[i].parentNode.removeChild(iframes[i]);
	}
} else if (document.URL.indexOf("motor24.pt") >= 0) {
	remCookies();
	var iframes = document.querySelectorAll('iframe');
	for (var i = 0; i < iframes.length; i++) {
		iframes[i].parentNode.removeChild(iframes[i]);
	}
} else if (document.URL.indexOf("noticiasaominuto.com") >= 0) { //Falta NONIO
	remCookies();
	toRemove = ["pop-out-lightbox"];	
	removeClassNONIO(toRemove);
} else if (document.URL.indexOf("noticiasmagazine.pt") >= 0) {
	remCookies();
	var iframes = document.querySelectorAll('iframe');
	for (var i = 0; i < iframes.length; i++) {
		iframes[i].parentNode.removeChild(iframes[i]);
	}
} else if (document.URL.indexOf("publico.pt") >= 0) {
	toRemove = ["warning-nonio-overlay"];	
	removeClassNONIO(toRemove);
} else if (document.URL.indexOf("ojogo.pt") >= 0) {
	remCookies();
	toRemove = ["tp-modal", "tp-backdrop tp-active"];	
	removeClassNONIO(toRemove);
} else if (document.URL.indexOf("record.pt") >= 0) {
	remCookies();
	toRemove = ["layer_gatting", "layer_gattingLNe29da2b0224236971ac4a0cc518535f7"];
	removeIdNONIO(toRemove);
} else if (document.URL.indexOf("sabado.pt") >= 0) {
	remCookies();
	toRemove = ["layer_gatting"];
	removeIdNONIO(toRemove);
} else if (document.URL.indexOf("sapo.pt") >= 0) { //megahits,rfm,rr
	remCookies();
	toRemove = ["wrapperContentGatingNonio"];
	removeIdNONIO(toRemove);
} else if ((document.URL.indexOf("sic.pt") >= 0) || (document.URL.indexOf("siccaras.pt") >= 0)) {
	remCookies();
	toRemove = ["imp-content-gate-root"];
	removeIdNONIO(toRemove);
} else if (document.URL.indexOf("sickapa.pt") >= 0) {
	remCookies();
	toRemove = ["imp-content-gate-root"];
	removeIdNONIO(toRemove);
} else if (document.URL.indexOf("sicmulher.pt") >= 0) {
	remCookies();
	toRemove = ["imp-content-gate-root"];
	removeIdNONIO(toRemove);
} else if (document.URL.indexOf("sicnoticias.pt") >= 0) {
	remCookies();
	toRemove = ["imp-content-gate-root"];
	removeIdNONIO(toRemove);
} else if ((document.URL.indexOf("sicradical.pt") >= 0) || (document.URL.indexOf("tribunaexpresso.pt") >= 0)) {
	remCookies();
	toRemove = ["imp-content-gate-root"];
	removeIdNONIO(toRemove);
} else if (document.URL.indexOf("tsf.pt") >= 0) {
	remCookies();
	var iframes = document.querySelectorAll('iframe');
	for (var i = 0; i < iframes.length; i++) {
		iframes[i].parentNode.removeChild(iframes[i]);
	}
} else if (document.URL.indexOf("vidas.pt") >= 0) {
	remCookies();
	toRemove = ["layer_gatting"];
	removeIdNONIO(toRemove);
};

function removeClass(elemName) {
	var elem = document.getElementsByClassName(elemName);
	elem[0].remove();
};
function removeClassNONIO(remArray) {
	//console.log("REMOVE NONIO - tries=" + triesNonio);
	document.body.style.cssText = 'overflow:auto !important';
	document.getElementsByTagName('html')[0].style.overflow = "auto";
	triesNonio = triesNonio + 1;
	var i;
	for (i = 0; i < remArray.length; i++) {
		try {
			removeClass(remArray[i]);
			sucCount = sucCount + 1;
		} catch (erro) {
			//console.log("ERRO=" + erro);
		}
	}

	if (sucCount >= remArray.length) {
		triesNonio = 0;
		sucCount = 0;
	} else {
		if (triesNonio < 40) {
			setTimeout(function() {
				removeClassNONIO(remArray);
			}, 150);
		}	
	}	
};
function removeIdNONIO(remArray) {
	//console.log("REMOVE NONIO - tries=" + triesNonio);
	document.body.style.cssText = 'overflow:auto !important';
	document.getElementsByTagName('html')[0].style.overflow = "auto";
	
	triesNonio = triesNonio + 1;
	var i;
	for (i = 0; i < remArray.length; i++) {
		try {
			document.getElementById(remArray[i]).remove();
			sucCount = sucCount + 1;
		} catch (erro) {
			//console.log("ERRO=" + erro);
		}
	}
	
	if (sucCount >= remArray.length) {
		triesNonio = 0;
		sucCount = 0;
	} else {
		if (triesNonio < 40) {
			setTimeout(function() {
				removeIdNONIO(remArray);
			}, 150);
		}
	}
};
function remCookies() {
	//console.log("REMOVE COOKIES - tries=" + triesCookies);
	triesCookies = triesCookies + 1;
	try {
		removeClass("qc-cmp-ui-container qc-cmp-showing");
		document.body.style.cssText = 'overflow:auto !important';
		document.getElementsByTagName('html')[0].style.overflow = "auto";
		triesCookies = 0;
	} catch(erro) {
		//console.log("erro=" + erro);
		if (triesCookies < 40) {
			setTimeout(function() {
				remCookies();
			}, 150);
		}
	}
};