function swichTab(tabId, info, tab) {	//���û��л�tab
	chrome.tabs.getSelected(null, function(tab) {
        cur_tab = tab;
		
		tabPageHandle(tab);
    });
}

function updateTab(tabId, info, tab) {	//���û�ˢ��tab
	chrome.tabs.getSelected(null, function(tab) {
        cur_tab = tab;
		
		if (info.status == "complete") {
			tabPageHandle(tabId, tab);
		}
    });
}

function getHost(url) { 
        var host = "null";
        if(typeof url == "undefined"
                        || null == url)
                url = window.location.href;
        var regex = /[.^\:]*\:\/\/([^\/]*).*/;
        var match = url.match(regex);
        if(typeof match != "undefined"
                        && null != match)
                host = match[1];
        return host;
}

// ���imageSearch
function isGoogleImageSearchUrl(url)
{
	var signStr = "http://" + getHost(url) + "/imgres";
	return url.substring(0, signStr.length) == signStr;
}

function isGoogleHttpSearchUrl(url)
{
	var signStr = "http://" + getHost(url) + "/url";
	//alert(signStr);
	//alert(url.substring(0, signStr.length));
	return url.substring(0, signStr.length) == signStr;
}

function getHttpsUrl(url)
{
	var regex = /http\:\/\//;
	return url.replace(regex, "https://");
}

function getGoogleImageUrl(url)
{
	var imageUrl = "null";
	var regex = /imgurl=([^\&]*).*/;
	var match = url.match(regex);
        if(typeof match != "undefined"
                        && null != match)
                imageUrl = match[1];
	return imageUrl;
}

function getSearchSizeUrl(url)
{
	var sizeUrl = "null";
	var regex = /\&url=([^\&]*).*/;
	var match = url.match(regex);
        if(typeof match != "undefined"
                        && null != match)
                sizeUrl = match[1];
	return sizeUrl;
}

function getHttpDomain(url)
{
	var httpDomain = "null";
	var regex = /(http\:\/\/[^\/]*).*/;
	var match = url.match(regex);
        if(typeof match != "undefined"
                        && null != match)
                httpDomain = match[1];
	return httpDomain;
}

function tabPageHandle(tabId, tab)
{
	chrome.tabs.executeScript(tabId, {file: "jquery-1.7.2.js"});
	chrome.tabs.executeScript(tabId, {file: "esop.js"});
}

var img_siteurl = null; // ��¼ԭʼ��ַURL
var img_url = null;
var img_actived = false;

var cur_tab;
// chrome.tabs.onActiveChanged.addListener(swichTab);	//����listener
chrome.tabs.onUpdated.addListener(updateTab);

// chrome.tabs.getSelected(null, function(tab) {	//�״�����background page���tab
//     cur_tab = tab;
// 	tabPageHandle(tab);
// });