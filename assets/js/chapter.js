(function () {
  const nextButtons = document.querySelectorAll('.js-next-chapter');
  const modal = document.getElementById('supportModal');
  const continueButton = document.getElementById('continueReading');
  const closeButton = document.getElementById('closeSupportModal');

  if (!nextButtons.length || !modal || !continueButton || !closeButton) return;

  let nextUrl = '';

  function openModal(url) {
    nextUrl = url;
    modal.hidden = false;
    document.body.classList.add('modal-open');
    continueButton.focus();
  }

  function closeModal() {
    modal.hidden = true;
    document.body.classList.remove('modal-open');
  }

  nextButtons.forEach(function (button) {
    button.addEventListener('click', function (event) {
      const shouldShow = button.dataset.showSupport === 'true';
      if (!shouldShow) return;

      event.preventDefault();
      openModal(button.href);
    });
  });

  continueButton.addEventListener('click', function () {
    window.location.href = nextUrl;
  });

  closeButton.addEventListener('click', function () {
    closeModal();
  });

  modal.addEventListener('click', function (event) {
    if (event.target === modal) closeModal();
  });

  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape' && !modal.hidden) closeModal();
  });
})();
