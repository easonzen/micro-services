import { registerApplication, start } from "single-spa";

// registerApplication({
//   name: "@single-spa/welcome",
//   app: () =>
//     System.import(
//       "https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js"
//     ),
//   activeWhen: ["/"],
// });

registerApplication({
  name: "@easonzen/navbar",
  app: () => System.import("@easonzen/navbar"),
  activeWhen: () => true,
  customProps: {
    domElement: document.getElementById("navbar"),
  },
});

registerApplication({
  name: "@easonzen/vue2-project",
  app: () => System.import("@easonzen/vue2-project"),
  activeWhen: (location) => location.pathname.startsWith("/vue2"),
});

registerApplication({
  name: "@easonzen/vite-project",
  app: () => System.import("@easonzen/vite-project"),
  activeWhen: (location) => location.pathname.startsWith("/vite"),
});

start({
  urlRerouteOnly: true,
});
