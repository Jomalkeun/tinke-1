/**
 * ...
 * @author Dominique Wong
 */

$(document).ready(function() {
	   
	$('.btn_share.fb').click(function(){
		shareFacebook(document.URL);
		return false;
	});
	$('.btn_share.tw').click(function(){
		shareTwitter('TinkÃ© - The quick, revolutionary way to check your fitness and wellness is now at your fingertip',document.URL);
		return false;
	});
	
	$("#ShareHolderBtn").bind("touchstart", function(e) {

	   $(this).toggleClass("active");

        });
$("#ShareHolderBtn").children().bind("touchstart", function(e) {
 e.stopPropagation();
});
			
  });

var shareAPI = {
	facebook:"https://www.facebook.com/sharer/sharer.php?u=${url}",
	twitter:"https://twitter.com/share?url=${url}&text=${msg}",
	pinterestSelect:"${page}",
	email:"mailto:?subject=${title}&body=${msg}%20${url}"
}

function shareFacebook(url) {
	
	var url = replaceTokens(shareAPI.facebook, { url:encodeURIComponent(url) });
	window.open(
	url, 
	'facebookShareDialog', 
	'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=400,width=600');
}
function shareTwitter(msg,url) {
	var url = replaceTokens(shareAPI.twitter, { url:encodeURIComponent(url), msg:encodeURIComponent(msg) });
	window.open(
	url, 
	'twitterShareDialog', 
	'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=400,width=600');
}
function sharePinterest(page) {
	var url = replaceTokens(shareAPI.pinterestSelect, {page:page});
	
	window.open(
	url,
	'pinterestShareDialog',
	'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=480,width=800');
}

function shareEmail(btn,title,msg,url) {
	var url = replaceTokens(shareAPI.email, { title:encodeURIComponent(title), msg:encodeURIComponent(msg), url:encodeURIComponent(url)});
	
	btn.attr('href', url);
}

function replaceTokens(text, paramObj, replaceUndefineds) {
	if (! paramObj)
	{
		return text;
	}
	else
	{
		var regExp = /\$\{([\w'-]+)\}/g;	
		var cleanText = text.replace(regExp, function()
		{
			return paramObj[ arguments[1] ];
		});
		
		return cleanText.replace(/undefined/gi, replaceUndefineds);
	}
}