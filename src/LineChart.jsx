// Utils.js

const Utils = {
  months: ({ count }) => {
    const currentDate = new Date();
    const months = [];
    
    for (let i = 0; i < count; i++) {
      const month = currentDate.getMonth() - i;
      const year = currentDate.getFullYear();
      months.unshift(`${year}-${month < 10 ? '0' + month : month}`);
    }
    
    return months;
  },
};

export default Utils;
