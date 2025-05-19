const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  const tokenContent = req.kauth.grant.access_token.content;

  const name = tokenContent.name || tokenContent.preferred_username || "N/A";
  const email = tokenContent.email || "N/A";

  // Check for roles and department without optional chaining
  let role = "User";
  if (tokenContent.realm_access && tokenContent.realm_access.roles && tokenContent.realm_access.roles.length > 0) {
    role = tokenContent.realm_access.roles[0];
  }

  const department = tokenContent.department || "IT";

  const userProfile = {
    name,
    email,
    role,
    department,
    profilePic: "https://via.placeholder.com/100",
    joined: "January 2022", // Replace with actual if available from AD
  };

  res.json(userProfile);
});

module.exports = router;
