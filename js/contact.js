function validateEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

function showModal(message, type) {
  const modal = document.getElementById("response-modal");
  const modalMessage = document.getElementById("modal-message");
  const modalIcon = document.getElementById("modal-icon");

  modalMessage.innerHTML = message;

  if (type === "error") {
    modalIcon.className = "fa-solid fa-exclamation-triangle error-icon";
  } else {
    modalIcon.className = "fa-solid fa-check-circle success-icon";
  }
  modal.classList.remove("hidden");
  modal.classList.add("flex");
}

function closeModal() {
  const modal = document.getElementById("response-modal");
  modal.classList.add("hidden");
  modal.classList.remove("flex");
}

function validateForm(event) {
  event.preventDefault(); // Prevent form submission

  const firstName = document.getElementById("first-name").value.trim();
  const lastName = document.getElementById("last-name").value.trim();
  const email = document.getElementById("email").value.trim();
  const subject = document.getElementById("subject").value.trim();
  const message = document.getElementById("message").value.trim();

  let errors = [];

  if (firstName === "") {
    errors.push("El campo <strong>Nombre</strong> es obligatorio");
  }

  if (lastName === "") {
    errors.push("El campo <strong>Apellido</strong> es obligatorio");
  }

  if (email === "") {
    errors.push("El campo <strong>Email</strong> es obligatorio");
  } else if (!validateEmail(email)) {
    errors.push("El campo <strong>Email</strong> no tiene un formato válido");
  }

  if (subject === "") {
    errors.push("El campo <strong>Asunto</strong> es obligatorio");
  }

  if (message === "") {
    errors.push("El campo <strong>Mensaje</strong> es obligatorio");
  }

  if (errors.length > 0) {
    const errorMessage = `
            <h6>Por favor corrige los siguientes errores:</h6>
            <ul>
                ${errors.map((error) => `<li>${error}</li>`).join("")}
            </ul>
        `;
    showModal(errorMessage, "error");
  } else {
    const successMessage = `
            <h6>¡Gracias por tu contacto, ${firstName} ${lastName}!</h6>
            <p class="mt-2">En breve te estaré respondiendo.</p>
        `;
    showModal(successMessage, "success");

    document.getElementById("contact-form").reset();
  }
}
