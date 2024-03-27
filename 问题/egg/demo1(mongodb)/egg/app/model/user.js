
// 定义数据表
module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;

  const UserSchema = new Schema({
    name: { type: String },
    age: { type: Number },
    email: { type: String },
  });

  return mongoose.model('User', UserSchema);
};
