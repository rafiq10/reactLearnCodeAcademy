var _ = require('lodash');

var people = [{"id":1,"first_name":"Anatollo","last_name":"Alfonso","email":"aalfonso0@mlb.com","gender":"Male","ip_address":"34.137.70.15"},
{"id":2,"first_name":"Alysa","last_name":"Havers","email":"ahavers1@about.me","gender":"Female","ip_address":"82.158.183.49"},
{"id":3,"first_name":"Ximenes","last_name":"Glossop","email":"xglossop2@unc.edu","gender":"Male","ip_address":"218.68.19.31"},
{"id":4,"first_name":"Eudora","last_name":"Grinaugh","email":"egrinaugh3@chicagotribune.com","gender":"Female","ip_address":"80.154.149.224"},
{"id":5,"first_name":"Paquito","last_name":"Ende","email":"pende4@seattletimes.com","gender":"Male","ip_address":"111.203.181.229"},
{"id":6,"first_name":"Kingsly","last_name":"Emmet","email":"kemmet5@ask.com","gender":"Male","ip_address":"209.12.235.97"},
{"id":7,"first_name":"Ase","last_name":"Canedo","email":"acanedo6@cornell.edu","gender":"Male","ip_address":"74.131.209.221"},
{"id":8,"first_name":"Juditha","last_name":"Terzo","email":"jterzo7@jiathis.com","gender":"Female","ip_address":"193.139.38.222"},
{"id":9,"first_name":"Lillis","last_name":"Tabram","email":"ltabram8@storify.com","gender":"Female","ip_address":"80.111.152.240"},
{"id":10,"first_name":"Dianemarie","last_name":"Gowdie","email":"dgowdie9@latimes.com","gender":"Female","ip_address":"53.14.18.16"},
{"id":11,"first_name":"Joelly","last_name":"Littell","email":"jlittella@examiner.com","gender":"Female","ip_address":"18.69.139.242"},
{"id":12,"first_name":"Jermayne","last_name":"Swanbourne","email":"jswanbourneb@webmd.com","gender":"Male","ip_address":"199.248.38.29"},
{"id":13,"first_name":"Jessamyn","last_name":"Middas","email":"jmiddasc@accuweather.com","gender":"Female","ip_address":"131.189.29.115"},
{"id":14,"first_name":"Marabel","last_name":"Esparza","email":"mesparzad@engadget.com","gender":"Female","ip_address":"251.138.228.178"},
{"id":15,"first_name":"Freddy","last_name":"Scandroot","email":"fscandroote@sourceforge.net","gender":"Male","ip_address":"22.234.79.104"},
{"id":16,"first_name":"Andromache","last_name":"Tarbath","email":"atarbathf@umich.edu","gender":"Female","ip_address":"176.55.124.55"},
{"id":17,"first_name":"Swen","last_name":"Kubala","email":"skubalag@vimeo.com","gender":"Male","ip_address":"197.250.44.13"},
{"id":18,"first_name":"Dave","last_name":"Larking","email":"dlarkingh@telegraph.co.uk","gender":"Male","ip_address":"38.130.32.31"},
{"id":19,"first_name":"Hank","last_name":"Tower","email":"htoweri@amazon.com","gender":"Male","ip_address":"70.28.155.207"},
{"id":20,"first_name":"Kirby","last_name":"Mattiazzi","email":"kmattiazzij@fastcompany.com","gender":"Male","ip_address":"203.168.205.20"}]

var femaleCount = _.filter(people, {gender: "Female"}).length;

alert(femaleCount + ' females!');
