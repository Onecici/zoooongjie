const { Controller } = require('egg');

class HomController extends Controller {
  async index() {
    const { ctx } = this;

    // 打印日志
    ctx.logger.info('some request data: %j', ctx.query);

    // 响应数据给客户端
    ctx.body = { message: `hi, ID: ${ctx.query.id || 0}` };
  }
}

module.exports = HomController;
