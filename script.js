let sendbtn=document.getElementById("sendBtn");
let textbox=document.getElementById("textbox");
let sendcontain=document.getElementById("container");
let you=document.getElementsByClassName("youchat");
let user={message:""};
var possiblemessage=[{"message":"How are you?","response":"I am great"},

{"message": "How are you?", "response": "I am great"},
{"message": "What's your name?", "response": "I am a computer program."},
{"message": "Tell me a joke.", "response": "Why don't scientists trust atoms? Because they make up everything."},
{"message": "What is the meaning of life?", "response": "The meaning of life is subjective and varies for each individual."},
{"message": "Do you like pizza?", "response": "I don't have personal preferences, but many people enjoy pizza."},

{"message": "Favorite color?", "response": "I don't have a favorite color, but I can appreciate the beauty of all colors."},
{"message": "Tell me something interesting.", "response": "Honey never spoils. Archaeologists have found pots of honey in ancient Egyptian tombs that are over 3,000 years old and still perfectly edible."},
{"message": "What's the capital of France?", "response": "The capital of France is Paris."},
{"message": "How tall is Mount Everest?", "response": "Mount Everest is approximately 29,032 feet (8,848 meters) tall."},

{"message": "Where do you live?", "response": "I exist in the digital realm."},
{"message": "Can you help me with my homework?", "response": "I can provide information and assistance, but I don't do homework."},
{"message": "What's your favorite movie?", "response": "I don't watch movies, but I can help you find recommendations."},
{"message": "Tell me a fun fact.", "response": "Bananas are berries, but strawberries aren't."},
{"message": "How do I learn programming?", "response": "Learning programming involves practice, resources, and patience."},
{"message": "How does photosynthesis work?", "response": "Photosynthesis is the process by which plants convert sunlight into energy."},
  {"message": "What's the largest mammal on Earth?", "response": "The blue whale holds the title for the largest mammal on Earth."},
  {"message": "Can you speak any other languages?", "response": "I understand and can generate text in multiple languages."},
  {"message": "What's your favorite book?", "response": "I don't have personal favorites, but I can recommend popular books."},
  {"message": "Tell me a historical fact.", "response": "The Great Wall of China is the longest wall in the world, stretching over 13,000 miles."},
  

]
console.log(sendbtn)
 function sendmessage(message)
 {
  let g=document.createElement('div');
  g.className="   float-end    w-50   shadow-sm  youchat" ;
  g.style.margin="10px";
  g.style.padding="15px";
  g.style.backgroundColor="lightgray";
  g.innerHTML=`<span>You:</span>"
  <span  class="you">${message}</span> <br>`
  g.animate([{easeing:"ease-in",opacity:0.4},{opacity:1}],{duration:1000})
  
  sendcontain.appendChild(g);
 }
 function chatmessage(message)
 {
  let g=document.createElement('div');
  g.className="   float-start     shadow-sm  youchat" ;
  g.style.margin="10px";
  g.style.padding="15px";
  g.style.backgroundColor="darkgray"
  g.innerHTML=`<span>Chatbot:</span>"
  <span  class="chatbox">${message}</span>`
 
  sendcontain.appendChild(g);
 }
 setTimeout(function(e){
  chatmessage("hello from chatbot")
 },1000)
 
 
 

 
 sendbtn.addEventListener("click",function(e)
 {
  if(textbox.value==="")
  {
     alert(" Please type something");
  }
  else
  {
  let message1=textbox.value;
  user.message=message1;
  sendmessage(message1);
  textbox.value="";
  processm();
  }
 })
 function processm()
 {
   let r=0;
  for(let i=0;i<possiblemessage.length;i++)
  {
     if(possiblemessage[i].message.toLowerCase()===user.message.toLowerCase())
     {
      r=1;
      setTimeout(function(e){
         chatmessage(possiblemessage[i].response);
        },1000)
      break;
     }

  }
  if(r===0)
  {
   setTimeout(function(e){
      chatmessage("Could you please mention more specifically");
     },1000)
  }
 }

