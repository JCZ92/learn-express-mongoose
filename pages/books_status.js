let BookInstance = require('../models/bookinstance');
const getStatus = async () => {
  try {
    let status = await BookInstance.find({status: 'Available'}).select('book status').populate('book');
    return status.map((s) => s.book.title + ": " + s.status);
  } catch (err) {
    console.log(err);
    return [];
  }
}

exports.show_all_books_status = async function(res) {
  try {
    const statuses = await getStatus();
    return res.send(statuses);
  } catch (error) {
    return res.status(500).send("Internal Server Error");
  }
}