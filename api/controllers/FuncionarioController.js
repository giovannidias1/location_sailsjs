/**
 * FuncionarioController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  get: (req, res) => {
    Funcionario.find({
      id: req.param("id")
    }).then(users => {
      if (users.length > 0) {
        res.json(users[0]);
      } else {
        res.badRequest({
          err: "not found"
        });
      }
    });
  },
  auth: (req, res) => {
    sails.log.info("json", req.allParams());
    Funcionario.findOne({
      email: req.param("email"),
      password: req.param("password"),
      status: true
    })
      .then(employee => {
        if (!employee) {
          employee = "Não encontrado";
        }
        delete employee.password;
        res.json(employee);
      })
      .catch(err => {
        res.badRequest(err);
      });
  }
};
