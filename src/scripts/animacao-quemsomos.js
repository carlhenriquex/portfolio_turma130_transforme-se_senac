document.addEventListener('DOMContentLoaded', () => {
    const popover = document.getElementById('ucPopover');
    const popoverText = document.getElementById('popoverText');
    const ucButtons = document.querySelectorAll('.uc-circle');
    const cardsTimelineSection = document.querySelector('.cards-timeline-section');
  
    ucButtons.forEach(button => {
      button.addEventListener('click', (event) => {
        // Impede o clique de se propagar e fechar o balão imediatamente
        event.stopPropagation();
        
        const isActive = button.classList.contains('active');
        const customText = button.getAttribute('data-popover-text');
  
        // 1. Desativa todos os botões e oculta o popover
        ucButtons.forEach(btn => btn.classList.remove('active'));
        popover.classList.remove('visible');
  
        // 2. Se o botão não estava ativo, ativa-o e mostra o popover
        if (!isActive) {
          button.classList.add('active');
          popoverText.textContent = customText; // Define o texto personalizado
  
          // 3. CALCULAR A POSIÇÃO DINÂMICA DO BAlÃO
          // Pegamos as coordenadas do botão em relação à viewport
          const buttonRect = button.getBoundingClientRect();
          // Pegamos as coordenadas do contêiner inferior em relação à viewport
          const sectionRect = cardsTimelineSection.getBoundingClientRect();
  
          // O popover é posicionado em relação ao contêiner inferior.
          // Calculamos o centro horizontal do botão em relação à seção.
          const leftPosition = (buttonRect.left - sectionRect.left) + (buttonRect.width / 2);
  
          // O popover ficará um pouco acima do topo do botão.
          // Calculamos a distância vertical em relação ao topo da seção.
          // O valor negativo move para cima. O valor -30 é um ajuste fino.
          const topPosition = (buttonRect.top - sectionRect.top) - (buttonRect.height) - 30;
  
          // 4. Aplicar o posicionamento calculado ao popover
          popover.style.left = `${leftPosition}px`;
          popover.style.top = `${topPosition}px`;
          popover.style.display = 'block'; // Garante que ele exista no layout
  
          // 5. Aciona a animação de opacidade e movimento
          // Usamos setReadTimeout para garantir que o estilo de display: block foi aplicado.
          setTimeout(() => {
            popover.classList.add('visible');
          }, 10);
        } else {
          // Se já estava ativo, o clique fecha o balão
          setTimeout(() => {
            popover.style.display = 'none';
          }, 300); // Aguarda a animação de saída acabar
        }
      });
    });
  
    // Fecha o balão se clicar em qualquer outro lugar da página
    document.addEventListener('click', () => {
      ucButtons.forEach(btn => btn.classList.remove('active'));
      popover.classList.remove('visible');
      // Esconde o elemento do layout após a animação de saída
      setTimeout(() => {
        popover.style.display = 'none';
      }, 300);
    });
  });