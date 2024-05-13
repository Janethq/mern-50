import debug from "debug";

// This is the base path of the Express route we'll define
const BASE_URL = "/api/users";
const log = debug("mern:utilities:users-api");

export async function login(userData) {
  log("userData: %o", userData);
  const res = await fetch(`${BASE_URL}/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(userData),
  });

  if (res.ok) {
    return res.json();
  } else {
    log("error: Invalid Login");
    throw new Error("Invalid Login");
  }
}