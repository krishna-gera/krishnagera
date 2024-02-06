// script.js
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contributionForm');
    const receipt = document.getElementById('receipt');
    const nameInput = document.getElementById('name');
    const amountInput = document.getElementById('amount');
    const nameReceipt = document.getElementById('nameReceipt');
    const amountReceipt = document.getElementById('amountReceipt');
    const timeReceipt = document.getElementById('timeReceipt');
    const paymentSecurity = document.getElementById('paymentSecurity');
    const payButton = document.getElementById('payButton');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const name = nameInput.value;
        const amount = amountInput.value;

        // Simulate payment integration
        simulatePayment(name, amount);
    });

    function simulatePayment(name, amount) {
        // Simulate payment processing
        setTimeout(function() {
            const time = new Date().toLocaleString();
            const paymentMessage = `Payment of ₹${amount} successful.`;

            nameReceipt.textContent = `Name: ${name}`;
            amountReceipt.textContent = `Amount: ₹${amount}`;
            timeReceipt.textContent = `Time: ${time}`;
            paymentSecurity.textContent = `Payment secured by your payment service.`;

            receipt.style.display = 'block';
        }, 2000); // Simulating 2 seconds delay for payment processing
    }

    function generateTransactionId() {
        return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    }
});
