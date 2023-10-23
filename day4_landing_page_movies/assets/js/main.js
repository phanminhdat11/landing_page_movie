




function hideBottom(){
    const bottom = document.getElementById("bottom");
    const minus = document.getElementById("minus");
    const arrowup = document.getElementById("arrowup");
    bottom.style.bottom = "-8%";
    bottom.style.transition = "0.4s"
    minus.style.display = "none";
    arrowup.style.display = "block";

}
function showBottom(){
    const bottom = document.getElementById("bottom");
    const arrowup = document.getElementById("arrowup");
    const minus = document.getElementById("minus");
    arrowup.style.display = "none";
    bottom.style.bottom = "0%"
    bottom.style.transition = "0.4s"
    minus.style.display = "block";
}
document.addEventListener("DOMContentLoaded", function () {
    var backToTopButton = document.getElementById("back_to_top");
  
    window.addEventListener("scroll", function () {
      if (window.scrollY > 500) { // Hiển thị nút khi người dùng cuộn xuống ít nhất 300px
        backToTopButton.style.display = "block";
      } else {
        backToTopButton.style.display = "none";
      }
    });
  
    backToTopButton.addEventListener("click", function () {
      // Cuộn lên đầu trang khi nút được nhấn
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, );
  });
  
const thumnail_1 = document.getElementById("thumnail_1");

const thumnail_icon_play = document.getElementById("thumnail_icon_play");

const icon_play = document.getElementById("icon_play");
thumnail_1.addEventListener("mouseover", function(){
    thumnail_icon_play.style.backgroundColor = " rgb(67, 208, 67)";
    thumnail_icon_play.style.width = "50px";
    thumnail_icon_play.style.height = "50px";
    icon_play.style.color = "white";
    icon_play.style.fontSize = "30px";
    thumnail_1.style.transform = "scale(1.1)"
})
thumnail_1.addEventListener('mouseout', function(){
    thumnail_icon_play.style.backgroundColor = " white";
    thumnail_icon_play.style.width = "40px";
    thumnail_icon_play.style.height = "40px";
    icon_play.style.color = "black";
    icon_play.style.fontSize = "20px";
    thumnail_1.style.transform = "scale(1)"
})

const thumnail_2 = document.getElementById("thumnail_2");
const thumnail_icon_play2 = document.getElementById("thumnail_icon_play2");
const icon_play2 = document.getElementById("icon_play2");

thumnail_2.addEventListener("mouseover", function(){
    thumnail_icon_play2.style.backgroundColor = "rgb(67, 208, 67)";
    thumnail_icon_play2.style.width = "50px";
    thumnail_icon_play2.style.height = "50px";
    icon_play2.style.color = "white";
    icon_play2.style.fontSize = "30px";
    thumnail_2.style.transform = "scale(1.1)"
})
thumnail_2.addEventListener('mouseout', function(){
    thumnail_icon_play2.style.backgroundColor = " white";
    thumnail_icon_play2.style.width = "40px";
    thumnail_icon_play2.style.height = "40px";
    icon_play2.style.color = "black";
    icon_play2.style.fontSize = "20px";
    thumnail_2.style.transform = "scale(1)"
})


//  const slide_thumnail = document.getElementById("slide_thumnail");

//  dragging = (e) =>{
//   slide_thumnail.scrollLeft = e.pageX;
//  }

// slide_thumnail.addEventListener('mousemove', dragging)
document.getElementById('next').onclick = function(){
  const widthItem = document.querySelector('.albums_1').offsetWidth;
  document.getElementById('slide_albums').scrollLeft += widthItem;

}
document.getElementById('prev').onclick = function(){
  const widthItem = document.querySelector('.albums_1').offsetWidth;
  document.getElementById('slide_albums').scrollLeft -= widthItem;
  
}