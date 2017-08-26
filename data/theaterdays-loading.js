// Define as a global param in order to make it disconnectable.
//    var observer = new MutationObserver(function (mutation){
    // When pace-progress's "data-progress-text" is mutated, the following code runs.
//    var progressRatio = mutation[0].target.getAttribute("data-progress-text");
//    document.getElementsByClassName("theaterdays-ratio")[0].textContent = progressRatio;
//});

Pace.on('start', function() {
    var wrapper = document.createElement('div');
    var back    = document.createElement('div');
    var banner  = document.createElement('div');
    //var panel   = document.createElement('div');
    //var ratio   = document.createElement('div');

    wrapper.className = 'theaterdays-loading';
    back.className    = 'theaterdays-back';
    banner.className  = 'theaterdays-banner';
    //panel.className   = 'theaterdays-panel';
    //ratio.className   = 'theaterdays-ratio';

    // --------------------------------------------------
    // Setup theaterdays-panel

    //var message_up = document.createElement('p');
    //var message_dn = document.createElement('p');
    //message_up.className = 'message-up';
    //message_dn.className = 'message-down';
    //message_up.appendChild(document.createTextNode('データダウンロード中'));
    //message_dn.appendChild(document.createTextNode('※通信環境の良い所で実行してください'));
    //panel.appendChild(message_up);
    //panel.appendChild(message_dn);

    //var progress_border = document.createElement('div');
    //progress_border.className = 'progress-border';
    //panel.appendChild(progress_border);

    // --------------------------------------------------
    // Setup theaterdays-banner

    var connecting = document.createElement('p');
    connecting.className = 'connecting';
    connecting.appendChild(document.createTextNode('Connecting'));
    banner.appendChild(connecting);
    // loading img
    var image = document.createElement('img');
    //image.src = "https://lh3.google.com/u/0/d/0BxDxR5Rx2HkfdVh0SnlqNlRaWHM=w1440-h696-iv1";

    image.src = "https://lh3.google.com/u/0/d/0BxDxR5Rx2HkfWGtaR3Bmd08zR1E=w871-h659-iv1";
    connecting.appendChild(image);

    var nowLoading = document.createElement('p');
    nowLoading.className = 'nowloading';
    nowLoading.title = 'Now Loading...';
    nowLoading.appendChild(document.createTextNode('Now Loading...'));
    banner.appendChild(nowLoading);

    //var heart = document.createElement('div');
    //heart.className = 'heart';
    //banner.appendChild(heart);
    var chara = document.createElement('p');
    chara.className = 'chara';
    banner.appendChild(chara);
    var image = document.createElement('img');
    image.src = "https://lh3.googleusercontent.com/VYYMZk2TPVxmDbz6G_M4Vv_fk7jSDNofHjjbashZyM-2ba6pzV18zPEjOXlzxaAxWKd0zPfSXam5Xtw=w1440-h696";
    chara.appendChild(image);

    // --------------------------------------------------
    // Setup theaterdays-ratio

    // check if pace-progress's "data-progress-text" is mutated by pace.js
    //var progressElem = document.getElementsByClassName("pace-progress")[0];
    //observer.observe(progressElem, {attributes: true, attributeFilter: ["data-progress-text"]});

    // --------------------------------------------------
    // Integrate

    wrapper.appendChild(back);
    wrapper.appendChild(banner);
    //wrapper.appendChild(panel);
    //wrapper.appendChild(ratio);
    document.body.appendChild(wrapper);
});

Pace.on('done', function() {
    var wrapper = document.getElementsByClassName("theaterdays-loading")[0];
    wrapper.classList.add("hide");
    //observer.disconnect();
});

// support no smartphones
if(!navigator.userAgent.match(/(iPhone|iPad|iPod|Android)/)){
    Pace.start();
}
