const countEl = document.getElementById('count');

// updateVisitCount();

// function updateVisitCount(count) {
// 	fetch('https://api.countapi.xyz/update/dinujaya.me/visitors/?amount= 1')
// 	.then(res => res.json())

// 	.then(res => {
// 		var count =  res.value;
// 		return count;
// 	})
// }

// console.log(count)



// Returns a Promise that resolves after "ms" Milliseconds
const timer = ms => new Promise(res => setTimeout(res, ms))

async function load (count) { // We need to wrap the loop into an async function for this to work
	let loop_no = 0
	while (count > loop_no) {
		countEl.innerHTML = loop_no;
		await timer(10); // then the created Promise can be awaited
		// console.log(count)
		loop_no = loop_no +1;
	} 
}


fetch('https://api.countapi.xyz/update/dinujaya.me/visitors/?amount= 1')
.then(res => res.json())
.then(res => {
	count =  res.value;
	// console.log(count)
	load(count)
})


	


