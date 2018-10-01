(function(window) {

	var util = {
		numberWithCommas: function(x) {
			return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
		}
	}

	var main = {
		stickyNav: function() {
			window.onscroll = function() {toggleSticky()};
			var navbar = document.getElementById("airshipNav");
			var sticky = navbar.offsetTop;

			function toggleSticky() {
			  if (window.pageYOffset > sticky) {
			    navbar.classList.add("sticky")
			  } else {
			    navbar.classList.remove("sticky");
			  }
			}
		},
		typewriter: function() {
			var app = document.getElementById('typed');

			var typewriter = new Typewriter(app, {
			    loop: true
			});

			typewriter.typeString('Packages')
			    .pauseFor(2500)
			    .deleteAll()
			    .typeString('Bookings')
			    .pauseFor(2500)
			    .deleteAll()
			    .typeString('Riders')
			    .pauseFor(2500)
			    .deleteAll()
			    .typeString('Clients')
			    .pauseFor(2500)
			    .deleteAll()
			    .start();
		},
		priceslider: function() {
			// price slider
			var slider = document.getElementById("priceRange");
			var output = document.getElementById("pkgCount");
			var price = document.getElementById("priceText");

			var pricing = {
				1: "5",
				2: "4.5",
				3: "4",
				4: "3.5",
				5: "3",
				6: "2.5", // P2.5
				7: "2",
				8: "2"
			}

			// Update the current slider value (each time you drag the slider handle)
			slider.oninput = function() {
				var val = this.value;
			    output.innerHTML = util.numberWithCommas((val < 21 ? val : ((val-20)*5)+20 )*1000);
			    price.innerHTML = pricing[Math.ceil(val/5)];
			}

			slider.oninput();
		},
		linkTo: function(id, classes) {
			const container = document.getElementById(id);
			const links = container.getElementsByClassName('features-list')[0].getElementsByTagName('h4');

			for(var i = 0; i < links.length; i++) {
				links[i].onclick = function(e) {
					classes.forEach((c) => { container.classList.remove(c); });
					container.classList.add(e.target.className);
				}
			}
		}
	}

	window.initHome = function() {
		main.stickyNav();
		main.typewriter();
	}

	window.initPricing = function() {
		main.stickyNav();
		main.priceslider();
	}

	window.initFeatures = function() {
		main.stickyNav();
		main.linkTo('toggleBranded', ['branded', 'client', 'branded-app']);
	}

	
})(window);