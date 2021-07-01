//params
var id = "571fd15840c4ed0d240d7d6c";
var t_Param = "JobInterview";
var v_Param = "JobInterview";

//call to func
MongoTest(id, t_Param, v_Param)




//func
function MongoTest(parameter1, parameter2, parameter3) {
    
    //config
    var MongoClient = require('mongodb').MongoClient;
    var url = 'mongodb://localhost/TestDB';

    //connect
    MongoClient.connect(url, function(err, db) {

        //1 convert the field type to string
        db.collection.find( { 't_' : {$exists: true} } ).forEach( function (x) {   
            x.t_ = new String(x.t_);
            db.collection.save(x);
        });
            
        //const of the qry
        const filter = { _id: id };
        const update = { t_: t_Param, v_: v_Param };

        //update the params
        var record = db.collection.findOneAndUpdate(filter, update, {new: true});
        
    }); 
}
