document.addEventListener("DOMContentLoaded", () => {
  // Menú hamburguesa
  const menuBtn = document.getElementById("menu-btn");
  const menu = document.getElementById("menu");
  if (menuBtn) {
    menuBtn.addEventListener("click", () => {
      menu.classList.toggle("hidden");
    });
  }

  // Carrito en servicios
  const checkboxes = document.querySelectorAll(".product-check");
  const cart = document.getElementById("cart");
  const totalSpan = document.getElementById("total");
  const whatsappServicios = document.getElementById("whatsapp-servicios");

  if (checkboxes.length > 0 && cart && totalSpan && whatsappServicios) {
    let total = 0;

    function updateCart() {
      cart.innerHTML = "";
      total = 0;
      let mensaje = "Hola, quiero solicitar los siguientes servicios:\n\n";

      checkboxes.forEach((check) => {
        if (check.checked) {
          const card = check.closest(".product-card");
          const name = card.querySelector("h3").textContent;
          const price = parseInt(card.querySelector(".price").textContent);

          total += price;
          mensaje += `- ${name}: $${price}\n`;

          const li = document.createElement("li");
          li.textContent = `${name} - $${price}`;
          cart.appendChild(li);
        }
      });

      totalSpan.textContent = total;
      mensaje += `\nTotal: $${total}`;

      const numero = "5491122334455"; // Cambia por tu número real
      whatsappServicios.href = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;
    }

    checkboxes.forEach((check) => {
      check.addEventListener("change", updateCart);
    });
  }

  // WhatsApp directo en contacto
  const whatsappContacto = document.getElementById("whatsapp-contacto");
  if (whatsappContacto) {
    const numero = "5491122334455"; // Cambia por tu número real
    whatsappContacto.href = `https://wa.me/${numero}?text=Hola%20HincTech,%20quiero%20hacer%20una%20consulta`;
  }
});
