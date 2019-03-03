const faker = require('faker');
const fs = require('fs');


let mongoData = (d) => {
    //let headLine = 'agentId,name,premier,company,reviews,recentSales,phone,imgurl \n';
    let a = d / 1000;
    let counter = 0
    let hipsum = 'Lorem ipsum dolor amet tattooed kale chips vice air plant synth locavore jean shorts fanny pack sriracha subway tile typewriter ramps single-origin coffee four loko microdosing beard enamel pin bespoke jianbing pok pok tofu next level keffiyeh bitters hell of tumeric readymade brunch organic four loko hot chicken echo park taxidermy pickled pug paleo brooklyn kale chips jean shorts small batch chia farm-to-table intelligentsia vape affogato iceland single-origin coffee cray street art butcher VHS farm-to-table austin pork belly irony ennui cred williamsburg PBR&B bespoke bushwick tumeric kitsch health goth +1 bicycle rights tumeric farm-to-table hell of asymmetrical prism marfa pitchfork VHS la croix adaptogen brooklyn PBR&B heirloom master cleanse shaman jean shorts chillwave marfa iPhone small batch dreamcatcher gastropub slow-carb franzen activated charcoal neutra squid pitchfork aesthetic la croix austin viral palo santo cloud bread thundercats vexillologist raw denim health goth tofu seitan gentrify microdosing retro lomo vegan glossier brunch food truck banjo tattooed gluten-free narwhal before they sold out hammock man braid keffiyeh four dollar toast stumptown neutra hashtag chambray kogi messenger bag fanny pack food truck authentic live-edge mumblecore tote bag raclette bicycle rights selvage offal craft beer blue bottle copper mug coloring book lomo lo-fi farm-to-table XOXO glossier hexagon asymmetrical bicycle rights hammock try-hard vinyl neutra intelligentsia man braid gastropub deep v ugh brunch';
    let hipsumArray = hipsum.split(' ')
    let writeStream = fs.createWriteStream('./csv/mongoHomes.JSON', { flags : 'w' });
    writeStream.write('[')
    for (let k = 1; k <= a; k++) {
        let lines = ''
        for (let i = 1; i <= 1000; i++) {
            let hipRand = Math.random()*210
            let chipRand = Math.random()*210
            lines += `{
                "_id":"${i+counter}",
                "address":"${faker.address.streetAddress()}",
                "agent":{
                    "agentname":"${faker.name.findName()}",
                    "premier":"${faker.random.boolean()}",
                    "company":"${faker.company.companyName()}",
                    "reviews":"${faker.random.number(100)}",
                    "recentSales":"${faker.random.number(100)}",
                    "phone":"${faker.phone.phoneNumberFormat(1)}",
                    "imgurl":"${faker.image.avatar()}"
                },
                "messages":[
                    {
                        "username":"${faker.name.findName()}",
                        "phone":"${faker.phone.phoneNumberFormat(1)}",
                        "email":"${faker.internet.email()}",
                        "note":"${hipsumArray.slice(hipRand,hipRand+10).join(' ')}"
                    },
                    {
                        "username":"${faker.name.findName()}",
                        "phone":"${faker.phone.phoneNumberFormat(1)}",
                        "email":"${faker.internet.email()}",
                        "note":"${hipsumArray.slice(chipRand,chipRand+10).join(' ')}"
                    }
                ]
            },`;
        }
        counter += 1000;
        writeStream.write(lines)
    }
    writeStream.write(`{"end":"end"}`)
    writeStream.write(']')
    
}
console.time("mongoCreation");
mongoData(10000000);
console.timeEnd("mongoCreation");