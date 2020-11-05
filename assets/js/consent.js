(function() {
  var consentDescription = window.app.consentDescription;
  var getCookie = window.app.getCookie;

  jQuery(function($) {
    var $container = $('#appdy-consent-cookie-container');
    var $content = $('.content', $container);
    var $btnSave = $('button.save', $container);
    var $btnAcceptAll = $('button.accept-all', $container);
    var $trigger = $('.trigger', $container);

    showConsentIfUE();

    $trigger.click(toggleContent);

    $btnAcceptAll.click(function() {
      $('input[type=checkbox]', $container).prop('checked', true);

      saveSettings();
      toggleContent();
    });

    $btnSave.click(function() {
      saveSettings();
      toggleContent();
    });

    function toggleContent() {
      $content.toggleClass('visible');
    }

    function showConsentIfUE() {
      if (getCookie('appdy_consent_cookie') === undefined) {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(function(pos) {
            var data = [
              [[67.16112, -26.46167], [67.60379, -12.36351], [26.5962, -28.26654], [27.10959, -13.80706]],
              [[71.40624, -9.69099], [71.82372, 27.02426], [36.05412, -12.77759], [35.35933, 25.37855]],
              [[71.05456, 24.70092], [71.37567, 33.30134], [55.31665, 24.49351], [55.12377, 32.92725]],
              [[48.84599, 23.62481], [48.95403, 31.35822], [40.98502, 23.07012], [41.36354, 29.93305]],
              [[36.39941, 13.2533], [35.5678, 35.05299], [33.73264, 13.25097], [33.16783, 33.81685]]
            ];
            var lat = pos.coords.latitude;
            var long = pos.coords.longitude;
            var isUE = false;

            for (var i=0; i < data.length; i++) {
              var polygon = data[i];

              if (lat <= Math.max(polygon[0][0], polygon[1][0]) && lat >= Math.min(polygon[2][0], polygon[3][0]) && long >= Math.min(polygon[0][1], polygon[1][1]) && long <= Math.max(polygon[2][1], polygon[3][1])) {
                isUE = true;
                break;
              }
            }

            if (isUE) {
              toggleContent();
            }
          }, toggleContent);
        }
      }
    }

    function saveSettings() {
      var date = new Date();
      date.setTime(date.getTime() + (365*24*60*60*1000));
      expires = "expires=" + date.toUTCString();

      $('input[type=checkbox]', $container).each(function(idx) {
        var $this = $(this);

        if (!$this.prop('disabled')) {
          var name = 'appdy_consent_cookie_' + $this.attr('name');
          var status = $this.prop('checked') ? 'yes' : 'no';
          document.cookie = name + '=' + status + '; expires=' + expires + '; path=/';
          document.body.dispatchEvent(new CustomEvent('appdy_consent_cookie_' + $this.attr('name'), {detail: {allowed: $this.prop('checked')}}));
        }
      });

      document.cookie = 'appdy_consent_cookie=1; ' + expires + '; path=/';
    }
  });
})()
