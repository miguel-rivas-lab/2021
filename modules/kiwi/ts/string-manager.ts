export default {
  titleCase(text) {
    return text
      .split(" ")
      .map(this.capitalize)
      .join(" ");
  },
  dashTitleCase(text) {
    return text
      .split("-")
      .map(this.capitalize)
      .join(" ");
  },

  toUnderscore(text) {
    return this.lowercase(text).replace(/ /g, "_");
  },
  toDash: function (text, target = /[ ]{1,}/g) {
    const result = text || "";

    return result
      .replace(/[!,.*+?^${(|[\\'"})/\]:]/g, '')
      .replace(/&/g, 'and')
      .trim()
      .replace(target, "-")
      .toLowerCase()
  },
  toCamel: function (str) {
    return str
      .replace(/_/g, " ")
      .replace(/(?:^\w|[A-Z]|\b\w)/g, function (word, index) {
        return index === 0 ? word.toLowerCase() : word.toUpperCase();
      })
      .replace(/\s+/g, "");
  },

  camelToDash: function (str) {
    return this.toDash(str.replace(/([a-zA-Z])(?=[A-Z])/g, '$1-'));
  },
  camelToSpace: function (str) {
    return str.replace(/([a-zA-Z])(?=[A-Z])/g, "$1 ").toLowerCase();
  },
  camelToUnderscore: function (str) {
    return this.toUnderscore(this.camelToSpace(str));
  },
  dashToTitle(text) {
    return text
      .replace(/_/g, " ")
      .replace(/(?:^\w|[A-Z]|\b\w)/g, word => {
          return word.toUpperCase();
        })
      .trim()
      .replace(/-/g, " ");
  },
  capitalize(text) {
    return text.charAt(0).toUpperCase() + text.slice(1);
  },
  superTrim: function (value) {
    return value.replace(/\s/g, "");
  },
}