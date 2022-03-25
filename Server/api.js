const auth = require("./authentication");
var md5 = require('md5');
const Customer = require('./Models/customer');

exports.register =   function (req, res) {
    var data = 0;
    const maxid =  Customer.find().sort({"CustomerId":-1}).limit(1).exec(function(err,customer)
     {
        data = customer[0].CustomerId + 1;
         console.log("customer",customer[0].CustomerId);

         var customer = new Customer();
        const password = req.body.password;
        const hashPassword = md5(password);
        const name = req.body.name;
        const contactNo =req.body.contactNo;
        const address= req.body.address;
        //get customer id
    
        customer.userid =  req.body.userid;
        customer.password = hashPassword;
        customer.customer_name = req.body.customer_name;
        customer.customer_address = req.body.customer_address;
        customer.customer_phone = req.body.customer_phone;
        customer.balance = 0;
        customer.CustomerId = data;
        
        console.log(customer);
        customer.save(function(err){
            res.json(customer);
        });
    });

};

exports.Login = function (req, res) {
    
       var userid = req.body.userid;
       var password= req.body.password;

       var hashPassword = md5(password);
       const user =  Customer.findOne({userid:userid}).exec(function(err,customer)
       {
            console.log(customer);
            if(customer !=null){
                var comparePassword = customer.password;
                console.log(hashPassword);
                if(hashPassword == comparePassword)
                {
                    res.json({message: "Login Successful"});
                }
                else
                {
                    res.json({message: "Incorrect Password Input"});
                }
            }
            else{
                res.json({message: "User cannot be found"});
            }
            
       });
         

    };