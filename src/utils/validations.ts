import { Validations } from "../models/interfaces";

const validInputRegex: RegExp = /.*\S.*/;

export const validations: Validations = {
  results: {},
  testedValue: "",
  input: function (text: string) {
    this.testedValue = text;
    return validations;
  },
  isNull: function (errorMessage: string) {
    if (!validInputRegex.test(this.testedValue)) {
      this.results = {
        ...this.results,
        isNull: { errorMessage },
      };
      return validations;
    } else if (this.results) {
      delete this.results.isNull;
    }
    return validations;
  },
  min: function (number: number, errorMessage: string) {
    if (this.testedValue.length < number) {
      this.results = {
        ...this.results,
        min: { errorMessage },
      };
      return validations;
    } else if (this.results) {
      delete this.results.min;
    }
    return validations;
  },
  max: function (number: number, errorMessage: string) {
    if (this.testedValue.length > number) {
      this.results = {
        ...this.results,
        max: { errorMessage },
      };
      return validations;
    } else if (this.results) {
      delete this.results.max;
    }
    return validations;
  },
};
