(function (window){
    var byeSpeaker = {};
    byeSpeaker.speak = function(name){
        console.log("Good bye " + name);
    }

    window.byeSpeaker = byeSpeaker;
})(window);