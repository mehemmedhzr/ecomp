//Choosing where to complain

let newComplaintSide = document.querySelector('.directNewComplaint');

let newComplaintOption = document.querySelector('.complaintOption');

let complaintOptionBox = document.querySelector('.complaintOption>div');

  //Open the option box
  newComplaintSide.addEventListener('click', function () {
    newComplaintOption.style.display = 'flex';
  })

  //Close the option box
  newComplaintOption.addEventListener('click', function(e) {
    if(e.target != complaintOptionBox){
      this.style.display = 'none';
    }
  })







