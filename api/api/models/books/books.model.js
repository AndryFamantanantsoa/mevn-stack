module.exports = mongoose => {
    const Book = mongoose.model(
      "books",
      mongoose.Schema(
        {
            title: String,
            author: String,
            description: String,
            edition: String,
            isbn: String
        },
        { timestamps: true }
      )
    );
    return Book;
  };