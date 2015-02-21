/**
 *
 *  Web Starter Kit
 *  Copyright 2014 Google Inc. All rights reserved.
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License
 *
 */

$(document).ready(function(){

   $('#home-screen2').hide(0);
   $('#popout-front').hide(0);
   $('#popout-shadow').hide(0)
});


$(document).ready(function(){

   $('#animate1').click(function()  
    {  
        $('#home-screen1').fadeTo('fast', 0);
        $('#home-screen2').fadeTo('fast', 1);
        $('#popout-front').fadeTo('slow', 1);
        $('#popout-shadow').fadeTo('slow', .3)
    });

});

$(document).ready(function(){

   $('#animate2').click(function()  
    {  
        $('#home-screen1').fadeTo('fast', 1);
        $('#home-screen2').fadeTo('fast', 0);
        $('#popout-front').fadeTo('slow', 0);
        $('#popout-shadow').fadeTo('slow', 0)
    }); 
});

//attempting to make one single div

// $(document).ready(function(){

//    $('#animate1').click(function()  
//     {  
//         .find(".home-screen1").css(
//         "webkit-transform", "perspective(1000px) rotateX(45deg)",
//         "webkit-transform", "perspective(1500px) rotateY(45deg)"
//         );

//     });
// });
