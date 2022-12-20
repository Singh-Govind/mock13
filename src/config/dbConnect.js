const { connect } = require("mongoose");

const connection = () => {
  return connect(
    `mongodb+srv://govind:123@cluster0.3cdklpi.mongodb.net/mock13`
  );
};

module.exports = connection;
