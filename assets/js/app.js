$(function () {
// ==== Start header_page click jQuery Event ===== //
    $('.header_search_box').on('click',function(){
$('#home_page_search_popup').addClass('show')

    });
$('.btn_close').on('click',function(){
    $('#home_page_search_popup').removeClass('show')
    
});

$('.header_shopping_cart').on('click',function(){
    $('#shopping_cart_offcanvas').addClass('show')
})

$('.btn_close').on('click',function(){
    $('#shopping_cart_offcanvas').removeClass('show')
})
// ====End header_page click jQuery Event ===== //

// ==== Start Home_page Sliding jQuery ===== //
    $(".bannar_sliding_box").slick({
        accessibility: true,
        autoplay: true,
        autoplaySpeed: 1000,
        dots: true,
        arrows: true,
        appendArrows:$('.arrow_box'),
        prevArrow: `<i class='bx bx-left-arrow-circle arrow_left' ></i> `,
        nextArrow: `<i class='bx bx-right-arrow-circle arrow_right' ></i>`,
        appendDots: $(".dot_items"),
    })

    $('.arriavl_sliding_box').slick({
        accessibility: true,
        autoplay: true,
        autoplaySpeed: 1000,
        dots: false,
        arrows: true,
        slidesToShow: 4,
        prevArrow: `<i class='bx bx-left-arrow-circle arrow_left' ></i> `,
        nextArrow: `<i class='bx bx-right-arrow-circle arrow_right' ></i>`,
    })


    $('.deals_offer_sliding_box').slick({
        autoplay: true,
        autoplaySpeed: 1000,
        slidesToShow: 2,
        arrows: false,
        dots: true,
        
    })

    $('.latest_sliding_box').slick({
        autoplay: true,
        autoplaySpeed: 1000,
        slidesToShow: 2,
        arrows: true,
        dots: true,
        prevArrow: `<i class='bx bx-left-arrow-circle arrow_left' ></i> `,
        nextArrow: `<i class='bx bx-right-arrow-circle arrow_right' ></i>`,
    })


    $('.leadership_slide_box').slick({
        autoplay: true,
        autoplaySpeed: 1000,
        slidesToShow: 4,
        arrows: true,
        dots: false,
        prevArrow: `<i class='bx bx-left-arrow-circle arrow_left' ></i> `,
        nextArrow: `<i class='bx bx-right-arrow-circle arrow_right' ></i>`,
    })
// ====End Home_page sliding jQuery ===== //


// ==== Start About_page sliding jQuery ===== //
    $('.profile_sliding_box').slick({
        autoplay: true,
        autoplaySpeed: 1000,
        transition:2,
        slidesToShow: 1,
        arrows: false,
        dots: true,
        appendDots:$('.append_dot_box'),
        fade:true,
        speed:500,
    })

    $('.aytor_instagram_sliding').slick({
        autoplay: true,
        autoplaySpeed: 1000,
        slidesToShow: 6,
        arrows: false,
        dots: true,
    })
    // ==== End About_page sliding jQuery ===== //

 // ==== Start Shop_page Click Event jQuery  ===== //
 $('.menu_line').on('click',function(){
    $('.menu_line').addClass('show');
    $(".menu_grid").removeClass('show');
$('#shop_page_product .shop_page_menu_grid').addClass('show');
$('#shop_page_product .shop_page_menu_line').removeClass('show');
})
$('.menu_grid').on('click',function(){
    $('.menu_grid').addClass('show');
    $(".menu_line").removeClass('show');
    $('#shop_page_product .shop_page_menu_line').addClass('show');
    $('#shop_page_product .shop_page_menu_grid').removeClass('show')
    

})


 // ==== End Shop_page Click Event jQuery  ===== //



 // ==== Start Shop_details_page sliding Event jQuery  ===== //
 $('.shop_details_sliding_box').slick({
    autoplay: true,
    autoplaySpeed: 2000,
    transition:0.5,
    slidesToShow: 1,
    arrows:false,
    fade:true,
    speed:500,
    asNavFor:".shop_asNavFor",

})
$('.shop_asNavFor').slick({
    autoplay: true,
    autoplaySpeed: 2000,
    transition:0.5,
    slidesToShow: 5,
    arrows:false,
    speed:500,
    asNavFor:".shop_details_sliding_box",
    centerMode:true,

})


$('#shop_details_overview .overview_inner_item_1').on('click', function(){
    $('.overview_inner_item_1').addClass('show');
    $('.overview_inner_item_2').removeClass('show');
    $('.overview_inner_item_3').removeClass('show');
    $('#shop_details_overview .product_description_box').addClass('show')
    $('#shop_details_overview .customer_review_box').removeClass('show')
    $('#shop_details_overview .additional_information').removeClass('show');
})

$('#shop_details_overview .overview_inner_item_2').on('click', function(){
    $('.overview_inner_item_2').addClass('show');
    $('.overview_inner_item_1').removeClass('show');
    $('.overview_inner_item_3').removeClass('show');
    $('#shop_details_overview .customer_review_box').addClass('show')
     $('#shop_details_overview .product_description_box').removeClass('show')
     $('#shop_details_overview .additional_information').removeClass('show');
    })

$('#shop_details_overview .overview_inner_item_3').on('click', function(){
    $('.overview_inner_item_3').addClass('show');
    $('.overview_inner_item_2').removeClass('show');
    $('.overview_inner_item_1').removeClass('show');
     $('#shop_details_overview .product_description_box').removeClass('show')
     $('#shop_details_overview .customer_review_box').removeClass('show')
$('#shop_details_overview .additional_information').addClass('show');
    })


    $('.shop_related_sliding_box').slick({
        autoplay: true,
        autoplaySpeed: 2000,
        transition:0.5,
        slidesToShow:4,
        arrows:false,
        speed:500,
        centerMode:true,
    
    })

    
  // ==== End Shop_details_page sliding Event jQuery  ===== //

})