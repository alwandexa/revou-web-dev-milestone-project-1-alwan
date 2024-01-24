const changeUrl = () => (document.location.href = "learning.html");

const courseCard = document.getElementsByClassName("course-card");

Array.from(courseCard).forEach(function (element) {
  element.addEventListener("click", changeUrl);
});
