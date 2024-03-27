/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.post('/create', controller.pt.create);
  router.get('/getData', controller.pt.getList);
  router.post('/add', controller.pt.add);
  router.post('/delete', controller.pt.delete);
  router.post('/update', controller.pt.update);

};
