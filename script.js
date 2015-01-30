var app = {
	init: function() {
		document.getElementById('acitvity_input').addEventListener('submit', function(e) {
			e.preventDefault();
			var activityname = document.getElementById("activity_name").value;
			new Activity().create(activityname);
		});
	}

};

app.init();