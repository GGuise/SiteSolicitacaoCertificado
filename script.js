// Script para manipulação do formulário de newsletter
document.addEventListener('DOMContentLoaded', function() {
    const newsletterForm = document.querySelector('.newsletter-form');
    
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const emailInput = this.querySelector('.newsletter-input');
            
            if (emailInput.value.trim() === '') {
                alert('Por favor, insira seu e-mail.');
                return;
            }
            
            // Aqui você adicionaria o código para enviar o e-mail para o servidor
            alert('Obrigado por se inscrever em nossa newsletter!');
            emailInput.value = '';
        });
    }
    
    // Adicionar comportamento de rolagem suave para links de âncora
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
});
