document.addEventListener("DOMContentLoaded", () => {
  let thumbnails = Array.from(document.getElementsByClassName("thumbnail"));

  thumbnails.forEach(thumb => {
    thumb.addEventListener("click", e => {
      console.log("hello")
    })
  })
})