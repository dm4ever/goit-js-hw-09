import"./assets/styles-8bdba339.js";const o=document.querySelector(".feedback-form"),e=document.querySelector('input[name="email"]'),t=document.querySelector('textarea[name="message"]');o.addEventListener("input",m);e.value=localStorage.getItem("feedback-form-state")?JSON.parse(localStorage.getItem("feedback-form-state")).email:"";t.value=localStorage.getItem("feedback-form-state")?JSON.parse(localStorage.getItem("feedback-form-state")).message:"";o.addEventListener("submit",r);function m(){const a={email:e.value.trim(),message:t.value.trim()};localStorage.setItem("feedback-form-state",JSON.stringify(a))}function r(a){a.preventDefault(),e.value.trim()===""||t.value.trim()===""?alert("Усі поля форми повинні бути заповнені"):(localStorage.removeItem("feedback-form-state"),e.value,t.value),console.log(formData),o.reset()}
//# sourceMappingURL=commonHelpers2.js.map
