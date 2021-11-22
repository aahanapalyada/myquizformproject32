class Question {

  constructor() {
    this.title = createElement('h1')
    this.input1 = createInput("Enter Your Name Here....");
    this.input2 = createInput("Enter Your Number Here....")
   //Create a input box to enter the number



    this.button = createButton('Submit');
    this.question = createElement('h3');
    this.answers = createElement('h4');
    //Create elements for One question (h3) and 4 options (h4)




    this.message = createElement("h2");
  }

  hide(){
     this.title.hide();
    this.input1.hide();
    this.button.hide();
    this.input2.hide();
    this.message.hide();




  }

  display(){
    this.title.html("MyQuiz Game");
    this.title.position(350, 0);


    //Create html() and position() for each question, input and answers.
    this.question.html("What is 20+20-10/2?");
    this.question.position(365,80);
    this.answers.html("35 | 15 | 25");
    this.answers.position(415,120);
    this.input2.position(570,230);
    



    this.input1.position(150, 230);
    this.button.position(420, 300);

    // Add a mousepressed action when the button is clicked Display the this.message
    this.button.mousePressed(()=>{
      this.message.html("Thank You, Your Answer Has Been Submitted");
      this.message.position(220,330);
    })


  }
}
