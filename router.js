const route = (event) => {
    event = event || window.event;
    event.preventDefault();
    window.history.pushState({}, "", event.target.href);
    handleLocation();
};

const routes = {
    "/": "/index.html",
    "/about": "/pages/AboutUs.html",
    "/services": "/pages/services.html",
    "/contact": "/pages/contact.html"
};

const handleLocation = async () => {
    const path = window.location.pathname;
    const route = routes[path] || routes[404];
    const html = await fetch(route).then((data) => data.text());
    document.getElementById("presentation").innerHTML = html;
};

window.onpopstate = handleLocation;

window.route = route;

handleLocation();