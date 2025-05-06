document.querySelectorAll('.faq-question').forEach((faqElement) => {
    faqElement.addEventListener('click', () => toggleFaq(faqElement));
  });
  
  function toggleFaq(faqElement) {
    const answer = faqElement.nextElementSibling;
    const number = faqElement.querySelector('.faq-number');
    const questionText = faqElement.querySelector('.faq-text');
    const button = faqElement.querySelector('.toggle');
  
    if (!answer.style.maxHeight || answer.style.maxHeight === '0px') {
      answer.style.maxHeight = answer.scrollHeight + 'px';
      answer.classList.add('visible');
      number.style.fontSize = '4rem';
      number.style.color = '#12533F';  
      questionText.style.fontSize = '1.5rem'; 
      questionText.style.color = '#12533F';
      button.classList.add('active');
    } else {
      answer.style.maxHeight = '0';
      answer.classList.remove('visible');
      number.style.fontSize = '1rem';
      number.style.color = '#4a4a4a';
      questionText.style.fontSize = '1rem';
      questionText.style.color = '#333';
      button.classList.remove('active');
    }
  }