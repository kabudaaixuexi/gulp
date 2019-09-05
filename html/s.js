const get = require('axios').default;
const cheerio = require('cheerio')
get('https://www.meipai.com/square/13')
    .then(res => {
        //console.log(res.data);
        const $ = cheerio.load(res.data)
        console.log($('title').text());
        console.log($('.J_media_list_item').length);
        $('.J_media_list_item').each(function () {
            console.log($(this).find("img").eq(0).attr('src'));

        })
    })