import React from "react";
import Moment from "moment";
import { CommonProperties } from "../../../../Reuseable";

interface ArrayListProps<T> extends CommonProperties {
  tabArray: Array<T>[];
  openModal: (y: Array<T>) => void;
}

export const sortArrayAlpha = (y: ArrayListProps<>[]) => {
  y.sort((a, b) => {
    if (a.name.toLowerCase() > b.name.toLowerCase()) {
      return 1;
    }
    if (a.name.toLowerCase() < b.name.toLowerCase()) {
      return -1;
    }

    return 0;
  });
  return y;
};
