import express, { response } from 'express';

const router = express.Router();

router.get("/generateRandom", (req, res) => {
  let input = Math.floor(Math.random() * 2);

  if (input == 0) { // 0 is random
    let x = "";
    for (let i = 0; i < 10; i++) {
      x += "" + (Math.floor(Math.random() * 2));
    }
    res.send({
      "message": x,
      'type': 'random'
    })
    return;
  } else if (input == 1) {
    try {
      let Input = req.db.Input;
      Input.count().exec(function (err, count) {
        let random = Math.floor(Math.random() * count)
        Input.findOne().skip(random).exec(
          function (err, result) {
            res.send({
              'message': result.input,
              'type': 'manual'
            })
            return;
          })
      })
    } catch(err) {
      console.log(err);
      res.send({
        'message': err.toString(),
        'type': 'error'
      })
      return;
    }
  }
});

export default router;