var app = {
	init: function() {
		document.getElementById('acitvity_input').addEventListener('submit', function(e) {
			e.preventDefault();

			document.getElementById("infobox").style.display = "block";

			var activityname = document.getElementById("activity_name").value;
			new Activity().create(activityname);
		});
	}

};

app.init();