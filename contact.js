document.getElementById('contactButton').addEventListener('click', function() {
    document.getElementById('overlay').classList.add('show');
    document.getElementById('contactCard').style.display = 'block';
    setTimeout(() => {
        document.getElementById('contactCard').style.display = 'block';
    }, 10); // Delay to allow CSS transition to take effect
});

document.getElementById('closeButton').addEventListener('click', function() {
    closeCard();
});

document.getElementById('overlay').addEventListener('click', function() {
    closeCard();
});

function closeCard() {
    document.getElementById('overlay').classList.remove('show');
    document.getElementById('contactCard').style.display = 'none';
}

// Email Obfuscation
const a = "bmF0YWxpZXZhbndpbmdlcmRlbjE1";
const b = "Z21haWwuY29t";
const c = atob(a) + atob("QA==") + atob(b);

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById("email-button").addEventListener("click", function(e) {
        e.preventDefault(); // Prevent the default link action
        window.location.href = "mailto:" + c; // Set the mailto link dynamically
    });
});