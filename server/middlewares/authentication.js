
const ensureAuthenticated = (req, res, next,redirect ="/login") => {
    if (req.isAuthenticated()) {
      return next();
    } else {
      res.redirect(redirect)
    }
  }
  module.exports = {
    ensureAuthenticated
  }