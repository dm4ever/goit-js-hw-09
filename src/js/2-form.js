const form = document.querySelector('.feedback-form');
const emailInput = document.querySelector('input[name="email"]');
const messageInput = document.querySelector('textarea[name="message"]');

form.addEventListener('input', saveToLocalStorage);

emailInput.value = localStorage.getItem('feedback-form-state')
  ? JSON.parse(localStorage.getItem('feedback-form-state')).email
  : '';
messageInput.value = localStorage.getItem('feedback-form-state')
  ? JSON.parse(localStorage.getItem('feedback-form-state')).message
  : '';

form.addEventListener('submit', handleSubmit);

function saveToLocalStorage() {
  const formData = {
    email: emailInput.value.trim(),
    message: messageInput.value.trim(),
  };
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

function handleSubmit(event) {
  event.preventDefault();
  if (emailInput.value.trim() === '' || messageInput.value.trim() === '') {
    alert('Усі поля форми повинні бути заповнені');
  } else {
    localStorage.removeItem('feedback-form-state');

    const formData = {
      email: emailInput.value,
      message: messageInput.value,
    };
    console.log(formData);
  }

  form.reset();
}
