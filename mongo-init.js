// mongo-init.js
db = db.getSiblingDB("dd_db");

db.tutorials.insertMany([
  { title: "Docker Test", description: "First tutorial", published: true },
  { title: "CI/CD Demo", description: "Second tutorial", published: false }
]);
