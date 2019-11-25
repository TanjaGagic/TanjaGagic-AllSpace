$('a[href^="#arrowdownload"]').live('click',function(event){
    event.preventDefault();
    var target_offset = $(this.hash).offset() ? $(this.hash).offset().top : 0;
    var customoffset = 35;
    $('html, body').animate({scrollTop:target_offset - customoffset}, 1000, "easeInCubic" );
});