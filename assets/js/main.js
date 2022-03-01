// ----------------sticky filter section show and hide 
let filterSection = document.querySelector(".filter-section.sticky")
window.addEventListener("scroll", function () {
    this.scrollY >= 470 ? filterSection.style.top = "65px" : filterSection.style.top = "-2000px";

})
// -----------------allfilter modal functionality 
let allFilterModalListDiv = document.querySelectorAll("#allFilterModalListDiv li")
let allFilterModalContentDivs = document.querySelectorAll(".filterModalItem")
allFilterModalListDiv.forEach(ele => {
    ele.addEventListener("click", e => {
        e.target.classList.add("active")
        allFilterModalListDiv.forEach(ele => { ele != e.target ? ele.classList.remove("active") : "" })
        allFilterModalContentDivs.forEach(elem => {
            if (elem.attributes.id.nodeValue == e.target.dataset.modalContentTitle) {
                elem.classList.remove("d-none")
                elem.classList.add("zoomInDown")
                elem.classList.remove("fadeOutDown")
            }
            else {
                elem.classList.add("d-none")
                elem.classList.remove("zoomInDown")
                elem.classList.add("fadeOutDown")
            }
        })
    })
})

// ------------------------------ allfilter nav scroll
const scrollContainer = document.querySelectorAll(".allfilter-horizontal-scroll");
scrollContainer.forEach(ele => {
    ele.addEventListener("wheel", (e) => {
        e.preventDefault();
        ele.scrollLeft += e.deltaY;
    });
})