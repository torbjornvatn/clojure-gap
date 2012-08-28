var page = require('webpage').create();
page.settings.userAgent = 'SpecialAgent';
page.open('http://localhost:8090', function (status) {
    if (status !== 'success') {
      console.log('Unable to access network');
    } else {
      var ua = page.evaluate(function () {
        return document.documentElement.outerHTML;
      });
      console.log(ua);
    }
    phantom.exit();
    });
