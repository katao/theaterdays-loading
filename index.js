var data    = require("sdk/self").data;
var pageMod = require("sdk/page-mod");

pageMod.PageMod({
    include: "*",
    contentScriptWhen: "start",
    contentScriptFile: [data.url("pace-option.js"),
                        data.url("pace.min.js"),
                        data.url("starlight-loading-options-fx.js"),
                        data.url("starlight-loading.js")],
    contentStyleFile: [data.url("pace.css"),
                       data.url("starlight-loading.css")]
});
