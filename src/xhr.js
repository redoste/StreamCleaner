//xhr: Module for HTTP(S) requests via XHR

/*
        xhr.get(): @param url: String URL of the HTTP(S) request to make
                   @param callback: function(responseText) Called when the request is done
                   @return: void
*/
exports.get = function(url, callback){
        let xhr;

        if(typeof XMLHttpRequest !== 'undefined')
                xhr = new XMLHttpRequest();

        else{
                try{
                        xhr = new ActiveXObject("Microsoft.XMLHTTP");
                }
                catch(e){
                        alert("Use a recent browser. Please...");
                        return;
                }
        }

        xhr.onreadystatechange = function() {
                if(xhr.readyState < 4) { return; }
                if(xhr.status !== 200) { return; }
                if(xhr.readyState === 4) { callback(xhr.responseText); }
        }

        xhr.open('GET', url, true);
        xhr.send(null);
}
