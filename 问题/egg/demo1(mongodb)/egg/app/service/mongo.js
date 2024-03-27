const { Service } = require('egg');

class MongoService extends Service {
  async add(param) {
    const { ctx } = this;
    const res = await ctx.model.User.insertMany(param);
    return res;
  }
  async getData(param) {
    const { ctx } = this;
    const res = await ctx.model.User.find(param);
    return res;
  }
  async del(param) {
    const { ctx } = this;
    const res = await ctx.model.User.deleteOne(param);
    return res;
  }
  async update(selece, param) {
    const { ctx } = this;
    const res = await ctx.model.User.updateOne(selece, param);
    return res;
  }
}


module.exports = MongoService;
