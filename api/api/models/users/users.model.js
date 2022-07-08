module.exports = mongoose => {
    const User = mongoose.model(
      "users",
      mongoose.Schema(
        {
          login: String,
          password: String
        },
        { timestamps: true }
      )
    );
    return User;
  };