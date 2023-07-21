import express from "express";
import { handlePromise } from "./promiseHandler.js";
import {
  getHotelsListContainsRoomByBeutures
  , getRoomsListByDescPrice
  , getRoomsListByFeatures
}
from "../DAO/displays.js";


export const router = express.Router();

// easy-line12:
// DESPLAY ALL ROOM ORDER BY PRICE DESC:
router.get("/RoomsListByDescPrice", (req, res) => {
  handlePromise(getRoomsListByDescPrice(), res)
});


// easy-line13:
// DISPLAY A LIST OF ROOMS WHOSE DESCRIPTIONS MATCH SPECIFUIC KEYWORDS
router.get("/RoomsListByFeatures", (req, res) => {
  // const keyword = req.query.keyword;
  let keyword = "mini_bar"; // Juste pour les tests
  handlePromise(getRoomsListByFeatures(keyword), res);
});

// easy-line14:
// DISPLAY THE LIST PF HOTELS THAT CONTAIN ROOMS
// WHOSE DESCRIPTION CORRESPONDS TO GIVEN KEYWORD
router.get("/HotelsListContainsRoomByBeutures", (req, res) => {
  // const keyword = req.query.keyword;
  let keyword = "VIP";
  handlePromise(getHotelsListContainsRoomByBeutures(keyword), res);
});
