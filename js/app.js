new fullpage("#fullpage", {
	autoScrolling: true,
	navigation: true,
	onLeave: (origin, destination, direction) => {
		const section = destination.item;
		const title = section.querySelectorAll("h1, h2");
		const tl = new TimelineMax({ delay: 0.3 });
		const vespa = document.querySelectorAll(".vespa");
		const description = document.querySelector(".description");

		tl.fromTo(title, 0.5, { y: 50, opacity: 0 }, { y: 0, opacity: 1 });

		// s2 section
		if (destination.index === 1) {
			tl.fromTo(vespa, 0.5, { x: "500%", opacity: 0 }, { x: "-45%", opacity: 1 })
				.fromTo(description, 0.4, { y: 50, opacity: 0 }, { y: 0, opacity: 1 });
		}
		// s3 section
		if (destination.index === 2) {
			tl.fromTo(vespa, 0.5, { x: "-500%", opacity: 0 }, { x: "-45%", opacity: 1 })
				.fromTo(description, 0.4, { y: -50, opacity: 0 }, { y: 0, opacity: 1 });
		}
		// s4 section
		if (destination.index === 3) {
			tl.fromTo(vespa, 0.5, { x: "500%", opacity: 0 }, { x: "-45%", opacity: 1 })
				.fromTo(description, 0.4, { y: 50, opacity: 0 }, { y: 0, opacity: 1 });
		}
	}
});
