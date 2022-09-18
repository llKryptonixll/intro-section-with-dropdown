// toggle dropdown
function open_close_Dropdown(dropdownElement, arrowUpElement, arrowDownElement){
    const dropdown = document.getElementById(dropdownElement);
    dropdown.classList.toggle("hidden");

    const arrowUp = document.getElementById(arrowUpElement);
    const arrowDown = document.getElementById(arrowDownElement);

    // switch icons 
    arrowDown.classList.toggle("hidden");
    arrowUp.classList.toggle("grid");
    arrowUp.classList.toggle("hidden");
}

const featuresButtonDesktop = document.getElementById("features-dropdown-btn");
featuresButtonDesktop.addEventListener("click", () => {
    open_close_Dropdown("features-dropdown", "arrow-up-features", "arrow-down-features");
});

const featuresButtonMobile = document.getElementById("features-dropdown-btn-mobile");
featuresButtonMobile.addEventListener("click", () => {
    open_close_Dropdown("features-dropdown-mobile", "arrow-up-features-mobile", "arrow-down-features-mobile");
});

const companyButtonDesktop = document.getElementById("company-dropdown-btn");
companyButtonDesktop.addEventListener("click", () => {
    open_close_Dropdown("company-dropdown", "arrow-up-company", "arrow-down-company");
});

const companyButtonMobile = document.getElementById("company-dropdown-btn-mobile");
companyButtonMobile.addEventListener("click", () => {
    open_close_Dropdown("company-dropdown-mobile", "arrow-up-company-mobile", "arrow-down-company-mobile");
});


// open sidebar 
const openSidebarButton = document.getElementById("open-sidebar-btn");
const closeSidebarButton = document.getElementById("close-sidebar-btn");
const sidebar = document.getElementById("sidebar");
const backgroundLayer = document.getElementById("background-layer");

openSidebarButton.addEventListener("click", () => {
    document.body.style.overflowY = "hidden";
    // switch icon
    openSidebarButton.classList.add("hidden");
    closeSidebarButton.classList.add("block");
    closeSidebarButton.classList.remove("hidden");

    // open sidebar
    sidebar.classList.remove("hidden");
    sidebar.classList.add("grid");

    // show bg layer
    backgroundLayer.classList.add("grid");
    backgroundLayer.classList.remove("hidden");
});

closeSidebarButton.addEventListener("click", () => {
    document.body.style.overflowY = "auto";
    // switch icon
    openSidebarButton.classList.remove("hidden")
    closeSidebarButton.classList.remove("block");
    closeSidebarButton.classList.add("hidden");

    // close sidebar
    sidebar.classList.add("hidden");
    sidebar.classList.remove("grid");

    // hide layer
    backgroundLayer.classList.remove("grid");
    backgroundLayer.classList.add("hidden");
});

