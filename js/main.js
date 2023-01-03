jQuery(document).ready(function($) {

    //Function layout
    function layout() {

    }

    layout();

    //Sidebar Toggle 
    $(".item-sidebar-toggle > .nav-link, .btn-sidebar-toggle").click(function(e) {
        e.preventDefault();
        $(".item-sidebar-toggle > .nav-link, .btn-sidebar-toggle").toggleClass('active');
        $(".item-sidebar-toggle > .nav-link, .btn-sidebar-toggle").find('.fa-solid').toggleClass('fa-bars fa-bars-staggered');
        $('body').toggleClass('sidebar-collapsed');
    });

    // Side Bar First load
    if (($(window).width() < 540) && ($('body').hasClass('.sidebar-collapsed') == false)) {
        $('.btn-sidebar-toggle').click();
    }

    // Noticaiton

    //Setup Nicescroll
    $(function() {
        $(".nicescroll").niceScroll({
            cursorcolor: 'rgba(0,0,0,0.2)',
            cursorwidth: '6px',
            cursorborder: 'none'
        });
    });

    //Window resize
    $(window).resize(function() {
        layout();
    });
});