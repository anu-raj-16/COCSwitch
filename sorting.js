/* This website is a proof of concept for a hackathon and is not intended for medical use.
The content and logic displayed on this page are fictional and for entertainment purposes only,
and should not be construed as medical advice in any way. Always consult a licensed healthcare
professional for medical decisions. */

import {all_meds} from "./contraception_data.js";
import {get_pt_med, get_lower_level, get_same_level, get_lower_or_same_level, get_higher_level} from "./sorting_helpers.js";

//  NOTE: This logic is completely fictional and designed solely for demonstration purposes only.
function get_nausea_switch(pt_med_name) {
  let pt_med = get_pt_med(pt_med_name);

  let first_meds = get_lower_level(pt_med, all_meds, "Estrogen Strength");

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
    return undefined;
    }

  }


//  NOTE: This logic is completely fictional and designed solely for demonstration purposes only.
function get_vasomotor_switch(pt_med_name) {

  let pt_med = get_pt_med(pt_med_name);

  let first_meds = get_higher_level(pt_med, all_meds, "Estrogen Strength");

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
    return undefined;
    }
}


//  NOTE: This logic is completely fictional and designed solely for demonstration purposes only.
function get_weight_fatigue_switch(pt_med_name) {

  let pt_med = get_pt_med(pt_med_name);

  let first_meds = get_lower_level(pt_med, all_meds, "Progestin Activity");

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
    return undefined;
    }
}


//  NOTE: This logic is completely fictional and designed solely for demonstration purposes only.
function get_bloating_switch(pt_med_name) {

  let pt_med = get_pt_med(pt_med_name);

  let first_meds = get_lower_level(pt_med, all_meds, "Estrogen Strength");

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
    return undefined;
    }
}

export {get_nausea_switch, get_vasomotor_switch, get_weight_fatigue_switch, get_bloating_switch};