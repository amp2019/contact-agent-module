const faker = require('faker');
const fs = require('fs');

let loaderGetData = (d) => {
    let a = d / 1000;
    let writeStream = fs.createWriteStream('datafiles/loaderGetData.JSON', { flags : 'w' });
    writeStream.on('open', () => {
        writeStream.write('{"keys": ["houseId"],"values": [')
            for (let k = 1; k <= a; k++) {
                let lines = ''
                for (let i = 1; i <= 1000; i++) {
                    lines += '["' + (1+faker.random.number(9999999)) + '"]' + ','
                }
                writeStream.write(lines)
            }
        writeStream.write('["1"]]}')
    })
}

let loaderPostData = (d) => {
    let b = d / 1000;
    let writeStream = fs.createWriteStream('datafiles/loaderPostData.JSON', { flags : 'w' });
    writeStream.on('open', () => {
        writeStream.write('{"keys":["houseId","name","phone","email","message"],"values":[')
    
        let hipsum = 'Lorem ipsum dolor amet tattooed kale chips vice air plant synth locavore jean shorts fanny pack sriracha subway tile typewriter ramps single-origin coffee four loko microdosing beard enamel pin bespoke jianbing pok pok tofu next level keffiyeh bitters hell of tumeric readymade brunch organic four loko hot chicken echo park taxidermy pickled pug paleo brooklyn kale chips jean shorts small batch chia farm-to-table intelligentsia vape affogato iceland single-origin coffee cray street art butcher VHS farm-to-table austin pork belly irony ennui cred williamsburg PBR&B bespoke bushwick tumeric kitsch health goth +1 bicycle rights tumeric farm-to-table hell of asymmetrical prism marfa pitchfork VHS la croix adaptogen brooklyn PBR&B heirloom master cleanse shaman jean shorts chillwave marfa iPhone small batch dreamcatcher gastropub slow-carb franzen activated charcoal neutra squid pitchfork aesthetic la croix austin viral palo santo cloud bread thundercats vexillologist raw denim health goth tofu seitan gentrify microdosing retro lomo vegan glossier brunch food truck banjo tattooed gluten-free narwhal before they sold out hammock man braid keffiyeh four dollar toast stumptown neutra hashtag chambray kogi messenger bag fanny pack food truck authentic live-edge mumblecore tote bag raclette bicycle rights selvage offal craft beer blue bottle copper mug coloring book lomo lo-fi farm-to-table XOXO glossier hexagon asymmetrical bicycle rights hammock try-hard vinyl neutra intelligentsia man braid gastropub deep v ugh brunch';
        let hipsumArray = hipsum.split(' ')
        
        for (let k = 1; k <= b; k++) {
            let lines = ''
            for (let i = 1; i <= 1000; i++) {
                let hipRand = Math.random()*210
                lines += '["' + (1+faker.random.number(9999999)) + '","' + faker.name.findName() + '","' + faker.phone.phoneNumberFormat(1) + '","' + faker.internet.email() + '","' + hipsumArray.slice(hipRand,hipRand+10).join(' ') + '"],' + '\n'
            }
            writeStream.write(lines)
        }
        writeStream.write('["' + (1+faker.random.number(9999999)) + '","' + faker.name.findName() + '","' + faker.phone.phoneNumberFormat(1) + '","' + faker.internet.email() + '","' + hipsumArray.slice(5,15).join(' ') + '"]]}')
    })
}

loaderGetData(100000)
loaderPostData(10000)