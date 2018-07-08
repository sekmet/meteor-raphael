Package.describe({
  summary: "Raphael - JavaScript Vector Library",
  version: "0.1.0",
  git: "https://github.com/sekmet/meteor-raphael.git",
  name: "skt:raphael"
});

Package.onUse((api) => {
  api.versionsFrom("1.4");
  api.use('jquery', 'client', {weak: true});
  api.mainModule('raphael.js', 'client');
});

