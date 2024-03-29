const arrows = document.querySelectorAll(".arrows");
const list2 = document.querySelector(".list2");

 arrows.forEach((arrow, i)=> {
  const itemNumber =  list2[i]
  let  clickCounter = 0;
  arrow.addEventListener("click", () => {
      clickCounter++;
      if (itemNumber - (4 + clickCounter) >= 0) {
        list2[i].style.transform = `translateX($ {
        list2[i].computedStyleMap().get("transform")[0].x.value - 300 
      }px)`;
      } else {
        list2[i].style.transform = "translateX(0)";
        clickCounter = 0;
      }
    });
      console.log(list2[i])
});
