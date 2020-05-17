import $ from 'jquery';

$(document).ready(function () {
    
    // refs
    var navbarMenu = $('.navbar_menu .drop_click');
    var dropClick = navbarMenu.children('a'); // a click
    var dropMenu = navbarMenu.children('.dropdowm_menu'); // drop menu container


    // event click
    dropClick.click(function(){

        var actualMenu = $(this).next('.dropdown_menu');

        dropMenu.not(actualMenu).hide();

        actualMenu.toggle();


    });

    // mouse enter 
    navbarMenu.mouseenter(function () { 
        $(this).children('.dropdown_menu').show();
       
    });

    navbarMenu.mouseleave(function () { 
        $(this).children('.dropdown_menu').hide();
    });


});
