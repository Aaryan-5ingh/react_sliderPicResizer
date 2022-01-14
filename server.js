const x=require('express'); const y=x();y.use(x.static('./build'));
y.listen(process.env.PORT||4000,()=>{console.log("running on port 4000");});