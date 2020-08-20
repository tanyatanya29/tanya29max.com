var languageSet = new Set();
/*!
 * Start Bootstrap - Resume v6.0.1 (https://startbootstrap.com/template-overviews/resume)
 * Copyright 2013-2020 Start Bootstrap
 * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-resume/blob/master/LICENSE)
 */
(function ($) {
	"use strict"; // Start of use strict

	// Smooth scrolling using jQuery easing
	$('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
		if (
			location.pathname.replace(/^\//, "") ==
			this.pathname.replace(/^\//, "") &&
			location.hostname == this.hostname
		) {
			var target = $(this.hash);
			target = target.length
				? target
				: $("[name=" + this.hash.slice(1) + "]");
			if (target.length) {
				$("html, body").animate(
					{
						scrollTop: target.offset().top,
					},
					1000,
					"easeInOutExpo"
				);
				return false;
			}
		}
	});

	// Closes responsive menu when a scroll trigger link is clicked
	$(".js-scroll-trigger").click(function () {
		$(".navbar-collapse").collapse("hide");
	});

	// Activate scrollspy to add active class to navbar items on scroll
	$("body").scrollspy({
		target: "#sideNav",
	});

	$(".tn-thumbnail").click(function() {
		document.querySelector("#cert-name").innerHTML = this.alt;
		document.querySelector("#cert-detail").src = this.src;
		$("#cert-modal").modal();
	});

	let lang = navigator.language.substring(0, 2);
	if (lang == "ru" || lang == "uk" || lang == "be") lang = "ru";
	else if (lang == "zh") { }
	else lang = "en"
	update_text(lang);

	$("#btn-e").click(function() { update_text("en"); });
	$("#btn-r").click(function() { update_text("ru"); });
	$("#btn-c").click(function() { update_text("zh"); });
})(jQuery); // End of use strict

function update_text(locale) {
	if (locale == $.i18n().locale) {
		return;
	}
	if (languageSet.has(locale)) {
		$.i18n().locale = locale;
		$("body").i18n(locale);
	}
	else {
		$.i18n().load("i18n/" + locale + ".json", locale).then(function() {
			languageSet.add(locale);
			$.i18n().locale = locale;
			$("body").i18n(locale);
		});
	}
}
