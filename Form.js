class Form {
    constructor(){
        this.question1 = createElement('h3',"Q1 : Do you like maths?")
        this.r1 = createRadio('h3')
        this.r1.option('yes')
        this.r1.option('no')
        this.r1.style('width', '60px')
        
        
        this.question2 = createElement('h3',"Q2 : Do you like building structures?")
        this.r2 = createRadio('h3')
        this.r2.option('yes')
        this.r2.option('no')
        this.r2.style('width', '60px')

        this.question3 = createElement('h3',"Q3 : Do you perfectly use the space when cleaning?")
        this.r3 = createRadio('h3')
        this.r3.option('yes')
        this.r3.option('no')
        this.r3.style('width', '60px')

        this.question4 = createElement('h3',"Q4 : Do you have sharp observation skills?")
        this.r4 = createRadio('h3')
        this.r4.option('yes')
        this.r4.option('no')
        this.r4.style('width', '60px')

        this.question5 = createElement('h3',"Q5 : Are you a good planner?")
        this.r5 = createRadio('h3')
        this.r5.option('yes')
        this.r5.option('no')
        this.r5.style('width', '60px')

        this.title = createElement('h2',"Alpha the profession selector!!")

        this.submit = createButton('Submit')
        //this.next = createButton("Next")
        
    }
    display(){
        var i = 1
        this.title.position(displayWidth/2-150,0)
        
            this.question1.position(displayWidth/4-200,80)
            this.r1.position(displayWidth/4-200,125)
        
        
         
            this.question2.position(displayWidth/4-200,150)
            this.r2.position(displayWidth/4-200,200)
         
       
        
            this.question3.position(displayWidth/4-200,230)
            this.r3.position(displayWidth/4-200,275)
    
        
        
        
            this.question4.position(displayWidth/4-200,300)
            this.r4.position(displayWidth/4-200,340)
    
        
        
        
            this.question5.position(displayWidth/4-200,370)
            this.r5.position(displayWidth/4-200,415)

            this.submit.position(170,displayHeight/2+40)
        
        





    

        
    }
}