var express = require('express');
var router = express.Router();
var HomeService = require('../service/HomeService');

var fs = require('fs');

//请求home页菜单数据
router.get('/getMenusData', function(req, res) {
    HomeService.getMenusData(function(data){
        console.log('1',data);
        res.send(data);
    });
});

module.exports = router;