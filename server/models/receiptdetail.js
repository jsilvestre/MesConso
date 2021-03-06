americano = require('americano');

module.exports = ReceiptDetail = americano.getModel('receiptdetail', {
 'origin': String,
 'order': Number,
 'barcode': String,
 'label': String,
 'family': String,
 'familyLabel': String,
 'section': String,
 'sectionLabel': String,
 'amount': Number,
 'price': Number,
 'type': String,
 'typeLabel': String,
 'receiptId': String,
 'intermarcheShopId': String,
 'timestamp': Date,
 'isOnlineBuy': Boolean
 });

// Unused
//ReceiptDetail.all = function(callback) {
//    ReceiptDetail.request(
//        "all", 
//        {},
//        function(err, instances) {
//            callback(null, instances);
//        }
//    );
//};

ReceiptDetail.withReceiptId = function(receiptId, callback) {
    ReceiptDetail.request(
        "byReceiptId", 
        {
            key: receiptId

            },
        function(err, instances) {
            callback(null, instances);
        }
    );
};

// Unused.
//ReceiptDetail.byTimestamp = function(callback) {
//    ReceiptDetail.request(
//        "byTimestamp", 
//        {
//            descending: true
//
//            },
//        function(err, instances) {
//            callback(null, instances);
//        }
//    );
//};
