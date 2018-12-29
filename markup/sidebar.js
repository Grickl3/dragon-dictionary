

function revealTiles() {
	tileBox.classList.toggle("tiles__hidden");
};

function openSidebar() {
	sidebarContent.classList.toggle("sidebar__content__closed");
	sidebarContent.classList.toggle("sidebar__content__open");
	sidebarHandle.classList.toggle("sidebar__right-shift");
	sidebarEdge.classList.toggle("sidebar__right-shift");
	setTimeout(function(){ revealTiles(); }, 1000);
};