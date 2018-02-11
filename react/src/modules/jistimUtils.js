export default () => {
  //
  return {
    isNull: (obj) => {
      return obj === undefined || obj === null;
    },
    isEmpty: (obj) => {
      return obj === undefined || obj === null || obj.length === 0;
    }
  };
}
