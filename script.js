	const readArea = document.getElementById("area");
	const startSp = document.getElementById("start");
	const stopSp = document.getElementById("stop");
	const speed = document.getElementById("speed");
	
	startSp.addEventListener("click", () => {
		playtext(readArea.value)
	})
	function playtext(text) {
		const utterance = new SpeechSynthesisUtterance(text);
		utterance.rate = speed.value || 1;
		speechSynthesis.speak(utterance);
	}