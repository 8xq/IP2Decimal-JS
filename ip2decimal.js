//=============================================================================\\
//                                IP2Decimal                                    \\
//                             made by nullcheats                                \\
//================================================================================\\

/*
This is our main function that will invoke the other 2 functions needed 
Firstly this will check if textbox had any text (true/false)
if true it will then call the "Validateipv4" function to check if its a valid IP
if true it will also call IP2NUM function that will convert the IP to decimal / int
*/
const Convert = () => {
	var IP = document.getElementById("IPV4").value;
	if (IP) {
		ValidateIPV4(IP);
		IP2NUM(IP);
		var Modal = document.getElementById("Modal");
		Modal.style.display = "block";
	} else {
		alert("No IP address entered !");
	}
}

/* This is a very simple function that will close the 'Modal'
This uses the Id of the Modal and hides the "display"  by setting it to 'none'
*/
const CloseModal = () => {
	var Modal = document.getElementById("Modal");
	Modal.style.display = "none";
}

/*
This is our IP2Number function that will convert the IPV4 address as seen below
Below you can also see how this "calculated" for each octec
This function will simply return the "int" for the IP address as shown below
Octecs = IP parts ( split via '.' )
IP | 192.168.1.1 => OCT 1 (192) | OCT 2 (168) | OCT 3 (1) | OCT 4 (1)
16777216 * OCT1 + 65536 * OCT2 + 256 * OCT3 +  OCT4 = IP number
*/
const IP2NUM = (IPV4) => {
	var ConvertedNumber = document.getElementById("ConvertedIP");
	let SplitIP = IPV4.split('.');
	let octecs1 = parseInt(SplitIP[0]);
	let octecs2 = parseInt(SplitIP[1]);
	let octecs3 = parseInt(SplitIP[2]);
	let octecs4 = parseInt(SplitIP[3]);
	let sum = (16777216 * octecs1) + (65536 * octecs2) + (256 * octecs3) + octecs4;
	if (sum) {
		ConvertedNumber.innerText = sum;
		ConvertedNumber.style.color = "Green";
		return sum;
	} else {
		ConvertedNumber.innerText = "Error";
		ConvertedNumber.style.color = "Red";
		return "Error";
	}
}

/*
This is a regex expression that will ensure the input string is a valid IPV4 address
Typical format is in the format of X.X.X.X (each X) is usually known as an "octec"
Each octec must be a value between 0-255 and as you can see each octec is seperated by a '.'
If IPV4 was matched via regex it will return 'true' else it will return 'false'
*/
const ValidateIPV4 = (IPV4) => {
	var StatusReport = document.getElementById("RegexStatus");
	const regex = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
	if (regex.test(IPV4)) {
		StatusReport.innerText = "Passed";
		StatusReport.style.color = "Green";
		return true;
	} else {
		StatusReport.innerText = "False";
		StatusReport.style.color = "Red";
		return false;
	}
}