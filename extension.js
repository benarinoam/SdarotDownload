let clickactivity = document.getElementById('clickactivity');
clickactivity.onclick = 
function(element) {    
    var d = element;
    chrome.tabs.query({active: true, currentWindow: true}, 
        function(tabs) {
            chrome.tabs.executeScript(
                tabs[0].id,
                {code: 'document.getElementById(\'videojs_html5_api\').setAttribute(\'controls\',\'\');'});
            });
};