
// Get references to the button and shoe image
const more_info_1 = document.getElementById('more_info_1');
const more_info_2 = document.getElementById('more_info_2');
const more_info_3 = document.getElementById('more_info_3');
const more_info_4 = document.getElementById('more_info_4');

const shoeImage1 = document.getElementById('port-upper-box-1'); // box-no-0,0
const shoeImage2 = document.getElementById('port-upper-box-2'); // box-no-0,1
const shoeImage3 = document.getElementById('port-upper-box-3'); // box-no-1,0
const shoeImage4 = document.getElementById('port-upper-box-4'); // box-no-1,1


// Function to hide the shoe image
// box-1
function hideShoe1() {
    shoeImage1.style.display = 'none';
}
// Function to show the shoe image
function showShoe1() {
    shoeImage1.style.display = 'block';
    // shoeImage1.style.opacity = "1"

}
// Add event listener to the button for mouseover event
more_info_1.addEventListener('mouseover', showShoe1);
// Add event listener to the button for mouseout event
more_info_1.addEventListener('mouseout', hideShoe1);


// box-2
function hideShoe2() {
    shoeImage2.style.display = 'none';
}
// Function to show the shoe image
function showShoe2() {
    shoeImage2.style.display = 'block';
    // shoeImage2.style.opacity = "1"
}
// Add event listener to the button for mouseover event
more_info_2.addEventListener('mouseover', showShoe2);
// Add event listener to the button for mouseout event
more_info_2.addEventListener('mouseout', hideShoe2);


// box-3
function hideShoe3() {
    shoeImage3.style.display = 'none';
}
// Function to show the shoe image
function showShoe3() {
    shoeImage3.style.display = 'block';
    // shoeImage3.style.opacity = "1"
}
// Add event listener to the button for mouseover event
more_info_3.addEventListener('mouseover', showShoe3);
// Add event listener to the button for mouseout event
more_info_3.addEventListener('mouseout', hideShoe3);


// box-4
function hideShoe4() {
    shoeImage4.style.display = 'none';
}
// Function to show the shoe image
function showShoe4() {
    shoeImage4.style.display = 'block';
    // shoeImage4.style.opacity = "1"
}
// Add event listener to the button for mouseover event
more_info_4.addEventListener('mouseover', showShoe4);
// Add event listener to the button for mouseout event
more_info_4.addEventListener('mouseout', hideShoe4);


// form script

// function sendMail() {
//     (function () {
//         emailjs.init("zN6HfFK15wH_diTQk");
//     })();

//     var serviceID = "service_rvi2vr5"; //email service ID
//     var templateID = "template_3ioblta"; //email template ID

//     var params = {
//         sendername: document.querySelector("#sendername").value,
//         senderemail: document.querySelector("#senderemail").value,
//         subject: document.querySelector("#subject").value,

//         message: document.querySelector("#message").value
//     };


//     emailjs.send("service_rvi2vr5", "template_3ioblta", params)
//         .then(res => {
//             alert("Your message has been sent.");
//             console.log("Your message has been sent.");
//         })
//         .catch();
// }

