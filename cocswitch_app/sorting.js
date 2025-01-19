import {all_meds} from "./contraception_data.js";

// gets all information of patient's original medication
function get_pt_med(pt_med_name) {
  let pt_med;
  for (let i = 0; i < all_meds.length; i++) {
    if (pt_med_name == all_meds[i].Name) {
      pt_med = all_meds[i];
      break;
    }
  }
  return pt_med;
}


// must decrease estrogen content, maintain progestin activity level if possible
function get_nausea_switch(pt_med_name) {
  // fulfills less estrogen
  let first_meds = [];

  // fulfills less estrogen and equal progestin activity
  let second_meds = [];

  let pt_med = get_pt_med(pt_med_name);

  // find indices where meds have less estrogen
  for (let i = 0; i < all_meds.length; i++) {
    let cur_med = all_meds[i];
    if (pt_med["Estrogen Strength"] > cur_med["Estrogen Strength"]) {
      first_meds.push(i);
      if (pt_med["Progestin Activity"] === cur_med["Progestin Activity"]) {
        second_meds.push(i);
      }
    }
  }

  // console.log(first_meds);
  // console.log(second_meds);
  // if multiple options in which both estrogen dose is lower and progestin activity is equal,
  // return first value of the second_meds array
  if (second_meds.length >= 1) {
    return second_meds[0];
    }

  // return first value of first_meds array if at least one value exists
  if (first_meds.length >= 1) {
    return first_meds[0];
    }

  // return -1 if no eligible option exists
  if (first_meds.length === 0) {
    return -1;
    }

  }


// must increase estrogen content, maintain progestin activity level if possible
function get_vasomotor_switch(pt_med_name) {
  // fulfills more estrogen
  let first_meds = [];

  // fulfills more estrogen and equal progestin activity
  let second_meds = [];

  let pt_med = get_pt_med(pt_med_name);

  // find indices where meds have more estrogen
  for (let i = 0; i < all_meds.length; i++) {
    let cur_med = all_meds[i];
    if (pt_med["Estrogen Strength"] < cur_med["Estrogen Strength"]) {
      first_meds.push(i);
      if (pt_med["Progestin Activity"] === cur_med["Progestin Activity"]) {
        second_meds.push(i);
      }
    }
  }

  // console.log(first_meds);
  // console.log(second_meds);
  // if multiple options in which both estrogen dose is lower and progestin activity is equal,
  // return first value of the second_meds array
  if (second_meds.length >= 1) {
    // return the value with the closest amount of estrogen to the original estrogen content
    // but still more
    return second_meds[second_meds.length - 1];
    }

  // return first value of first_meds array if at least one value exists
  if (first_meds.length >= 1) {
    // return the value with the closest amount of estrogen to the original estrogen content
    // but still more
    return first_meds[first_meds.length - 1];
    }

  // return -1 if no eligible option exists
  if (first_meds.length === 0) {
    return -1;
    }
}


// must decrease progestin content, decrease or maintain estrogen dose if possible
function get_weight_fatigue_switch(pt_med_name) {
  // fulfills less progestin
  let first_meds = [];

  // fulfills less than or equal estrogen dose
  let second_meds = [];

  let pt_med = get_pt_med(pt_med_name);

  // find indices where meds have less progestin +/- less than or equal estrogen
  for (let i = 0; i < all_meds.length; i++) {
    let cur_med = all_meds[i];
    if (pt_med["Progestin Activity"] > cur_med["Progestin Activity"]) {
      first_meds.push(i);
      if (pt_med["Estrogen Strength"] >= cur_med["Estrogen Strength"]) {
        second_meds.push(i);
      }
    }
  }

  // console.log(first_meds);
  // console.log(second_meds);
  // if multiple options in which both progestin content is lower and estrogen content is less or equal,
  // return first value of the second_meds array
  if (second_meds.length >= 1) {
    // return the value with the closest amount of estrogen <= to original estrogen content
    return second_meds[0];
    }

  // return first value of first_meds array if at least one value exists
  if (first_meds.length >= 1) {
    // return the value with the closest amount of estrogen <= original estrogen content
    return first_meds[0];
    }

  // return -1 if no eligible option exists
  if (first_meds.length === 0) {
    return -1;
    }
}


// must decrease estrogen level, increase progestin level if possible
function get_bloating_switch(pt_med_name) {
  //fulfills less estrogen
  let first_meds = [];

  // fulfills increased progestin level
  let second_meds = [];

  let pt_med = get_pt_med(pt_med_name);

  // find indices where meds have less estrogen +/- more progestin
  for (let i = 0; i < all_meds.length; i++) {
    let cur_med = all_meds[i];
    if (pt_med["Estrogen Strength"] > cur_med["Estrogen Strength"]) {
      first_meds.push(i);
      if (pt_med["Progestin Activity"] < cur_med["Progestin Activity"]) {
        second_meds.push(i);
      }
    }
  }

  // console.log(first_meds);
  // console.log(second_meds);
  // if multiple options in which both estrogen content is lower and progestin content is higher,
  // return final value of the second_meds array
  if (second_meds.length >= 1) {
    // return the value with the closest amount of estrogen < original estrogen content
    return second_meds[second_meds.length - 1];
    }

  // return first value of first_meds array if at least one value exists
  if (first_meds.length >= 1) {
    // return the value with the closest amount of estrogen < original estrogen content
    return first_meds[first_meds.length - 1];
    }

  // return -1 if no eligible option exists
  if (first_meds.length === 0) {
    return -1;
    }
}



console.log(get_nausea_switch("Brevicon 1/35"));