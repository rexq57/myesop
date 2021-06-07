// @author Rob W <http://stackoverflow.com/users/938089/rob-w>
// Demo: var serialized_html = DOMtoString(document);

function DOMtoString(document_root) {
    var html = '',
        node = document_root.firstChild;
    while (node) {
        switch (node.nodeType) {
        case Node.ELEMENT_NODE:
            html += node.outerHTML;
            break;
        case Node.TEXT_NODE:
            html += node.nodeValue;
            break;
        case Node.CDATA_SECTION_NODE:
            html += '<![CDATA[' + node.nodeValue + ']]>';
            break;
        case Node.COMMENT_NODE:
            html += '<!--' + node.nodeValue + '-->';
            break;
        case Node.DOCUMENT_TYPE_NODE:
            // (X)HTML documents are identified by public identifiers
            html += "<!DOCTYPE " + node.name + (node.publicId ? ' PUBLIC "' + node.publicId + '"' : '') + (!node.publicId && node.systemId ? ' SYSTEM' : '') + (node.systemId ? ' "' + node.systemId + '"' : '') + '>\n';
            break;
        }
        node = node.nextSibling;
    }
    return html;
}


function swichTab(tabId, info, tab) {	//���û��л�tab
	chrome.tabs.getSelected(null, function(tab) {
        cur_tab = tab;
		
		tabPageHandle(tab);
    });
}

function updateTab(tabId, info, tab) {	//���û�ˢ��tab
	chrome.tabs.getSelected(null, function(tab) {
        cur_tab = tab;
		
		tabPageHandle(tabId, info, tab);
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

function isFutuUrl(url)
{
	return url.indexOf("esop2.futuhk.com") != -1 || url.indexOf("esop2.futu5.com") != -1;
}

function tabPageHandle(tabId, info, tab)
{
	if (info.status != "complete" || !isFutuUrl(tab.url)) {
		return;
	}

	chrome.tabs.executeScript(tabId, {file: "jquery-1.7.2.js"});
	chrome.tabs.executeScript(tabId, {file: "module.js"});
	chrome.tabs.executeScript(tabId, {file: "esop_old.js"});
	chrome.tabs.executeScript(tabId, {file: "esop_new.js"});
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