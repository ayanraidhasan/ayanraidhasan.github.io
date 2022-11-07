const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')

openModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = document.querySelector(button.dataset.modalTarget)
    openModal(modal)
  })
})

overlay.addEventListener('click', () => {
  const modals = document.querySelectorAll('.modal.active')
  modals.forEach(modal => {
    closeModal(modal)
  })
})

closeModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = button.closest('.modal')
    closeModal(modal)
  })
})

function openModal(modal) {
  if (modal == null) return
  modal.classList.add('active')
  overlay.classList.add('active')
}

function closeModal(modal) {
  if (modal == null) return
  modal.classList.remove('active')
  overlay.classList.remove('active')
}





//Game code

//variable statements
let unshuffled_prizes = ["Goat", "Goat", "Car"];
const doorA = document.getElementById('Door 1');
const doorB = document.getElementById('Door 2');
const doorC = document.getElementById('Door 3');
const staying = document.getElementById('Stay');
const switching = document.getElementById('Switch');
let reveal = null;
let elementClicked = false;
const img = document.createElement("img");
let choice = null;
let choice_info = null;
let stay_switch = null;
let win_lose = null;
let right_wrong = null;



//Shuffling prizes array to make it completely random 
let prizes = unshuffled_prizes
    .map(value => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value)
//console.log(prizes)



//assigning shuffled values to certain doors prior to user choosing 
let doorA_prize = prizes[0]
let doorB_prize = prizes[1]
let doorC_prize = prizes[2]

//console.log (doorA_prize, doorB_prize, doorC_prize)





//code branches off into three options based on what the user initially chooses
	doorA.addEventListener('click', function handleClick() {
  
  
	document.getElementById("Door 1").disabled = true;
  document.getElementById("Door 2").disabled = true;
  document.getElementById("Door 3").disabled = true;
  
  choice_info = "Door #1";
  
  if (localStorage.Door1) {
  localStorage.Door1 = Number(localStorage.Door1)+1;
	} else {
  localStorage.Door1 = 1;
	}
  
  
  //doorA.style.visibility = "hidden";
	
  
  //img.src = "https://picsum.photos/200/301";
	//document.body.appendChild(img);
  
  if (doorA_prize == "Car") {
  	let rand = Math.floor(Math.random() * 2);
    if (rand == 0) {
    	reveal = "2";
    } if (rand==1) {
    	reveal = "3";
    }
  }
  
	if (doorB_prize == "Car") {
  	reveal = "3";
	}
  
  if (doorC_prize == "Car") {
  	reveal = "2";
  }

//console.log(reveal);
document.querySelector ('#message',).innerHTML = `<p class = "info"> You choose ${choice_info}. Door #${reveal} contains a goat. Do you want to stay with your initial choice or switch doors?</p>`;


//Stay or Switch?
staying.addEventListener('click', function handleClick() {

stay_switch = "stay";

if (localStorage.Stayclickcount) {
  localStorage.Stayclickcount = Number(localStorage.Stayclickcount)+1;
} else {
  localStorage.Stayclickcount = 1;
}



if (doorA_prize == "Car") {
	document.getElementById("Stay").disabled = true;
  document.getElementById("Switch").disabled = true;
  win_lose = ("you won!")
  right_wrong = "right";

//win counter from staying
	if (localStorage.StayWin) {
    localStorage.StayWin = Number(localStorage.StayWin)+1;
  } else {
    localStorage.StayWin = 1;
  }
  
  
} else {
	document.getElementById("Stay").disabled = true;
  document.getElementById("Switch").disabled = true;	
  win_lose = ("you lost.")
  right_wrong = "wrong";
}

document.querySelector ('#message',).innerHTML = `<p class = ${right_wrong}>You choose to ${stay_switch} and ${win_lose} Thanks for playing!</p>`;

});



switching.addEventListener('click', function handleClick() {

stay_switch = "switch";

  if (localStorage.Switchclickcount) {
    localStorage.Switchclickcount = Number(localStorage.Switchclickcount)+1;
  } else {
    localStorage.Switchclickcount = 1;
  }



if (doorA_prize == "Car") {
	document.getElementById("Stay").disabled = true;
  document.getElementById("Switch").disabled = true;
  win_lose = ("you lose.");
  right_wrong = "wrong";
  }
  

else if ((doorB_prize == "Car" && reveal =="3") || (doorC_prize == "Car" && reveal =="2") ) {
	document.getElementById("Stay").disabled = true;
  document.getElementById("Switch").disabled = true;
  win_lose = ("you won!");
  right_wrong = "right";
  
  //win counter from switching
	if (localStorage.SwitchWin) {
    localStorage.SwitchWin = Number(localStorage.SwitchWin)+1;
  } else {
    localStorage.SwitchWin = 1;
  }
  
}

document.querySelector ('#message',).innerHTML = `<p class = ${right_wrong}>You choose to ${stay_switch} and ${win_lose} Thanks for playing!</p>`;

});

  });




	doorB.addEventListener('click', function handleClick() {
  
  //disabled
  document.getElementById("Door 2").disabled = true;
  document.getElementById("Door 1").disabled = true;
  document.getElementById("Door 3").disabled = true;
  
  choice_info = "Door #2";
  
  if (localStorage.Door2) {
  localStorage.Door2 = Number(localStorage.Door2)+1;
	} else {
  localStorage.Door2 = 1;
	}
  
  
  //doorB.style.visibility = "hidden";
  
  
	//img.src = "https://picsum.photos/200/301";
  //document.body.appendChild(img);
  
  if (doorB_prize == "Car") {
  	let rand = Math.floor(Math.random() * 2);
    if (rand == 0) {
    	reveal = "1";
    } if (rand==1) {
    	reveal = "3";
    }
  }
  
	if (doorA_prize == "Car") {
  	reveal = "3";
	}
  
  if (doorC_prize == "Car") {
  	reveal = "1";
  }

//console.log(reveal);
document.querySelector ('#message',).innerHTML = `<p class = "info"> You choose ${choice_info}. Door #${reveal} contains a goat. Do you want to stay with your initial choice or switch doors?</p>`;


//Stay or Switch?
staying.addEventListener('click', function handleClick() {


stay_switch = "stay";

if (localStorage.Stayclickcount) {
  localStorage.Stayclickcount = Number(localStorage.Stayclickcount)+1;
} else {
  localStorage.Stayclickcount = 1;
}


if (doorB_prize == "Car") {
	document.getElementById("Stay").disabled = true;
  document.getElementById("Switch").disabled = true;
  win_lose = "you won!";
  right_wrong = "right";

//win counter from staying
	if (localStorage.StayWin) {
    localStorage.StayWin = Number(localStorage.StayWin)+1;
  } else {
    localStorage.StayWin = 1;
  }  


} else {
	document.getElementById("Stay").disabled = true;
  document.getElementById("Switch").disabled = true;	
  win_lose = "you lost.";
  right_wrong = "wrong";
}
 
document.querySelector ('#message',).innerHTML = `<p class = ${right_wrong}>You choose to ${stay_switch} and ${win_lose} Thanks for playing!</p>`;

});


switching.addEventListener('click', function handleClick() {

stay_switch = "switch";

//counter
if (localStorage.Switchclickcount) {
  localStorage.Switchclickcount = Number(localStorage.Switchclickcount)+1;
} else {
 localStorage.Switchclickcount = 1;
}


if (doorB_prize == "Car") {
	document.getElementById("Stay").disabled = true;
  document.getElementById("Switch").disabled = true;
  win_lose = ("you lost.");
  right_wrong = "wrong";
  }

else if ((doorA_prize == "Car" && reveal =="3") || (doorC_prize == "Car" && reveal =="1") ) {
	document.getElementById("Stay").disabled = true;
  document.getElementById("Switch").disabled = true;
  win_lose = ("you won!");
  right_wrong = "right";
    
  //win counter from switching
	if (localStorage.SwitchWin) {
    localStorage.SwitchWin = Number(localStorage.SwitchWin)+1;
  } else {
    localStorage.SwitchWin = 1;
  }
  
}

document.querySelector ('#message',).innerHTML = `<p class = ${right_wrong}>You choose to ${stay_switch} and ${win_lose} Thanks for playing!</p>`;

});


	});
  
  
  
  
  doorC.addEventListener('click', function handleClick() {
  
  document.getElementById("Door 3").disabled = true;
  document.getElementById("Door 1").disabled = true;
  document.getElementById("Door 2").disabled = true;
  
  choice_info = "Door #3";
  
  if (localStorage.Door3) {
  localStorage.Door3 = Number(localStorage.Door3)+1;
	} else {
  localStorage.Door3 = 1;
	}
  
  
  //doorC.style.visibility = "hidden";
  
  
  //img.src = "https://picsum.photos/200/301";
  //document.body.appendChild(img);
  
  if (doorC_prize == "Car") {
  	let rand = Math.floor(Math.random() * 2);
    if (rand == 0) {
    	reveal = "1";
    } if (rand== 1) {
    	reveal = "2";
    }
  }
  
	if (doorA_prize == "Car") {
  	reveal = "2";
	}
  
  if (doorB_prize == "Car") {
  	reveal = "1";
  }
  
console.log(reveal);
document.querySelector ('#message',).innerHTML = `<p class = "info"> You choose ${choice_info}. Door #${reveal} contains a goat. Do you want to stay with your initial choice or switch doors?</p>`;

//Stay or Switch?
staying.addEventListener('click', function handleClick() {

stay_switch = "stay";

if (localStorage.Stayclickcount) {
  localStorage.Stayclickcount = Number(localStorage.Stayclickcount)+1;
} else {
  localStorage.Stayclickcount = 1;
}


if (doorC_prize == "Car") {
	document.getElementById("Stay").disabled = true;
  document.getElementById("Switch").disabled = true;
  win_lose = ("you won!");
  right_wrong = "right";
  
//win counter from staying  
	if (localStorage.StayWin) {
    localStorage.StayWin = Number(localStorage.StayWin)+1;
  } else {
    localStorage.StayWin = 1;
  }  
  
  
} else {
	document.getElementById("Stay").disabled = true;
  document.getElementById("Switch").disabled = true;	
  win_lose = ("you lost.");
  right_wrong = "wrong";
}

document.querySelector ('#message',).innerHTML = `<p class = ${right_wrong}>You choose to ${stay_switch} and ${win_lose} Thanks for playing!</p>`;

});

switching.addEventListener('click', function handleClick() {

stay_switch = "switch"

  if (localStorage.Switchclickcount) {
    localStorage.Switchclickcount = Number(localStorage.Switchclickcount)+1;
  } else {
    localStorage.Switchclickcount = 1;
  }


if (doorC_prize == "Car") {
	document.getElementById("Stay").disabled = true;
  document.getElementById("Switch").disabled = true;
  win_lose = ("you lost.")
  right_wrong = "wrong";
  }

else if ((doorB_prize == "Car" && reveal =="1") || (doorA_prize == "Car" && reveal =="2") ) {
	document.getElementById("Stay").disabled = true;
  document.getElementById("Switch").disabled = true;
  win_lose = ("you won!");
  right_wrong = "right";
    
  //win counter from switching
	if (localStorage.SwitchWin) {
    localStorage.SwitchWin = Number(localStorage.SwitchWin)+1;
  } else {
    localStorage.SwitchWin = 1;
  }
  
}

document.querySelector ('#message',).innerHTML = `<p class = ${right_wrong}>You choose to ${stay_switch} and ${win_lose} Thanks for playing!</p>`;

});

	});
  
  
  
 //function definition
//storing data with localStorage

function clickCounter() {
  if (localStorage.clickcount) {
    localStorage.clickcount = Number(localStorage.clickcount)+1;
  } else {
    localStorage.clickcount = 1;
  }
}

function data_export () {
console.log("Stay Click Counts; Stay Wins")
console.log(localStorage.Stayclickcount);
console.log(localStorage.StayWin);

console.log('------------------');

console.log("Switch Click Counts; Switch Wins");
console.log(localStorage.Switchclickcount);
console.log(localStorage.SwitchWin);

console.log('------------------');
console.log("Different Door Clicks: 1, 2, 3")
console.log(localStorage.Door1)
console.log(localStorage.Door2)
console.log(localStorage.Door3)

}

data_export ()

//note: switch + stay clicks = total plays
//switch clicks - switch wins = switch loss
//stay clicks - stay wins = stay loss

const app = document.getElementById('app');
const change_app_text = (text) => app.innerText = text;

change_app_text('Text you want');

	

  
