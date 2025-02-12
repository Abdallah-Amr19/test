// const swiper = new Swiper(".swiper", {
//   // Optional parameters
//   direction: "horizontal",
//   loop: true,
//   slidesPerView: 2.5,
//   spaceBetween: 30,

//   // Navigation arrows
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },

//   // And if we need scrollbar
//   scrollbar: {
//     el: ".swiper-scrollbar",
//   },
// });

// const slide = new Swiper(".swiper-calender", {
//   slidesPerView: 7, // عرض 7 كروت
//   spaceBetween: 10, // مسافة بين الكروت
//   centeredSlides: true, // الكارت الأوسط في المنتصف
//   loop: true, // دوران لا نهائي

//   // Navigation arrows
//   navigation: {
//     nextEl: ".swiper-btn-next",
//     prevEl: ".swiper-btn-prev",
//   },

//   // Slide to clicked slide
//   slideToClickedSlide: true,
// });

// const swiper = new Swiper('.swiper', {
//     direction: 'horizontal', // اتجاه أفقي
//     loop: true, // التكرار اللانهائي
//     slidesPerView: 3, // عرض 3 شرائح
//     spaceBetween: 30, // المسافة بين الشرائح
//     autoplay: {
//       delay: 3000, // التبديل التلقائي كل 3 ثوان
//     },
//     pagination: {
//       el: '.swiper-pagination',
//       clickable: true, // تمكين التفاعل مع النقاط
//     },
//     navigation: {
//       nextEl: '.swiper-button-next',
//       prevEl: '.swiper-button-prev',
//     },
//     scrollbar: {
//       el: '.swiper-scrollbar',
//       draggable: true,
//     },
//     breakpoints: {
//       640: {
//         slidesPerView: 1,
//       },
//       768: {
//         slidesPerView: 2,
//       },
//       1024: {
//         slidesPerView: 3,
//       }
//     },
// });

// const rate = document.querySelectorAll("#rate-list li");

// rate.forEach((li) => {
//   let rating = li.getAttribute("data-rating");
//   li.style.setProperty("--w", rating + "vw");
//   console.log(li.getAttribute("data-rating"));

//   //    li.addEventListener('click', () => {
//   //         rate.forEach((li) => {
//   //             li.classList.remove('active');
//   //         });
//   //         li.classList.add('active');
//   //     });
// });

const userName = document.querySelector(".user-name");
const speciality = document.querySelector(".speciality");
const email = document.querySelector(".email");
const country = document.querySelector(".country");
const aboutMe_more_btn = document.querySelector(".aboutMe_more_btn");
const mentorPhoto = document.querySelector(".mentor-photo img");
// const about = document.querySelector(".about-me");
const aboutMe_more = document.querySelector(".aboutMe_more");
const editAboutCont = document.querySelector(".my-data .edit");
const editform = document.querySelector(".my-data .edit + form");
const editTextArea = document.querySelector(".my-data .edit + form textarea");
const editBtn = document.querySelector(".my-data .edit + form button");
const desc_hiddens = document.getElementById("desc_heddens")
const more_btn = document.getElementById("more_btn")
const profile_edit_btn = document.getElementById("profile_edit_btn")
const edit_profile = document.getElementById("edit_profile")
const edit_profileOut_btn = document.getElementById("edit_profileOut_btn")
const edit_education = document.getElementById("edit_education")
const education_edit_btn = document.getElementById("education_edit_btn")
const edit_education2 = document.getElementById("edit_education2")
const edit_education3 = document.getElementById("edit_education3")
const education_plus_btn = document.getElementById("education_plus_btn")
const edit_educationOut_btn2 = document.getElementById("edit_educationOut_btn2")
const edit_educationOut_btn3 = document.getElementById("edit_educationOut_btn3")
const edit_educationOut_btn = document.getElementById("edit_educationOut_btn")
const edit_education_btn2 = document.getElementById("edit_education_btn2")
// edit exp
const experience_plus_btn = document.getElementById("experience_plus_btn")
const experience_edit_btn = document.getElementById("experience_edit_btn")
const edit_experience = document.getElementById("edit_experience")
const edit_experience3 = document.getElementById("edit_experience3")
const experience_edit_btn2 = document.getElementById("experience_edit_btn2")
const edit_experience2 = document.getElementById("edit_experience2")
const edit_experienceOut_btn = document.getElementById("edit_experienceOut_btn")
const edit_experienceOut_btn2 = document.getElementById("edit_experienceOut_btn2")
const edit_experienceOut_btn3 = document.getElementById("edit_experienceOut_btn3")






edit_experience.style.visibility = "hidden"
edit_experience2.style.visibility = "hidden"
edit_experience3.style.visibility = "hidden"

experience_plus_btn.addEventListener('click', function() {
  edit_experience3.style.visibility = "visible"


});
experience_edit_btn.addEventListener('click', function() {
  edit_experience.style.visibility = "visible"

});
edit_experienceOut_btn.addEventListener('click', function() {
  edit_experience.style.visibility = "hidden"

});
experience_edit_btn2.addEventListener('click', function() {
  edit_experience2.style.visibility = "visible"
  edit_experience.style.visibility = "hidden"

});
edit_experienceOut_btn2.addEventListener('click', function() {
  edit_experience2.style.visibility = "hidden"

});
edit_experienceOut_btn3.addEventListener('click', function() {
  edit_experience3.style.visibility = "hidden"

});



aboutMe_more.style.visibility = "hidden"
edit_education.style.visibility = "hidden"
edit_education2.style.visibility = "hidden"
edit_education3.style.visibility = "hidden"
edit_profile.style.visibility = "hidden"

desc_hiddens.style.display = "none"

aboutMe_more_btn.addEventListener('click', function() {
  aboutMe_more.style.visibility = "visible"
  aboutMe_more_btn.style.display = "none"
  

});
more_btn.addEventListener('click', function() {
  desc_hiddens.style.display = "block"
});
profile_edit_btn.addEventListener('click', function() {
  edit_profile.style.visibility = "visible"

});
education_edit_btn.addEventListener('click', function() {
  edit_education.style.visibility = "visible"

});
edit_profileOut_btn.addEventListener('click', function() {
  edit_profile.style.visibility = "hidden"

});
edit_educationOut_btn.addEventListener('click', function() {
  edit_education.style.visibility = "hidden"

});
edit_education_btn2.addEventListener('click', function() {
  edit_education2.style.visibility = "visible"
edit_education.style.visibility = "hidden"


});
edit_educationOut_btn2.addEventListener('click', function() {
  edit_education2.style.visibility = "hidden"

});
education_plus_btn.addEventListener('click', function() {
  edit_education3.style.visibility = "visible"

});
edit_educationOut_btn3.addEventListener('click', function() {
  edit_education3.style.visibility = "hidden"

});


// console.log(editAboutCont);
const currentAcount = {
  userName: "هشام احمد",
  speciality: "UIUX Designer and Developer",
  // email: "HeshamAmhed @gmail.com",
  country: "مصر , المنيا",
//   aboutMe:
//     "هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من",
// aboutMe_more:"مثل هذا النص أو العديد من النصوص الأخرى حسبlm'lnlknkln; الحاجة. هذا النص ",
       
  };


const displayPersonalInfo = function (acc) {
  userName.textContent = acc.userName;
  speciality.textContent = acc.speciality;
  email.textContent = acc.email;
  country.textContent = acc.country;
  // about.textContent = acc.aboutMe;
  // aboutMe_more.textContent = acc.aboutMe_more;
  
};

displayPersonalInfo(currentAcount);

// const displayAboutCont = function (acc) {

// editAboutCont.addEventListener("click", () => {
//   editform.style.display = "block";
// });
// editBtn.addEventListener("click", () => {
//   currentAcount.aboutMe = editTextArea.value;
// });
// };
// displayAboutCont(currentAcount);
/////////////////////////////////////////////
const swiperWrapper = document.querySelector(".swiper-wrapper-review");
const swipercards = document.querySelectorAll(
  ".swiper-wrapper-review .swiper-slide"
);
const prevSlide = document.querySelector(
  ".rating-section .arrow-group img:first-child"
);
const nextSlide = document.querySelector(
  ".rating-section .arrow-group img:nth-child(2)"
);
let currentIndex = 0;

function showSlide(index) {
  if (index >= swipercards.length) {
    currentIndex = 0;
  } else if (index < 0) {
    currentIndex = swipercards.length - 1;
  } else {
    currentIndex = index;
  }
  // const cardWidth = swipercards[currentIndex].clientWidth;
  // console.log(cardWidth);
  // swiperWrapper.scrollTo({
  //   left: -currentIndex * cardWidth,
  //   behavior: "smooth",
  // });
  swipercards.forEach(
    (e) => (e.style.transform = `translateX(${currentIndex * 463}px)`)
  );
}
prevSlide.addEventListener("click", () => {
  showSlide((currentIndex -= 1));
});
nextSlide.addEventListener("click", () => {
  showSlide((currentIndex += 1));
});
/////////////////////////////////////////////
///////////////suggested-mentors//////////////
const suggestedCards = document.querySelectorAll(".suggested-mentors .card");
const rate = 0;

suggestedCards.forEach((_, index) => {
  const selectedCard = `.suggested-mentors .card:nth-of-type(${index + 1})`;
  const stars = document.querySelectorAll(`${selectedCard} .stars svg`);
  const starspath = document.querySelectorAll(
    `${selectedCard} .stars svg path`
  );

  stars.forEach((star, i) =>
    star.addEventListener("click", () => {
      starspath.forEach((path, n) => {
        n <= i
          ? path.setAttribute("fill", "#FFCF00")
          : path.setAttribute("fill", "#D0D5DD");
      });
    })
  );
});
const mentorsLandin = document.querySelector(`.suggested-mentors .cards`);
const mentorLandin = document.querySelectorAll(
  `.suggested-mentors .cards .card`
);
const prevmentor = document.querySelector(".right-mentor");
const nextmentor = document.querySelector(".left-mentor");
let currentMentor = 0;

function showMentor(index) {
  if (index >= mentorLandin.length) {
    currentMentor = 0;
  } else if (index < 0) {
    currentMentor = mentorLandin.length - 1;
  } else {
    currentMentor = index;
  }

  const mentorWidth = mentorLandin[currentMentor].clientWidth;
  mentorsLandin.scrollTo({
    left: -currentMentor * mentorWidth - 30 * currentMentor,
    behavior: "smooth",
  });
}
prevmentor.addEventListener("click", () => {
  showMentor((currentMentor -= 1));
});
nextmentor.addEventListener("click", () => {
  showMentor((currentMentor += 1));
});
document.getElementById('change_photo').addEventListener('click', function() {
  // إنشاء عنصر input من نوع file
  const input = document.createElement('input');
  input.type = 'file';
  input.accept = 'image/*'; // علشان يقبل فقط ملفات الصور

  // لما المستخدم يختار صورة
  input.onchange = function(event) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function(e) {
        // تغيير الصورة في الـ mentor-photo
        const mentorPhoto = document.querySelector('.mentor-photo img');
        mentorPhoto.src = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  };

  // فتح نافذة اختيار الملف
  input.click();
});