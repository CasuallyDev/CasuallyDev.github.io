//SideBar
	function openNav() {
		document.getElementById("mySidebar").style.width = "250px";
	}
	function closeNav() {
		document.getElementById("mySidebar").style.width = "0";
	}
//ProgressBar
	var progress = document.getElementById('progressBar');
	window.onscroll = function(){
	var totalHeight = document.body.scrollHeight - window.innerHeight;
	var progressHeight = (window.pageYOffset / totalHeight) * 100;
	progress.style.height = progressHeight + "%";
	}

//Ein bisschen Spaß muss auch mal sein :D (übrigens auch selber geschrieben)

    document.querySelector("#play").addEventListener("click", () => {
    document.querySelector("#video").play();
    document.getElementById("video").style.height = "100%";
	document.getElementById("backgrounddarkener").style.height = "100%";
    setTimeout(function() { stopVideo(); }, 9400);
    });

    function stopVideo() {
    document.getElementById("video").style.height = "0";
	document.getElementById("backgrounddarkener").style.height = "0";
    }
	