let sidebar = document.querySelector(".sidebar");
let closeBtn = document.querySelector("#btn");
let searchBtn = document.querySelector(".bx-search");
const menuItems = document.querySelectorAll(".menu-item");

closeBtn.addEventListener("click", () => {
  sidebar.classList.toggle("open");
  menuBtnChange(); //calling the function(optional)
  if (!sidebar.classList.contains("open")) {
    menuItems.forEach((menuItem) => {
      menuItem.classList.remove("active");
    });
  }
});

// searchBtn.addEventListener("click", () => {
//   // Sidebar open when you click on the search iocn
//   sidebar.classList.toggle("open");
//   menuBtnChange(); //calling the function(optional)
// });

// following are the code to change sidebar button(optional)
function menuBtnChange() {
  if (sidebar.classList.contains("open")) {
    closeBtn.classList.replace("bx-menu", "bx-menu-alt-right"); //replacing the iocns class
  } else {
    closeBtn.classList.replace("bx-menu-alt-right", "bx-menu"); //replacing the iocns class
  }
}

// Use JavaScript to add an event listener to the Dashboard item
// Select all the menu items

// Loop through all the menu items
menuItems.forEach((menuItem) => {
  // Add a click event listener to each menu item
  menuItem.addEventListener("click", function () {
    // Toggle the "active" class on the clicked menu item
    this.classList.toggle("active");

    // Get the submenu of the clicked menu item
    let submenu = this.querySelector(".submenu");

    // If the submenu exists
    if (submenu) {
      // Toggle the "active" class on the submenu
      submenu.classList.toggle("active");
    }
  });
});