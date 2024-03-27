const { Controller } = require('egg');

class Pt extends Controller {

  // 创建数据
  async create() {
    const { ctx } = this;
    const { name, age, email } = ctx.request.body;

    const user = new ctx.model.User({
      name,
      age,
      email,
    });

    await user.save();

    ctx.body = user;

  }

  // 新增数据
  async add() {
    const { ctx, service } = this;

    const res = await service.mongo.add(ctx.request.body);

    ctx.body = res;
  }
  // 查询数据
  async getList() {
    const { ctx, service } = this;
    const res = await service.mongo.getData(ctx.query);

    ctx.body = res;
  }
  // 删除
  async delete() {
    const { ctx, service } = this;
    if (ctx.request.body.name) {
      const res = await service.mongo.del({ name: ctx.request.body.name });
      ctx.body = res;

    } else {
      ctx.body = {
        status: 201,
        data: 'error',
      };
    }
  }
  // 更新数据
  async update() {
    const { ctx, service } = this;

    if (ctx.request.body.name) {
      let is = true;
      const emun = [ 'name', 'age', 'email' ];
      for (const k in JSON.parse(ctx.request.body.update)) {
        is = emun.includes(k);
        if (!is) continue;
      }

      if (is) {
        const res = await service.mongo.update({ name: ctx.request.body.name }, JSON.parse(ctx.request.body.update));
        ctx.body = res;
      } else {
        ctx.body = {
          status: 201,
          data: '参数错误',
        };
      }

    } else {
      ctx.body = {
        status: 201,
        data: 'error',
      };
    }

  }
}

module.exports = Pt;
