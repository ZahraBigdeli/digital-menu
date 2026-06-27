  document.getElementById('orderForm').addEventListener('submit', function(event) {
      event.preventDefault();
      const formData = new FormData(event.target);
      let orderSummary = 'سفارش شما:\n';
      formData.forEach((value, key) => {
        if (value) {
          const itemLabel = document.querySelector(`label[for=${key}]`).innerText;
          orderSummary += `${itemLabel}: ${event.target[key].selectedOptions[0].innerText}\n`;
        }
      });
      alert(orderSummary + '\nممنون از سفارش شما!');
    });