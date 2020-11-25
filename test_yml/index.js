const express = require('express')
const app = express()

app.get('/', async (req, res) => {
    res.send('Number of visits is conuter visits  555 985' )
})

app.listen(8081, () => {
  console.log('Run on port 8081');
})
