const collapsible = () => {
  const coll = document.getElementsByClassName("collapsible");

  for (let i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function () {
      this.classList.toggle("active");
      const content = this.nextElementSibling;
      if (content.style.display == "block") {
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
    header.parentNode.parentNode.parentNode.style.display = "block";
  });
};

const sidebar = () => {
  const sidebar = document.getElementsByTagName("aside")[0];

  console.log(sidebar);

  if (sidebar.style.display == "none") {
    sidebar.style.display = "block";
  } else {
    sidebar.style.display = "none";
  }
};

document
  .getElementById("search-input")
  .addEventListener("search", sidebarSearch);

collapsible();
