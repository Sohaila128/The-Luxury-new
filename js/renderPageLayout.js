function MainNavigation() {
  document.write(`
  <!-- navbar  -->
  <nav class="navbar navbar-expand-lg bg-success">
    <div class="container-lg d-flex align-items-center justify-content-between">
        <ul class="navbar-nav d-lg-flex d-none">
          <li class="nav-item fw-semibold">
          <a class="nav-link text-black link-primary mx-1" href="#" id="search-icon"> 
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z" stroke="#0D0D0D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M22 22L20 20" stroke="#0D0D0D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          </a>
          </li>
          <li class="nav-item fw-semibold">
          <a class="nav-link text-black link-primary mx-1" href="">English</a>
          </li>
          </ul>
          <!-- small screen  -->
          <!-- logo  -->
          <a href="index.html" class="d-block d-lg-none text-decoration-none">
            <img src="images/logo.svg" alt="">
          </a>
          <!-- toggle  -->
        <button class="navbar-toggler text-white border-0 me-auto" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
          <span class="navbar-toggler-icon"> </span>
        </button>

        <div class="collapse navbar-collapse key mx-auto" id="navbarSupportedContent">
          <a href="index.html" class="mx-auto text-decoration-none">
            <img src="images/logo.svg" alt="">
          </a>
        </div>
        <a href="cart.html" class="fw-semibold mx-1 text-black d-flex align-items-center text-decoration-none  d-none d-lg-flex">
          <div class="align-items-center d-flex">
            <svg xmlns="http://www.w3.org/2000/svg" class="mx-1" width="24" height="24" viewBox="0 0 24 24" fill="none">
<path d="M16.4904 22.75H7.50042C5.78042 22.75 4.49043 22.29 3.69043 21.38C2.89043 20.47 2.58042 19.15 2.79042 17.44L3.69043 9.94C3.95043 7.73 4.51043 5.75 8.41043 5.75H15.6104C19.5004 5.75 20.0604 7.73 20.3304 9.94L21.2304 17.44C21.4304 19.15 21.1304 20.48 20.3304 21.38C19.5004 22.29 18.2204 22.75 16.4904 22.75ZM8.40042 7.25C5.52042 7.25 5.38042 8.38999 5.17042 10.11L4.27043 17.61C4.12043 18.88 4.30042 19.81 4.81042 20.38C5.32042 20.95 6.22042 21.24 7.50042 21.24H16.4904C17.7704 21.24 18.6704 20.95 19.1804 20.38C19.6904 19.81 19.8704 18.88 19.7204 17.61L18.8204 10.11C18.6104 8.37999 18.4804 7.25 15.5904 7.25H8.40042Z" fill="#292D32"/>
<path d="M16 8.75C15.59 8.75 15.25 8.41 15.25 8V4.5C15.25 3.42 14.58 2.75 13.5 2.75H10.5C9.42 2.75 8.75 3.42 8.75 4.5V8C8.75 8.41 8.41 8.75 8 8.75C7.59 8.75 7.25 8.41 7.25 8V4.5C7.25 2.59 8.59 1.25 10.5 1.25H13.5C15.41 1.25 16.75 2.59 16.75 4.5V8C16.75 8.41 16.41 8.75 16 8.75Z" fill="#292D32"/>
<path d="M20.41 17.78H8C7.59 17.78 7.25 17.44 7.25 17.03C7.25 16.62 7.59 16.28 8 16.28H20.41C20.82 16.28 21.16 16.62 21.16 17.03C21.16 17.44 20.82 17.78 20.41 17.78Z" fill="#292D32"/>
</svg>
            <span><svg xmlns="http://www.w3.org/2000/svg" width="1" height="18" viewBox="0 0 1 18" fill="none">
<line x1="0.5" y1="2.18557e-08" x2="0.499999" y2="18" stroke="black"/>
</svg></span>
            <span class="fs-5 mx-2">1</span>
          </div>
        </a>
        <a href="my-wishlist.html" class="fw-semibold mx-1 text-black d-flex align-items-center text-decoration-none  d-none d-lg-flex">
          <div class="align-items-center d-flex">
            <img src="images/heart.svg" alt="" class="mx-1 mt-1">
            <span><svg xmlns="http://www.w3.org/2000/svg" width="1" height="18" viewBox="0 0 1 18" fill="none">
<line x1="0.5" y1="2.18557e-08" x2="0.499999" y2="18" stroke="black"/>
</svg></span>
            <span class="fs-5 mx-2">0</span>
          </div>
        </a>
        
      <div class="dropdown">
      <a class="fw-semibold mx-1 text-black d-flex align-items-center text-decoration-none d-none d-lg-flex " href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
<path d="M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z" stroke="#0D0D0D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M20.5901 22C20.5901 18.13 16.7402 15 12.0002 15C7.26015 15 3.41016 18.13 3.41016 22" stroke="#0D0D0D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
      </a>

      <ul class="dropdown-menu border-0 shadow" aria-labelledby="dropdownMenuLink">
        <li><a class="dropdown-item d-flex justify-content-start" href="profile.html">البروفايل</a></li>
        <li><a class="dropdown-item d-flex justify-content-start" href="my-wishlist.html">المفضلة</a></li>
        <hr>
        <li><a class="dropdown-item d-flex justify-content-start" href="#"> <img src="images/logout.svg" alt="" class="mx-1"> تسجيل الخروج</a></li>
      </ul>
    </div>
        
    </div>
  </nav>
  <div class="bg-white py-3 second-navbar mb-2">
    <div class="container">
      <ul class="list-unstyled m-0 p-0 d-flex justify-content-center">
        <li><a href="products.html" class="text-decoration-none mx-3 text-info fw-500 fs-6 link-primary">جديدنا</a></li>
        <li><a href="designers-page.html" class="text-decoration-none mx-3 text-info fw-500 fs-6 link-primary">مصممين</a></li>
        <li><a href="products.html" class="text-decoration-none mx-3 text-info fw-500 fs-6 link-primary">عباية</a></li>
        <li><a href="products.html" class="text-decoration-none mx-3 text-info fw-500 fs-6 link-primary">طرح</a></li>
        <li><a href="products.html" class="text-decoration-none mx-3 text-info fw-500 fs-6 link-primary">كاجوال</a></li>
        <li><a href="products.html" class="text-decoration-none mx-3 text-info fw-500 fs-6 link-primary">اكسسوارات</a></li>
      </ul>
    </div>
  </div>
  <!-- Search Bar -->
  <div id="search-bar" class="search-bar mt-5">
    <hr>
   <div class="container">
     <form class="d-flex position-relative w-100">
       <input class="form-control form-control-search w-100 border-0" type="search" placeholder="Search" aria-label="Search">
       <img src="images/search-normal.svg" alt="" class="search-icon">
       <img src="images/close-circle.svg" alt="" class="close-icon" id="close-search">
     </form>
   </div>
 </div>
 <!-- Search Bar -->
<div id="overlay" class="overlay"></div>
  <!-- navbar  -->

  `);
}
function UserNavigation() {
  document.write(`
  <!-- navbar  -->
  <nav class="navbar navbar-expand-lg bg-success">
    <div class="container-lg d-flex align-items-center justify-content-between">
        <ul class="navbar-nav d-lg-flex d-none">
          <li class="nav-item fw-semibold">
          <a class="nav-link text-black link-primary mx-1" href="#" id="search-icon"> 
            <svg xmlns="http://www.w3.org/2000/svg" class="mx-1" width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z" stroke="#0D0D0D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M22 22L20 20" stroke="#0D0D0D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          </a>
          </li>
          <li class="nav-item fw-semibold">
          <a class="nav-link text-black link-primary mx-1" href="">English</a>
          </li>
          </ul>
          <!-- small screen  -->
          <!-- logo  -->
          <a href="index.html" class="d-block d-lg-none text-decoration-none">
            <img src="images/logo.svg" alt="">
          </a>
          <!-- toggle  -->
        <button class="navbar-toggler text-white border-0 me-auto" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
          <span class="navbar-toggler-icon"> </span>
        </button>

        <div class="collapse navbar-collapse key mx-auto" id="navbarSupportedContent">
          <a href="index.html" class="mx-auto text-decoration-none">
            <img src="images/logo.svg" alt="">
          </a>
        </div>
        <a href="cart.html" class="fw-semibold mx-1 text-black d-flex align-items-center text-decoration-none  d-none d-lg-flex">
          <div class="align-items-center d-flex">
            <svg xmlns="http://www.w3.org/2000/svg" class="mx-1" width="24" height="24" viewBox="0 0 24 24" fill="none">
<path d="M16.4904 22.75H7.50042C5.78042 22.75 4.49043 22.29 3.69043 21.38C2.89043 20.47 2.58042 19.15 2.79042 17.44L3.69043 9.94C3.95043 7.73 4.51043 5.75 8.41043 5.75H15.6104C19.5004 5.75 20.0604 7.73 20.3304 9.94L21.2304 17.44C21.4304 19.15 21.1304 20.48 20.3304 21.38C19.5004 22.29 18.2204 22.75 16.4904 22.75ZM8.40042 7.25C5.52042 7.25 5.38042 8.38999 5.17042 10.11L4.27043 17.61C4.12043 18.88 4.30042 19.81 4.81042 20.38C5.32042 20.95 6.22042 21.24 7.50042 21.24H16.4904C17.7704 21.24 18.6704 20.95 19.1804 20.38C19.6904 19.81 19.8704 18.88 19.7204 17.61L18.8204 10.11C18.6104 8.37999 18.4804 7.25 15.5904 7.25H8.40042Z" fill="#292D32"/>
<path d="M16 8.75C15.59 8.75 15.25 8.41 15.25 8V4.5C15.25 3.42 14.58 2.75 13.5 2.75H10.5C9.42 2.75 8.75 3.42 8.75 4.5V8C8.75 8.41 8.41 8.75 8 8.75C7.59 8.75 7.25 8.41 7.25 8V4.5C7.25 2.59 8.59 1.25 10.5 1.25H13.5C15.41 1.25 16.75 2.59 16.75 4.5V8C16.75 8.41 16.41 8.75 16 8.75Z" fill="#292D32"/>
<path d="M20.41 17.78H8C7.59 17.78 7.25 17.44 7.25 17.03C7.25 16.62 7.59 16.28 8 16.28H20.41C20.82 16.28 21.16 16.62 21.16 17.03C21.16 17.44 20.82 17.78 20.41 17.78Z" fill="#292D32"/>
</svg>
            <span><svg xmlns="http://www.w3.org/2000/svg" width="1" height="18" viewBox="0 0 1 18" fill="none">
<line x1="0.5" y1="2.18557e-08" x2="0.499999" y2="18" stroke="black"/>
</svg></span>
            <span class="fs-5 mx-2">1</span>
          </div>
        </a>
        <a href="my-wishlist.html" class="fw-semibold mx-1 text-black d-flex align-items-center text-decoration-none  d-none d-lg-flex">
          <div class="align-items-center d-flex">
            <img src="images/heart.svg" alt="" class="mx-1 mt-1">
            <span><svg xmlns="http://www.w3.org/2000/svg" width="1" height="18" viewBox="0 0 1 18" fill="none">
<line x1="0.5" y1="2.18557e-08" x2="0.499999" y2="18" stroke="black"/>
</svg></span>
            <span class="fs-5 mx-2">0</span>
          </div>
        </a>
        
      <div class="dropdown">
      <a class="fw-semibold mx-1 text-black d-flex align-items-center text-decoration-none d-none d-lg-flex " href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
<path d="M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z" stroke="#0D0D0D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M20.5901 22C20.5901 18.13 16.7402 15 12.0002 15C7.26015 15 3.41016 18.13 3.41016 22" stroke="#0D0D0D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
      </a>

      <ul class="dropdown-menu border-0 shadow" aria-labelledby="dropdownMenuLink">
        <li><a class="dropdown-item d-flex justify-content-start" href="#"> <img src="images/logout-two.svg" alt="" class="mx-1"> تسجيل الخروج</a></li>
      </ul>
    </div>
        
    </div>
  </nav>
  <div class="bg-white py-3 second-navbar mb-2">
    <div class="container">
      <ul class="list-unstyled m-0 p-0 d-flex justify-content-center">
        <li><a href="products.html" class="text-decoration-none mx-3 text-info fw-500 fs-6 link-primary">جديدنا</a></li>
        <li><a href="designers-page.html" class="text-decoration-none mx-3 text-info fw-500 fs-6 link-primary">مصممين</a></li>
        <li><a href="products.html" class="text-decoration-none mx-3 text-info fw-500 fs-6 link-primary">عباية</a></li>
        <li><a href="products.html" class="text-decoration-none mx-3 text-info fw-500 fs-6 link-primary">طرح</a></li>
        <li><a href="products.html" class="text-decoration-none mx-3 text-info fw-500 fs-6 link-primary">كاجوال</a></li>
        <li><a href="products.html" class="text-decoration-none mx-3 text-info fw-500 fs-6 link-primary">اكسسوارات</a></li>
      </ul>
    </div>
  </div>
  <!-- Search Bar -->
  <div id="search-bar" class="search-bar mt-5">
    <hr>
   <div class="container">
     <form class="d-flex position-relative w-100">
       <input class="form-control form-control-search w-100 border-0" type="search" placeholder="Search" aria-label="Search">
       <img src="images/search-normal.svg" alt="" class="search-icon">
       <img src="images/close-circle.svg" alt="" class="close-icon" id="close-search">
     </form>
   </div>
 </div>
 <!-- Search Bar -->
<div id="overlay" class="overlay"></div>
  <!-- navbar  -->

  `);
}

function MainFooter() {
  document.write(`
  <footer class="py-5 bg-primary">
  <div class="container">
    <div class="row">
      <div class="col-md-3 mt-5 mt-lg-0">
        <h6 class="text-white">عن الموقع</h6>
        <ul class="list-unstyled m-0 p-0">
          <li class="m-0 p-0 link-hover"><a href="products.html" class="text-white text-decoration-none m-0 p-0 fs-14">جدیدنا</a></li>
          <li class="m-0 p-0 link-hover"><a href="products.html" class="text-white text-decoration-none m-0 p-0 fs-14">المصممين</a></li>
          <li class="m-0 p-0 link-hover"><a href="products.html" class="text-white text-decoration-none m-0 p-0 fs-14">عباية</a></li>
          <li class="m-0 p-0 link-hover"><a href="products.html" class="text-white text-decoration-none m-0 p-0 fs-14">طرح</a></li>
          <li class="m-0 p-0 link-hover"><a href="products.html" class="text-white text-decoration-none m-0 p-0 fs-14">كاجوال</a></li>
          <li class="m-0 p-0 link-hover"><a href="products.html" class="text-white text-decoration-none m-0 p-0 fs-14">إكسسوارات</a></li>
      </ul>
      </div>
      <div class="col-md-3 mt-5 mt-lg-0">
        <h6 class="text-white">عنا </h6>
        <ul class="list-unstyled m-0 p-0">
          <li class="m-0 p-0 link-hover"><a href="about-us.html" class="text-white text-decoration-none m-0 p-0 fs-14">نبذة عنا</a></li>
          <li class="m-0 p-0 link-hover"><a href="faq.html" class="text-white text-decoration-none m-0 p-0 fs-14">الأسئلة الشائعة</a></li>
          <li class="m-0 p-0 link-hover"><a href="privacy-policy.html" class="text-white text-decoration-none m-0 p-0 fs-14">سياسة الخصوصية</a></li>
          <li class="m-0 p-0 link-hover"><a href="terms-conditions.html" class="text-white text-decoration-none m-0 p-0 fs-14">الشروط و الأحكام</a></li>
          <li class="m-0 p-0 link-hover"><a href="contact-us.html" class="text-white text-decoration-none m-0 p-0 fs-14">تواصل معنا</a></li>
      </ul>
      </div>
      <div class="col-md-3 col-lg-2 mt-5 mt-lg-0">
        <h6 class="text-white">وسائل التواصل الاجتماعي</h6>
          <ul class="list-unstyled d-flex col-lg-6 col-6 justify-content-between m-0 p-0">
            <li class="link-hover"><a href="#" class="text-white text-decoration-none fs-5"><i class="fa-brands fa-tiktok"></i></a></li>
            <li class="link-hover"><a href="#" class="text-white text-decoration-none fs-5"><i class="fa-brands fa-instagram"></i></a></li>
            <li class="link-hover"><a href="#" class="text-white text-decoration-none fs-5"><i class="fa-brands fa-whatsapp"></i></a></li>
          </ul>
      </div>
      <div class="col-md-3 col-lg-4 mt-5 mt-lg-0">
        <h6 class="text-white">كن على علم بجميع أخبارنا</h6>
        <form>
            <div class="form-group">
                <input type="email" class="form-control bg-transparent text-white placeholder-color" id="email" placeholder="قم بإدخال البريد الإلكتروني">
            </div>
            <button type="submit" class="btn btn-white mt-3 rounded-2 col-lg-6">إرسال</button>
        </form>
      </div>
    </div>
    <div class="text-center align-items-center">
      <div class="d-flex align-items-center justify-content-between flex-wrap mt-4">
        <div class="">
          <span class="text-white fw-normal fs-14">@2024</span>
          <a class="fw-semibold fw-normal fs-14 text-decoration-none text-white"> The Luxury Outlet.</a>
          <span class="text-white fw-normal fs-14"> All rights reserved.</span>
      </div>
        <div class="mt-4">
          <h6 class="fw-semibold text-white fs-14">احد مشاريع مؤسسة سنيم الادارية</h6>
        </div>
      <div class="d-flex align-items-center">
        <div>
          <div class="d-flex justify-content-between">
            <img src="images/visa.png" alt="" class="img-fluid mx-1">
            <img src="images/master.png" alt="" class="img-fluid mx-1">
            <img src="images/paypal.png" alt="" class="img-fluid mx-1">
            <img src="images/mada.png" alt="" class="img-fluid mx-1">
          </div>
        </div>
      </div>
      
      </div>
    </div>
    <div class="text-center mt-4">
      <span class="text-secondary fw-normal fs-14"> Powered By <a target="_blank" href="https://emcan-group.com/en" class="fw-semibold text-decoration-none fw-normal text-secondary">   Emcan Solutions</a></span>
    </div>
  </div>
</footer>
  `);
}

function includeSidebar() {
  document.write(`
  <!--========= start sidebar  =========-->
<div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasWithBothOptionsLabel">
  <div class="offcanvas-header bg-white">
    <img src="images/logo.svg"  alt=""/>
    <button type="button" class="btn-close text-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body bg-white hover-links">
    <ul class="navbar-nav ms-auto me-auto mb-lg-0 d-flex px-3">
      <li class="nav-item me-3 fw-bold ">
          <a class="nav-link text-primary active link-warning" href="index.html">الصفحة الرئيسية</a>
      </li>
      <li class="nav-item me-3 fw-bold ">
          <a class="nav-link text-primary active link-warning" href="about-us.html"> نبذة  عنا</a>
      </li>
      <li class="nav-item me-3 fw-bold ">
          <a class="nav-link text-primary active link-warning" href="contact-us.html">تواصل معنا</a>
      </li>
      <li class="nav-item me-3 fw-bold ">
          <a class="nav-link text-primary active link-warning" href="faq.html">الأسألة الشائعة</a>
      </li>
      <li class="nav-item me-3 fw-bold ">
          <a class="nav-link text-primary active link-warning" href="terms-conditions.html.html">الشروط والأحكام</a>
      </li>
      <li class="nav-item me-3 fw-bold ">
          <a class="nav-link text-primary active link-warning" href="privacy-policy.html">سياسة الخصوصية </a>
      </li>
    </ul>
  </div>
</div>
<!--========= end sidebar  =========-->
  `);
}

function includeLoader() {
  document.write(`
  <section class="loader"  id="loader" style="display: none;">
  <section class="vh-100 bg-light flower-img-top" >
    <section class="flower-img-bottom">
      <div class="container align-items-center">
        <div class="row d-flex align-items-center justify-content-center text-center py-5" style="height: 100vh;">
          <div class="col-sm-5 d-flex align-items-center justify-content-center mt-5">
            <div>
              <img src="images/logo snim outlet 1.svg" alt="">
              <img src="images/https___lottiefiles.com_animations_loader-N4KSbf6Tmz.gif" width="200" alt="">
            </div>
            <div class="m-0 p-0">
            </div>
          </div>
        </div>
        
      </div>
    </section>
</section>
</section>
  `);
}



function BtnBackToTop() {
  document.write(`
  <button
        type="button" title="Back to top"
        class="back-to-top btn btn- text-white rounded-circle py-2 px-2">
  <img src="images/arrow-up.svg" class="mb-3" width="18" />
  </button>  
  `);
}
function WhatsApp() {
  document.write(`
  <a href="https://wa.me/+97334479384" class="whats-app btn btn-info py-2 px-2 rounded-circle" target="_blank" data-toggle="tooltip" data-placement="bottom" title="Whatsapp">
  <i class="bi bi-whatsapp my-float"></i>
  </a>  
  `);
}




