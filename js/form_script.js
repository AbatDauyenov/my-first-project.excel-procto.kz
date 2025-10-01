  const modal = document.getElementById("buyModal");
  const span = document.querySelector(".close");
  const form = document.getElementById("buyForm");
  const courseField = document.getElementById("courseField");
  const courseFixed = document.getElementById("courseFixed");

  document.querySelectorAll(".buy-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const course = btn.getAttribute("data-course");
      if(course === "any") {
        courseField.style.display = "block";
        courseFixed.value = "";
      } else {
        courseField.style.display = "none";
        courseFixed.value = course;
      }
      modal.style.display = "block";
    });
  });

  span.onclick = () => modal.style.display = "none";
  window.onclick = e => { if(e.target == modal) modal.style.display = "none"; };

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    
    const formData = new FormData(form);
    if(courseFixed.value) {
      formData.set("course", courseFixed.value);
    }
    
    // URL скрипта Google Apps Script (после настройки)
    const scriptURL = "https://script.google.com/macros/s/AKfycby_VCcdMsZu6Bv9sVgE5vcp82p_NNyiwPTmkHsgSylH7q22PVBs2tJsC1Ae6D5HNHKT/exec";
    
    await fetch(scriptURL, { method: "POST", body: formData });
    alert("Заявка отправлена!");
    modal.style.display = "none";
    form.reset();
  });