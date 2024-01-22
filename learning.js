const collapsible = () => {
  const coll = document.getElementsByClassName("collapsible");
  let i;

  for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function () {
      this.classList.toggle("active");
      const content = this.nextElementSibling;
      if (content.style.display === "block") {
        content.style.display = "none";
      } else {
        content.style.display = "block";
      }
    });
  }
};

const sidebarSearch = () => {
  const keyword = document.getElementById("search-input").value.toLowerCase();

  const headers = document.querySelectorAll(".content ul li a");

  const matchingHeaders = Array.from(headers).filter((header) => {
    return header.innerHTML.toLowerCase().includes(keyword);
  });

  matchingHeaders.forEach((header) => {
    console.log(header.innerHTML)
  });
};

document
  .getElementById("search-input")
  .addEventListener("change", sidebarSearch);

collapsible();
