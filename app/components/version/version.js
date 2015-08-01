'use strict';

angular.module('walletsApp.version', [
  'walletsApp.version.interpolate-filter',
  'walletsApp.version.version-directive'
])

.value('version', '1.1');
