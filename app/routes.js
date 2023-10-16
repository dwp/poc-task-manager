const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()


router.post('/status-update-1', function (req, res) {

      res.redirect('/task-management-HAS-v2/tasklist-status-confirmation')
    
  })

  router.post('/status-update-2', function (req, res) {

    res.redirect('/task-management-HAS-v2/tasklist-status-confirmation-2')
  
})