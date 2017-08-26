var data    = require("sdk/self").data;
var pageMod = require("sdk/page-mod");

pageMod.PageMod({
    include: "*",
    contentScriptWhen: "start",
    contentScriptFile: [data.url("pace-option.js"),
                        data.url("pace.min.js"),
                        data.url("theaterdays-loading.js")],
    contentStyleFile: [data.url("theaterdays-loading.css")]
});
