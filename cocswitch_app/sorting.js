import {all_meds} from "./contraception_data.js";

// must decrease estrogen content, maintain progestin activity level if possible
function get_nausea_switch(pt_med_name) {
  let pt_med = get_pt_med(pt_med_name);

  // fulfills less estrogen
  let first_meds = get_lower_level(pt_med, all_meds, "Estrogen Strength");

  // fulfills less estrogen and equal progestin activity
  let second_meds = get_same_level(pt_med, first_meds, "Progestin Activity");

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

  let pt_med = get_pt_med(pt_med_name);

  // fulfills more estrogen
  let first_meds = get_higher_level(pt_med, all_meds, "Estrogen Strength");

  // fulfills more estrogen and equal progestin activity
  let second_meds = get_same_level(pt_med, first_meds, "Progestin Activity");

  // if multiple options in which both estrogen dose is higher and progestin activity is equal,
  // return last value of the second_meds array
  if (second_meds.length >= 1) {
    // return the value with the closest amount of estrogen to the original estrogen content
    return second_meds[second_meds.length - 1];
    }

  // return last value of first_meds array if at least one value exists
  if (first_meds.length >= 1) {
    // return the value with the closest amount of estrogen to the original estrogen content
    return first_meds[first_meds.length - 1];
    }

  // return -1 if no eligible option exists
  if (first_meds.length === 0) {
    return -1;
    }
}


// must decrease progestin content, decrease or maintain estrogen dose if possible
function get_weight_fatigue_switch(pt_med_name) {

  let pt_med = get_pt_med(pt_med_name);

  // fulfills less progestin
  let first_meds = get_lower_level(pt_med, all_meds, "Progestin Activity");

  // fulfills less than or equal estrogen dose
  let second_meds = get_lower_or_same_level(pt_med, first_meds, "Estrogen Strength");

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

  let pt_med = get_pt_med(pt_med_name);

  //fulfills less estrogen
  let first_meds = get_lower_level(pt_med, all_meds, "Estrogen Strength");

  // fulfills increased progestin level
  let second_meds = get_higher_level(pt_med, first_meds, "Progestin Activity");

  // if multiple options in which both estrogen content is lower and progestin content is higher,
  // return final value of the second_meds array
  if (second_meds.length >= 1) {
    // return the value with the closest amount of estrogen < original estrogen content
    return second_meds[0];
    }

  // return first value of first_meds array if at least one value exists
  if (first_meds.length >= 1) {
    // return the value with the closest amount of estrogen < original estrogen content
    return first_meds[0];
    }

  // return -1 if no eligible option exists
  if (first_meds.length === 0) {
    return -1;
    }
}


// HELPER FUNCTIONS

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

// gets all medications from meds_list that have lower hormone activity than pt_med
function get_lower_level(pt_med, meds_list, hormone_activity) {
  let updated_list = [];
  for (let i = 0; i < meds_list.length; i++) {
    let cur_med = meds_list[i];
    if (pt_med[hormone_activity] > cur_med[hormone_activity]) {
      updated_list.push(cur_med);
    }
  }
  return updated_list;
}


// gets all medications from meds_list that have same hormone activity as pt_med
function get_same_level(pt_med, meds_list, hormone_activity) {
  let updated_list = [];
  for (let i = 0; i < meds_list.length; i++) {
    let cur_med = meds_list[i];
    if (pt_med[hormone_activity] === cur_med[hormone_activity]) {
      updated_list.push(cur_med);
    }
  }
  return updated_list;
}


// gets all medications from meds_list that have <= hormone activity than pt_med
function get_lower_or_same_level(pt_med, meds_list, hormone_activity) {
  let updated_list = [];
  for (let i = 0; i < meds_list.length; i++) {
    let cur_med = meds_list[i];
    if (pt_med[hormone_activity] >= cur_med[hormone_activity]) {
      updated_list.push(cur_med);
    }
  }
  return updated_list;
}

// gets all medications from meds_list that have higher hormone activity than pt_med
function get_higher_level(pt_med, meds_list, hormone_activity) {
  let updated_list = [];
  for (let i = 0; i < meds_list.length; i++) {
    let cur_med = meds_list[i];
    if (pt_med[hormone_activity] < cur_med[hormone_activity]) {
      updated_list.push(cur_med);
    }
  }
  return updated_list;
}
