function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }
  
  let questions = [
    {
      question: "What does HTML stand for?",
      answer: "Hyper Text Markup Language",
      options: [
        "Hyper Text Preprocessor",
        "Hyper Text Markup Language",
        "Hyper Text Multiple Language",
        "Hyper Tool Multi Language"
      ]
    },
    {
      question: "What does CSS stand for?",
      answer: "Cascading Style Sheet",
      options: [
        "Common Style Sheet",
        "Colorful Style Sheet",
        "Computer Style Sheet",
        "Cascading Style Sheet"
      ]
    },
    {
      question: "What does SQL stand for?",
      answer: "Structured Query Language",
      options: [
        "Stylish Question Language",
        "Stylesheet Query Language",
        "Statement Question Language",
        "Structured Query Language"
      ]
    },
    {
      question: "What does XML stand for?",
      answer: "eXtensible Markup Language",
      options: [
        "eXtensible Markup Language",
        "eXecutable Multiple Language",
        "eXTra Multi-Program Language",
        "eXamine Multiple Language"
      ]
    },
    {
      question: "What does JSON stand for?",
      answer: "JavaScript Object Notation",
      options: [
        "JavaScript Object Notation",
        "JavaScript Offline Notation",
        "JavaScript Online Notation",
        "JavaScript Open Notation"
      ]
    },
    {
      question: "Which HTML attribute is used to define inline styles?",
      answer: "style",
      options: [
        "class",
        "font",
        "styles",
        "style"
      ]
    },
    {
      question: "Which is the correct CSS syntax?",
      answer: "body {color: black;}",
      options: [
        "{body:color=black;}",
        "body:color=black;",
        "{body;color:black;}",
        "body {color: black;}"
      ]
    },
    {
      question: "Which property is used to change the background color?",
      answer: "background-color",
      options: [
        "bgcolor",
        "color",
        "background-color",
        "background"
      ]
    },
    {
      question: "Which CSS property controls the text size?",
      answer: "font-size",
      options: [
        "text-style",
        "text-size",
        "font-size",
        "font-style"
      ]
    },
    {
      question: "Which property is used to change the text color of an element?",
      answer: "color",
      options: [
        "fgcolor",
        "text-color",
        "color",
        "font-color"
      ]
    },
    {
      question: "Which CSS property is used to change the font of an element?",
      answer: "font-family",
      options: [
        "font-family",
        "font-weight",
        "font-style",
        "font-size"
      ]
    },
    {
      question: "How do you add a background color for all <h1> elements?",
      answer: "h1 {background-color: #FFFFFF;}",
      options: [
        "h1.all {background-color: #FFFFFF;}",
        "h1 {background-color: #FFFFFF;}",
        "all.h1 {background-color: #FFFFFF;}",
        "h1 {bgcolor: #FFFFFF;}"
      ]
    },
    {
      question: "Which CSS property is used to change the left margin of an element?",
      answer: "margin-left",
      options: [
        "margin-left",
        "padding-left",
        "left-margin",
        "margin"
      ]
    },
    {
      question: "Which CSS property is used to make the text bold?",
      answer: "font-weight",
      options: [
        "font-weight",
        "font-style",
        "text-style",
        "text-weight"
      ]
    },
    {
      question: "Which CSS property is used to create space between the element's border and inner content?",
      answer: "padding",
      options: [
        "padding",
        "margin",
        "border",
        "spacing"
      ]
    }
  ];
  
  
  shuffle(questions);
  console.log(questions);
  