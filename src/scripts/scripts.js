const tabs = document.querySelectorAll('.tab-btn');

tabs.forEach(tab => tab.addEventListener("click", () => tabClicked(tab)));

const tabClicked = (tab) => {
    tabs.forEach(tab => tab.classList.remove('active'));

    tab.classList.add('active');
    
    const contents = document.querySelectorAll('.content');
    contents.forEach(content => content.classList.remove('show'));

    const contentID = tab.getAttribute('content-id');

    const content = document.getElementById(contentID);

    content.classList.add('show');
}

var swiper = new Swiper(".mySwiper", {
    loop: true,
    grabCursor: true,
    pagination: {
      el: ".swiper-pagination",
    },
  });