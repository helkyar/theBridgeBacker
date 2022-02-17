const app = require('express')(); 
const PORT = 3000;

app.use(require('express').json());
app.use('/api', require('./routes'));

app.listen(PORT, ()=>{
    console.log(`Server running on port: ${PORT}`);
})  