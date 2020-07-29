"use strict";

const home = {
  method: "GET",
  path: "/",
  handler: ( request, h ) => {
    return "hello from Gokul!";
  }
};

module.exports = [ home ];