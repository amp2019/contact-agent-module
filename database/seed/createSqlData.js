//**MAY need to put quotes around the URL to speed up db injestion time??
const faker = require('faker');
const fs = require('fs');

let agentsFile = (d) => {
    //let headLine = 'agentId,name,premier,company,reviews,recentSales,phone,imgurl \n';
    let headLine = 'name,premier,company,reviews,recentSales,phone,imgurl \n';
    let a = d / 1000;
    let counter = 0
    let writeStream = fs.createWriteStream('database/seed/datafiles/agentsfile.csv', { flags : 'w' });
    writeStream.write(headLine)
    for (let k = 1; k <= a; k++) {
        let lines = ''
        for (let i = 1; i <= 1000; i++) {
            //lines += (i+counter) + "," + faker.name.findName() + "," + faker.random.boolean() + ",\"" + faker.company.companyName() + "\"," + faker.random.number(100) + "," + faker.random.number(40) + "," + faker.phone.phoneNumberFormat(1) + ",\"" + faker.image.avatar() + '\"\n'
            lines += faker.name.findName() + "," + faker.random.boolean() + ",\"" + faker.company.companyName() + "\"," + faker.random.number(100) + "," + faker.random.number(40) + "," + faker.phone.phoneNumberFormat(1) + ",\"" + faker.image.avatar() + '\"\n'
        }
        counter += 1000;
        writeStream.write(lines)
    }
}

let homesFile = (d) => {
    //let headLine = 'houseId,address,reviews \n';
    let headLine = 'address,reviews \n';
    let c = d / 1000;
    let counter = 0
    let agentCeiling = 50000 - 2
    let writeStream = fs.createWriteStream('database/seed/datafiles/homesfile.csv', { flags : 'w' });
    writeStream.write(headLine)
    for (let k = 1; k <= c; k++) {
        let lines = ''
        for (let i = 1; i <= 1000; i++) {
            //lines += (i+counter) + "," + faker.address.streetAddress() + "," + (1+faker.random.number(agentCeiling)) + "\n"
            lines += faker.address.streetAddress() + "," + (1+faker.random.number(agentCeiling)) + "\n"
        }
        counter += 1000;
        writeStream.write(lines)
    }
}

let messagesFile = (d) => {
    //let headLine = 'messageId,houseId,name,phone,email,note,created \n';
    let headLine = 'houseId,username,phone,email,note,created \n';
    let b = d / 1000;
    let counter = 0
    let writeStream = fs.createWriteStream('database/seed/datafiles/OneMillionMessages.csv', { flags : 'w' });
    writeStream.write(headLine)

    let hipsum = 'Lorem ipsum dolor amet tattooed kale chips vice air plant synth locavore jean shorts fanny pack sriracha subway tile typewriter ramps single-origin coffee four loko microdosing beard enamel pin bespoke jianbing pok pok tofu next level keffiyeh bitters hell of tumeric readymade brunch organic four loko hot chicken echo park taxidermy pickled pug paleo brooklyn kale chips jean shorts small batch chia farm-to-table intelligentsia vape affogato iceland single-origin coffee cray street art butcher VHS farm-to-table austin pork belly irony ennui cred williamsburg PBR&B bespoke bushwick tumeric kitsch health goth +1 bicycle rights tumeric farm-to-table hell of asymmetrical prism marfa pitchfork VHS la croix adaptogen brooklyn PBR&B heirloom master cleanse shaman jean shorts chillwave marfa iPhone small batch dreamcatcher gastropub slow-carb franzen activated charcoal neutra squid pitchfork aesthetic la croix austin viral palo santo cloud bread thundercats vexillologist raw denim health goth tofu seitan gentrify microdosing retro lomo vegan glossier brunch food truck banjo tattooed gluten-free narwhal before they sold out hammock man braid keffiyeh four dollar toast stumptown neutra hashtag chambray kogi messenger bag fanny pack food truck authentic live-edge mumblecore tote bag raclette bicycle rights selvage offal craft beer blue bottle copper mug coloring book lomo lo-fi farm-to-table XOXO glossier hexagon asymmetrical bicycle rights hammock try-hard vinyl neutra intelligentsia man braid gastropub deep v ugh brunch';
    let hipsumArray = hipsum.split(' ')
    
    for (let k = 1; k <= b; k++) {
        let lines = ''
        for (let i = 1; i <= 1000; i++) {
            let hipRand = Math.random()*210
            let badFormat = '"' + faker.date.past() + '"';
            let dateTime = badFormat.slice(1,badFormat.indexOf('GMT')) + 'PST'
            //lines += (i+counter) + "," + (1+faker.random.number(d-2)) + "," + faker.name.findName() + "," + faker.phone.phoneNumberFormat(1) + "," + faker.internet.email() + "," + hipsumArray.slice(hipRand,hipRand+10).join(' ') + "," + dateTime + '\n'
            lines += (1+faker.random.number(9999999)) + "," + faker.name.findName() + "," + faker.phone.phoneNumberFormat(1) + "," + faker.internet.email() + "," + hipsumArray.slice(hipRand,hipRand+10).join(' ') + "," + dateTime + '\n'
        }
        counter += 1000;
        writeStream.write(lines)
    }
}

console.time("3 CSV Creation");
//agentsFile(50000);
messagesFile(1000000);
//homesFile(10000000);
console.timeEnd("3 CSV Creation");