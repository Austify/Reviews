const reviews = [
    {
      id: 1,
      name: "susan smith",
      job: "web developer",
      img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
      text:
        "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
    },
    {
      id: 2,
      name: "anna johnson",
      job: "web designer",
      img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
      text:
        "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
    },
    {
      id: 3,
      name: "peter jones",
      job: "intern",
      img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
      text:
        "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
    },
    {
      id: 4,
      name: "bill anderson",
      job: "the boss",
      img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
      text:
        "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
    },
  ];



  //add click event listener to the 3 buttons
  //On click chevron right, select first array item.
    //append properties to html elements of current item.
  //On click chevron left, select previous array item 
    //append properties of object to html element
  //On click surprise me button, randomly generate an array index
  //select item with array index
  //append properties of selected object to html element
  let reviewerImage = document.getElementById("person-img");
  let reviewerName = document.getElementById("author");
  let reviewerRole =  document.getElementById("job");
  let reviewerComment = document.getElementById("info");
  let btns =  document.querySelectorAll("button");
  let lastArrayItemIndex =  reviews.length - 1;

  let currentArrayIndex;
  
   btns.forEach(function(btn){

    btn.addEventListener("click",function(){
      
        let btnClass = btn.getAttribute("class");

       if(btnClass === "prev-btn"){
           prevBtn();
       }else if(btnClass === "next-btn"){
           nextBtn();
       }else if(btnClass === "random-btn"){
          randomBtn();
       }

    })     
   })

   function prevBtn(){
    let imageUrl = document.getElementById("person-img").getAttribute("src");
       for(let i = 0; i < reviews.length; i++){
           if(reviews[i].img == imageUrl){
               currentArrayIndex = i;
           }
       }
       if(currentArrayIndex == 0){
        reviewerImage.setAttribute("src",reviews[lastArrayItemIndex].img);
        reviewerName.textContent = reviews[lastArrayItemIndex].name;
        reviewerRole.textContent = reviews[lastArrayItemIndex].job;
        reviewerComment.textContent =  reviews[lastArrayItemIndex].text;
       }else{
        let previousArrayIndex =  currentArrayIndex - 1;
        reviewerImage.setAttribute("src",reviews[previousArrayIndex].img);
        reviewerName.textContent = reviews[previousArrayIndex].name;
        reviewerRole.textContent = reviews[previousArrayIndex].job;
        reviewerComment.textContent =  reviews[previousArrayIndex].text;
       }   
   }

   function nextBtn(){
      //find the currentindex of the array
      //add 1 to that index
      //display the array item
     
      let imageUrl =  document.getElementById("person-img").getAttribute("src");
     
      let lastArrayItemIndex =  reviews.length - 1;
      for(let i = 0; i < reviews.length; i++){
          if(reviews[i].img == imageUrl){  
            currentArrayIndex = i;
          }
      }
      if(currentArrayIndex == lastArrayItemIndex){
          currentArrayIndex = 0;
        reviewerImage.setAttribute("src",reviews[currentArrayIndex].img);
        reviewerName.textContent = reviews[currentArrayIndex].name;
        reviewerRole.textContent = reviews[currentArrayIndex].job;
        reviewerComment.textContent =  reviews[currentArrayIndex].text;
      }else{
        reviewerImage.setAttribute("src",reviews[currentArrayIndex + 1].img);
        reviewerName.textContent = reviews[currentArrayIndex + 1].name;
        reviewerRole.textContent = reviews[currentArrayIndex + 1].job;
        reviewerComment.textContent =  reviews[currentArrayIndex + 1 ].text;
      }

   }
function randomBtn(){
    let randomArrayIndex =  Math.floor(Math.random() * reviews.length );
        reviewerImage.setAttribute("src",reviews[randomArrayIndex].img);
        reviewerName.textContent = reviews[randomArrayIndex].name;
        reviewerRole.textContent = reviews[randomArrayIndex].job;
        reviewerComment.textContent =  reviews[randomArrayIndex].text;
}
 