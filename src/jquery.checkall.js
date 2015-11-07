/*
 * 
 * 
 *
 * Copyright (c) 2015 SuggeElson
 * Licensed under the MIT license.
 */
(function ($) {
  
  $.expr[':'].jqueryCheckall = function (el) {
    return $(el).text() === 'awesome test markup';
  };
}(jQuery));
