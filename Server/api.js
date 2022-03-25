const auth = require("./authentication");
var md5 = require('md5');
const Customer = require('./Models/customer');
const jwt = require("jsonwebtoken");
const CustomerLoan = require('./Models/CustomerLoan');
const Loan = require('./Models/LoanDetail');
const Payment = require('./Models/PaymentDetails');
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
       console.log(hashPassword);
       const user =  Customer.findOne({userid:userid}).exec(function(err,customer)
       {
            console.log(customer);
            if(customer !=null){
                var comparePassword = customer.password;
                console.log(hashPassword);
                if(hashPassword == comparePassword)
                {
                    const token = jwt.sign(
                         { userid: userid },
                        process.env.JWT_KEY,
                        {
                          expiresIn: "8h",
                        }
                      );
                    customer.token = token;
                    var data = {
                        userid: userid,
                        token:token  
                    }
                    res.json(
                        {
                            data:data,
                            message: "Login Successful"
                        });
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

    exports.getCustomerData = function (req, res)
    {
        const userId = req.params.userid

        //get account balancer
      Customer.findOne({userid: userId}).exec(function(err,customer)
        {
            var balance = customer.balance;
            var customerId= customer.CustomerId;
            CustomerLoan.aggregate([
                { "$match": { CustomerId :customerId } },
                {$lookup:
                {
                    from: "LoanDetails",
                    localField: "LoanId",
                    foreignField: "LoanId",
                    as: "Loan"
                }
            }]).exec(function(err,customerLoan) {
                var data={balance:balance,customerLoan:customerLoan};
                res.json(data);
            });
           
        });

    }