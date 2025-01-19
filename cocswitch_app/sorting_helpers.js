// HELPER FUNCTIONS

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

export {get_pt_med, get_lower_level, get_same_level, get_lower_or_same_level, get_higher_level};