let faqs = [
    {
        question: "If your life had a mascot, what would the mascot be ?",
        answer: "Bart Simpson",
        open: false
    },

    {
        question: "What is the most embarrassing thing you have ever worn ?",
        answer: "Minnie Mouse sweater",
        open: false
    },

    {
        question: "What’s the worst book you’ve been forced to read in school ?",
        answer: "Alice in wonderland",
        open: false
    },

    {
        question: "What is your favorite movie soundtrack ?",
        answer: "Fight Club",
        open: false
    }
];


const faqsElement = document.querySelector('.faqs');

faqs.map(function (faq) {

	const faqElement = document.createElement('div');
	faqElement.classList.add('faq');
	if (faq.open) {
		faqElement.classList.add('open');
	}

	faqElement.addEventListener('click', function (e) {
		faq.open = true;
		this.classList.toggle('open');
	});

	const faqQuestionElement = document.createElement('div');
	faqQuestionElement.classList.add('question');
	faqQuestionElement.innerText = faq.question;

	faqElement.appendChild(faqQuestionElement);

	const faqAnswerElement = document.createElement('div') ;
	faqAnswerElement.classList.add('answer');
	faqAnswerElement.innerText = faq.answer;

	faqElement.appendChild(faqAnswerElement);

	faqsElement.appendChild(faqElement);
});