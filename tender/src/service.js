const dateFormatFromXlsx = (value) => {
  return new Date(-2209075200000 + (value - (value < 61 ? 0 : 1)) * 86400000);
};
export default dateFormatFromXlsx;

