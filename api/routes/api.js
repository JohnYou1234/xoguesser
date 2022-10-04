import express from 'express';

const router = express.Router();

router.get("/generateRandom", (req, res) => {
    let x = "";
    for (let i = 0; i < 10; i++) {
      x += "" + (Math.floor(Math.random() * 2));
    }
    res.send({
      "message": x
    })
  })
    
export default router;