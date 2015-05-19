(function(module) {
try {
  module = angular.module('myApp');
} catch (e) {
  module = angular.module('myApp', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('index_old.html',
    '<!DOCTYPE html>\n' +
    '<meta charset="UTF8">\n' +
    '<html data-ng-app="nataWedding">\n' +
    '<head>\n' +
    '  <link rel="stylesheet" type="text/css" href="/css/vendor.css" media="all" />\n' +
    '  <link rel="stylesheet" type="text/css" href="/css/app.css" media="all" />\n' +
    '</head>\n' +
    '\n' +
    '<body>\n' +
    '\n' +
    '  <header>\n' +
    '    <div class="container height-full">\n' +
    '      <div class="flex-row height-full">\n' +
    '        <div class="item-1 v-center h-center">\n' +
    '          <a>Nav Link 1</a>\n' +
    '        </div>\n' +
    '        <div class="item-1 v-center h-center">\n' +
    '          <a>Nav Link 2</a>\n' +
    '        </div>\n' +
    '        <div class="item-1 v-center h-center">\n' +
    '          <a>Nav Link 3</a>\n' +
    '        </div>\n' +
    '        <div id="link-details" class="item-1 v-center h-center">\n' +
    '          <a>Nav Link 4</a>\n' +
    '        </div>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '  </header>\n' +
    '\n' +
    '  <div class="main container">\n' +
    '    <div class="container">\n' +
    '      <div class="flex-col">\n' +
    '        <div class="content landing v-center h-center">\n' +
    '          <div class="text-image">\n' +
    '            <img class="big" src="../images/one_heart.png"/>\n' +
    '            <div class="caption-container">\n' +
    '              <div class="caption-left">\n' +
    '                Natalia\n' +
    '              </div>\n' +
    '\n' +
    '              <div class="caption-right">\n' +
    '                Michael\n' +
    '              </div>\n' +
    '            </div>\n' +
    '\n' +
    '            <div class="bottom">\n' +
    '              With Love - Con Much Cariño - مع الحب\n' +
    '            </div>\n' +
    '          </div>\n' +
    '          <!-- content row 1 -->\n' +
    '        </div>\n' +
    '\n' +
    '        <div id="details" class="content v-center h-center">\n' +
    '          content row 2\n' +
    '        </div>\n' +
    '\n' +
    '        <div class="content v-center h-center">\n' +
    '          content row 3\n' +
    '          <!-- <img class="big" src="../images/one_heart.png"/> -->\n' +
    '        </div>\n' +
    '\n' +
    '        <div class="content v-center h-center">\n' +
    '          content row 4\n' +
    '        </div>\n' +
    '\n' +
    '        <div class="content v-center h-center">\n' +
    '          content row 5\n' +
    '        </div>\n' +
    '\n' +
    '\n' +
    '      </div>\n' +
    '    </div>\n' +
    '  </div>\n' +
    '\n' +
    '  <footer>\n' +
    '  </footer>\n' +
    '\n' +
    '  <!-- global javascript -->\n' +
    '  <script type="text/javascript" src="/js/vendor.js"></script>\n' +
    '  <script type="text/javascript" src="/js/app.js"></script>\n' +
    '</body>\n' +
    '</html>\n' +
    '');
}]);
})();
