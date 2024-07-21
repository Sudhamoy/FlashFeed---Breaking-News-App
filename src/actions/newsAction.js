import axios from 'axios'

export const FETCH_NEWS_LOADING="FETCH_NEWS_LOADING"
export const FETCH_NEWS_SUCCESS="FETCH_NEWS_SUCCESS"
export const FETCH_NEWS_FAILED="FETCH_NEWS_FAILED"

//Action creators:
export const fetchNewsLoading=()=>({
  type: FETCH_NEWS_LOADING,
})
export const fetchNewsSuccess=(news)=>({
  type: FETCH_NEWS_SUCCESS,
  payload:news
})
export const fetchNewsFailed=(errorMsg)=>({
  type: FETCH_NEWS_FAILED,
  payload:errorMsg
})

//Special action creator:
//Have seen this type of nested function in closures.
export const fetchNews=()=>{
  return async (dispatch)=>{
    try{
      dispatch(fetchNewsLoading());

      /* const res=await axios.get('/v2/everything?q=india&apiKey=daa379cf8e3b46e6a5d516707eea316f'); */
      const res={
        "status": "ok",
        "totalResults": 36102,
        data:{"articles": [
          {
            "source": {
              "id": "wired",
              "name": "Wired"
            },
            "author": "Nadeem Sarwar, Shreya Fotedar",
            "title": "This Ancient Technology Is Helping Millions Stay Cool",
            "description": "Cheap, low-energy evaporative cooling devices are keeping water, food, people, and even whole buildings cool across India.",
            "url": "https://www.wired.com/story/evaporative-cooling-devices-coolant-clay-matka-mitticool-india-heat-wave/",
            "urlToImage": "https://media.wired.com/photos/6672c421e0704c563b4e7b77/191:100/w_1280,c_limit/GettyImages-80973767.jpg",
            "publishedAt": "2024-07-09T15:42:42Z",
            "content": "CBalance is another company working to tackle the heat problem, specifically for underprivileged households living in tightly packed slums, ghettos, and poorly planned neighborhoods. Led by Vivek Gil… [+3227 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "BBC News"
            },
            "author": "Matthew Henry",
            "title": "India crush England to reach T20 World Cup final",
            "description": "England defence of the T20 World Cup is over after they slump to a 68-run thrashing by a superb India in the semi-final in Guyana.",
            "url": "https://www.bbc.com/sport/cricket/articles/clwylrqenw0o",
            "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_sport/8ede/live/28e66380-34bf-11ef-a044-9d4367d5b599.jpg",
            "publishedAt": "2024-06-27T20:17:07Z",
            "content": "England's defence of the T20 World Cup is over after they slumped to a 68-run thrashing by a superb India in the semi-final in Guyana.\r\nSet 172 on a difficult pitch to make Saturday's final, England'… [+1014 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "BBC News"
            },
            "author": null,
            "title": "Grief and anger after India crush kills 121",
            "description": "At least 120 people were killed in a crush at a religious gathering in Uttar Pradesh state on Tuesday.",
            "url": "https://www.bbc.com/news/articles/c6p231q5gpro",
            "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/4ea4/live/23eb3040-391f-11ef-bbe0-29f79e992ddd.jpg",
            "publishedAt": "2024-07-03T09:37:32Z",
            "content": "By Anbarasan Ethirajan, BBC News\r\nWatch: Survivors recount the horror of India's religious event crush\r\nA day after 121 people died in a crush in the north Indian state of Uttar Pradesh, families of … [+3242 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "BBC News"
            },
            "author": null,
            "title": "India preacher denies blame for deaths in crush",
            "description": "Bhole Baba, who led the festival where some 120 people died, will co-operate with investigations.",
            "url": "https://www.bbc.com/news/articles/c2lk5q27jd4o",
            "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/8c4c/live/d28eedc0-39de-11ef-aef7-69a8c09415e5.png",
            "publishedAt": "2024-07-04T09:28:27Z",
            "content": "By Anbarasan Ethirajan, BBC News, Hathras  Toby Luckhurst, BBC News, London\r\nRelatives are mourning the deaths of more than 120 people in the crush\r\nThe preacher who led an overcrowded prayer meeting… [+3082 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "BBC News"
            },
            "author": null,
            "title": "'He's picked up the big one!' - Rashid bowls Rohit",
            "description": "England spinner Adil Rashid picks up the \"big\" wicket of India captain Rohit Sharma in their T20 World Cup semi final in Guyana.",
            "url": "https://www.bbc.com/sport/cricket/videos/cg3m7zr1vvvo",
            "urlToImage": "https://ichef.bbci.co.uk/ace/standard/1024/cpsprodpb/8de3/live/ad0662a0-34b0-11ef-bbe0-29f79e992ddd.jpg",
            "publishedAt": "2024-06-27T18:13:27Z",
            "content": "England spinner Adil Rashid picks up the \"big\" wicket of India captain Rohit Sharma in their T20 World Cup semi final in Guyana.\r\nFollow live: India v England\r\nAvailable to UK users only."
          },
          {
            "source": {
              "id": null,
              "name": "[Removed]"
            },
            "author": null,
            "title": "[Removed]",
            "description": "[Removed]",
            "url": "https://removed.com",
            "urlToImage": null,
            "publishedAt": "1970-01-01T00:00:00Z",
            "content": "[Removed]"
          },
          {
            "source": {
              "id": null,
              "name": "BBC News"
            },
            "author": null,
            "title": "Axar takes 'outstanding' catch to dismiss Marsh",
            "description": "Watch India's Axar patel taking an 'outstanding'  to dismiss Australia's captain Mitchell Marsh in the T20 World  Cup at St Lucia.",
            "url": "https://www.bbc.com/sport/cricket/videos/c2555ynvjk0o",
            "urlToImage": "https://ichef.bbci.co.uk/ace/standard/1024/cpsprodpb/ab10/live/46006c20-3250-11ef-90be-b75b34b0bbb2.jpg",
            "publishedAt": "2024-06-24T17:42:17Z",
            "content": "Watch India's Axar Patel take an 'outstanding' catch to dismiss Australia's captain Mitchell Marsh in the T20 World Cup in St Lucia.\r\nFOLLOW: Australia v India \r\nAvailable to UK users only."
          },
          {
            "source": {
              "id": null,
              "name": "Harvard Business Review"
            },
            "author": "Bhaskar Chakravorti",
            "title": "How India Can Fix Its Employment Crisis",
            "description": "Despite a roaring economy, India is in the middle of an employment crisis: In a country with the world’s largest and youngest workforce, there are very few good jobs to be had. To maintain its economic momentum through consistently high GDP growth, India need…",
            "url": "https://hbr.org/2024/07/how-india-can-fix-its-employment-crisis",
            "urlToImage": "https://hbr.org/resources/images/article_assets/2024/07/July24_19_1234856497.jpg",
            "publishedAt": "2024-07-19T14:00:00Z",
            "content": "Despite a roaring economy, India is in the middle of an employment crisis: In a country with the world’s largest and youngest workforce, there are very few good jobs to be had. To maintain its econom… [+638 chars]"
          },
          {
            "source": {
              "id": "business-insider",
              "name": "Business Insider"
            },
            "author": "Huileng Tan",
            "title": "Modi's Russia visit shows India isn't worried about making the US mad",
            "description": "India buys about $60 billion of goods a year from Russia. In contrast, Russia buys less than $5 billion worth from India.",
            "url": "https://www.businessinsider.com/modi-putin-russia-india-relationship-not-worried-us-biden-mad-2024-7",
            "urlToImage": "https://i.insider.com/668b575b098114dafd1a34b3?width=1200&format=jpeg",
            "publishedAt": "2024-07-08T08:58:46Z",
            "content": "Russian President Vladimir Putin and Indian Prime Minister Narendra Modi.Mikhail Svetlov/Getty Images\r\n\u003Cul\u003E\u003Cli\u003EIn a move likely to anger the US, Modi is visiting Russia.\u003C/li\u003E\u003Cli\u003EThe move signals stro… [+3663 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "BBC News"
            },
            "author": "Sam Drury",
            "title": "Cummins takes hat-trick as Australia beat Bangladesh",
            "description": "Pat Cummins takes a hat-trick as Australia beat Bangladesh by 28 runs on the DLS method to start their Super 8s campaign with a win.",
            "url": "https://www.bbc.com/sport/cricket/articles/c4nn7pdpy2lo",
            "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_sport/28f5/live/af52c110-2f75-11ef-905b-d7f8531f4402.jpg",
            "publishedAt": "2024-06-21T04:43:41Z",
            "content": "From the moment Mitchell Starc bowled Tanzid Hasan with the third ball of the match, Australia were in control in North Sound.\r\nThe wicket takes Starc past Lasith Malinga for the most wickets (95) ac… [+1265 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "NPR"
            },
            "author": "Anupama Chandrasekaran",
            "title": "Deadly methanol-laced bootleg liquor kills dozens in South India",
            "description": "At least 56 people died after consuming methanol-laced liquor produced in the Kallakurichi district. Several regions in India have seen mass casualties due to consumption of tainted alcohol.",
            "url": "https://www.npr.org/2024/06/23/nx-s1-5016949/methanol-laced-bootleg-liquor-kills-south-india",
            "urlToImage": "https://npr.brightspotcdn.com/dims3/default/strip/false/crop/5854x3293+0+305/resize/1400/quality/100/format/jpeg/?url=http%3A%2F%2Fnpr-brightspot.s3.amazonaws.com%2F3b%2Fe0%2F612d28e14ed68327ba07ee8e5766%2Fgettyimages-2157825906.jpg",
            "publishedAt": "2024-06-23T23:44:10Z",
            "content": "Fifty-five-year-old Ponnusamy Rajendran was a day laborer who unloaded bags of potatoes, onions and tomatoes at the local wholesale market in the southern Indian town of Kallakuruchi. Last Wednesday,… [+4050 chars]"
          },
          {
            "source": {
              "id": "business-insider",
              "name": "Business Insider"
            },
            "author": "insider@insider.com (Lillian Brown)",
            "title": "How to watch India vs. England: Live stream T20 World Cup semis",
            "description": "India and England will compete in the semi-finals at the ICC Men's T20 World Cup on Thursday. We'll show you how to live stream the game from anywhere.",
            "url": "https://www.businessinsider.com/guides/streaming/how-to-watch-india-vs-england-t20-world-cup-2024",
            "urlToImage": "https://i.insider.com/66636214ed9a404d829bd993?width=1200&format=jpeg",
            "publishedAt": "2024-06-27T11:30:01Z",
            "content": "When you buy through our links, Business Insider may earn an affiliate commission. Learn more\r\nThe end of the ICC Men's T20 World Cup is in sight as India and England compete for the last slot in the… [+5471 chars]"
          },
          {
            "source": {
              "id": "business-insider",
              "name": "Business Insider"
            },
            "author": "insider@insider.com (Lillian Brown)",
            "title": "How to watch India vs. Afghanistan: Live stream T20 World Cup Super 8",
            "description": "India and Afghanistan face off on Thursday in the Super 8 at the ICC Men's T20 World Cup. We'll show you how to live stream the game from anywhere.",
            "url": "https://www.businessinsider.com/guides/streaming/how-to-watch-india-vs-afghanistan-t20-world-cup-2024",
            "urlToImage": "https://i.insider.com/66636214ed9a404d829bd993?width=1200&format=jpeg",
            "publishedAt": "2024-06-20T12:00:01Z",
            "content": "When you buy through our links, Business Insider may earn an affiliate commission. Learn more\r\nIndia and Afghanistan's national cricket teams will face off in the Super 8 at the ICC Men's T20 World C… [+5225 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "ReadWrite"
            },
            "author": "Radek Zielinski",
            "title": "India Fines Binance $2.25 Million for AML Violations",
            "description": "Binance, one of the world’s largest cryptocurrency exchanges, has been fined 188.2 million Indian Rupees ($2.25 million) by India’s financial… Continue reading India Fines Binance $2.25 Million for AML Violations\nThe post India Fines Binance $2.25 Million for…",
            "url": "https://readwrite.com/india-fines-binance-2-25-million-for-aml-violations/",
            "urlToImage": "https://readwrite.com/wp-content/uploads/2024/06/e490e8be-72b6-4ae3-a295-56609adee70d.webp",
            "publishedAt": "2024-06-20T15:28:50Z",
            "content": "Binance, one of the world’s largest cryptocurrency exchanges, has been fined 188.2 million Indian Rupees ($2.25 million) by India’s financial watchdog for violating the country’s anti-money launderin… [+1564 chars]"
          },
          {
            "source": {
              "id": "business-insider",
              "name": "Business Insider"
            },
            "author": "Kwan Wei Kevin Tan",
            "title": "Elon Musk is giving India the cold shoulder and ghosting officials on Tesla investments",
            "description": "Tesla CEO Elon Musk cancelled a planned visit to India in April, citing \"heavy Tesla obligations.\"",
            "url": "https://www.businessinsider.com/elon-musk-ghosts-indian-officials-tesla-investment-2024-7",
            "urlToImage": "https://i.insider.com/66875c871aace5b3ada489bf?width=1200&format=jpeg",
            "publishedAt": "2024-07-05T04:02:35Z",
            "content": "Tesla CEO Elon Musk cancelled a planned visit to India in April, citing \"heavy Tesla obligations.\" Musk last met India's Prime Minister Narendra Modi in New York in June 2023 (pictured).Indian Press … [+2878 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Android Central"
            },
            "author": "vishnu.skar@gmail.com (Vishnu Sarangapurkar)",
            "title": "OnePlus refreshes its Nord phone with new colors and a reliable chip",
            "description": "OnePlus has a new Nord phone for India, which will likely be dubbed the Nord N40 for the U.S. later this year.",
            "url": "https://www.androidcentral.com/phones/oneplus-nord-ce-4-lite-5g-launch",
            "urlToImage": "https://cdn.mos.cms.futurecdn.net/ehyTz7RcPsZv6ju75Eo6fa-1200-80.jpg",
            "publishedAt": "2024-06-24T16:25:42Z",
            "content": "What you need to know\r\n\u003Cul\u003E\u003Cli\u003EOnePlus Nord CE 4 Lite launched in India with the same Snapdragon 695 SoC that powered its predecessor.\u003C/li\u003E\u003Cli\u003EIt comes in exciting blue, orange, and silver colorways … [+2276 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Android Central"
            },
            "author": "nandika.iyerravi@futurenet.com (Nandika Ravi)",
            "title": "Amazfit Helio Ring may launch in India soon, in time for Prime Day",
            "description": "The Amazfit Helio Ring recently arrived in the U.S., and sources say it's set to debut in the Indian market next week.",
            "url": "https://www.androidcentral.com/wearables/amazfit-helio-ring-amazon-india-listing-spotted",
            "urlToImage": "https://cdn.mos.cms.futurecdn.net/G2ZpkehgXDK3ECRtaXQxSL-1200-80.jpg",
            "publishedAt": "2024-07-11T23:31:03Z",
            "content": "What you need to know\r\n\u003Cul\u003E\u003Cli\u003EThe Amazfit Helio ring could be launched in India soon, likely during Prime Day sales. \u003C/li\u003E\u003Cli\u003EThe ring is made from Titanium alloy, comes in two sizes, and is expecte… [+2231 chars]"
          },
          {
            "source": {
              "id": "business-insider",
              "name": "Business Insider"
            },
            "author": "David Valerio,Grant Tyler",
            "title": "How 1.5 million plastic bottles are turned into clothing every day",
            "description": "We visited Tamil Nadu, India, to see how polyester, one of the world's most popular fabrics, is made using recycled PET water bottles.",
            "url": "https://www.businessinsider.com/how-15-million-plastic-bottles-are-turned-into-clothing-2024-6",
            "urlToImage": "https://i.insider.com/667dc5ad40cf2af6e4f66ec2?width=1200&format=jpeg",
            "publishedAt": "2024-07-03T13:09:17Z",
            "content": "Polyester is one of the most popular fabrics in the world. Made from PET plastic, it is prized for its durability, lightness, and low cost of production.\r\nWhile these characteristics make it ideal fo… [+578 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "NPR"
            },
            "author": "Mansee Khurana",
            "title": "India wins the T20 World Cup, defeating South Africa for the cricket title",
            "description": "After a rough start, India turned the match around, winning in a nail-biter. This was India’s second T20 World Cup win; the team won the inaugural T20 World Cup in 2007.",
            "url": "https://www.npr.org/2024/06/29/nx-s1-5023676/india-cricket-t20-world-cup-south-africa",
            "urlToImage": "https://npr.brightspotcdn.com/dims3/default/strip/false/crop/8640x4860+0+453/resize/1400/quality/100/format/jpeg/?url=http%3A%2F%2Fnpr-brightspot.s3.amazonaws.com%2Fed%2F36%2F7c1147c04e77a72370dd078dec78%2Fap24181696267025.jpg",
            "publishedAt": "2024-06-30T00:52:13Z",
            "content": "Indias mens cricket team won a nail-biter final game against South Africa in the Twenty20 World Cup match on Saturday, putting an end to the countrys 13-year drought in the global cricket arena.\r\nBot… [+3659 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "NPR"
            },
            "author": "Diaa Hadid",
            "title": "A politician in India goes on a hunger strike to demand water from an upstream state",
            "description": "People in New Delhi are suffering because of a heat wave, and with it, water shortages. The party that governs New Delhi accuses a neighboring state of withholding water to punish the capital.",
            "url": "https://www.npr.org/2024/06/26/nx-s1-5019346/a-politician-in-india-goes-on-a-hunger-strike-to-demand-water-from-an-upstream-state",
            "urlToImage": "https://media.npr.org/include/images/facebook-default-wide-s1400-c100.jpg",
            "publishedAt": "2024-06-26T08:00:04Z",
            "content": "People in New Delhi are suffering because of a heat wave, and with it, water shortages. The party that governs New Delhi accuses a neighboring state of withholding water to punish the capital."
          },
          {
            "source": {
              "id": null,
              "name": "Slashdot.org"
            },
            "author": "msmash",
            "title": "India Antitrust Body Finds Apple Abused Dominant Position in Apps Market",
            "description": "India's antitrust watchdog has concluded that Apple abused its dominant position in the iOS app store market, according to a confidential report seen by Reuters, marking a significant development in the country's scrutiny of tech giants. The Competition Commi…",
            "url": "https://apple.slashdot.org/story/24/07/12/1739212/india-antitrust-body-finds-apple-abused-dominant-position-in-apps-market",
            "urlToImage": "https://a.fsdn.com/sd/topics/apple_64.png",
            "publishedAt": "2024-07-12T18:40:00Z",
            "content": "India's antitrust watchdog has concluded that Apple abused its dominant position in the iOS app store market, according to a confidential report seen by Reuters, marking a significant development in … [+591 chars]"
          },
          {
            "source": {
              "id": "business-insider",
              "name": "Business Insider"
            },
            "author": "Nora Redmond",
            "title": "Heavy rain could put a dampener on the lavish Ambani wedding, with flight delays and flooded roads in Mumbai",
            "description": "Over half the flights arriving in Mumbai on Friday are delayed, and Air India is warning travelers to leave extra time.",
            "url": "https://www.businessinsider.com/ambani-wedding-dampened-by-monsoon-season-in-mumbai-heavy-rain-2024-7",
            "urlToImage": "https://i.insider.com/66910e7e5439fb59cebcc5d9?width=1200&format=jpeg",
            "publishedAt": "2024-07-12T16:33:13Z",
            "content": "The entrance to the Ambani family's Mumbai home, a 27-story tower called Antilia, was decorated ahead of the wedding of Anant Ambani and Radhika Merchant.SOPA Images/Getty Images\r\n\u003Cul\u003E\u003Cli\u003EAn orange a… [+2643 chars]"
          },
          {
            "source": {
              "id": "business-insider",
              "name": "Business Insider"
            },
            "author": "Tanushree Srivastava",
            "title": "I chose a smaller city over London when I moved to the UK. Here's why it was the right decision.",
            "description": "Tanushree Srivastava moved to Nottingham, England, from India and was shocked by how much she loved living in the lesser-known English city.",
            "url": "https://www.businessinsider.com/moving-to-england-nottingham-surprising-things-2024-7",
            "urlToImage": "https://i.insider.com/668cfb27098114dafd1a8b50?width=1200&format=jpeg",
            "publishedAt": "2024-07-09T10:46:44Z",
            "content": "Tanushree Srivastava moved to England from India as an international student.Tanushree Srivastava/BI\r\n\u003Cul\u003E\u003Cli\u003ETanushree Srivastava moved to Nottingham, England, in 2021 to pursue her master's degree.… [+5982 chars]"
          },
          {
            "source": {
              "id": "business-insider",
              "name": "Business Insider"
            },
            "author": "Jordan Hart",
            "title": "One of Tim Cook's big bets is paying off",
            "description": "Apple's annual sales in India hit nearly $8 billion, marking a 33% increase year-on-year, Bloomberg said, showing its growing presence in South Asia.",
            "url": "https://www.businessinsider.com/apples-india-push-looks-like-its-paying-off-2024-7",
            "urlToImage": "https://i.insider.com/66952f0d8893442a51568e2f?width=1200&format=jpeg",
            "publishedAt": "2024-07-15T17:06:51Z",
            "content": "Apple CEO Tim Cook's optimism about Asia is warranted, according to recent sales reports.Angela Weiss/AFP/Getty Images\r\n\u003Cul\u003E\u003Cli\u003EApple hit a milestone in its Indian market.\u003C/li\u003E\u003Cli\u003ESales in its latest… [+1325 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Yahoo Entertainment"
            },
            "author": "Gordon Arthur",
            "title": "India advances light attack helicopter program with large tender",
            "description": "Armaments on the LCH include Mistral air-to-air missiles, up to four FZ231 2.75-inch (70mm) rocket pods and a nose-mounted M621 20mm cannon.",
            "url": "https://www.yahoo.com/news/india-advances-light-attack-helicopter-151209658.html",
            "urlToImage": "https://s.yimg.com/ny/api/res/1.2/..r423ftjrlpnPRcSSqAHg--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD02NzU-/https://media.zenfs.com/en/defense_news_499/2879f3dc22d5682c88199f9e046ea0c9",
            "publishedAt": "2024-06-21T15:12:09Z",
            "content": "Thanks to its high-altitude performance, the Light Combat Helicopter or LCH for short is an important aviation platform for Indias military. Now, a major acquisition of this helicopter type has moved… [+2605 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "BBC News"
            },
            "author": null,
            "title": "Sunak's 'dismal end' and 'bland' Starmer: World media reacts to UK election",
            "description": "Labour's landslide victory has been followed closely by media commentators around the world.",
            "url": "https://www.bbc.com/news/articles/c9r3q3zre9zo",
            "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/577c/live/ad3cd940-3ac1-11ef-a044-9d4367d5b599.jpg",
            "publishedAt": "2024-07-05T17:56:07Z",
            "content": "By BBC Monitoring and Matthew Davis\r\nThe Conservatives have emerged with \"broken bones\" from the UK election after Rishi Sunak's \"dismal end\" - but the big question for some in the international medi… [+7328 chars]"
          },
          {
            "source": {
              "id": "wired",
              "name": "Wired"
            },
            "author": "Umair Irfan, Aja Romano",
            "title": "Enough With the Arrogant Attitudes Towards Extreme Heat",
            "description": "In so many aspects of our culture, we view severe heat as something that should be willingly embraced, bravely endured, or blithely ignored.",
            "url": "https://www.wired.com/story/enough-with-the-arrogant-attitudes-towards-extreme-heat/",
            "urlToImage": "https://media.wired.com/photos/6698f24cb9fc170b9aaf201b/191:100/w_1280,c_limit/GettyImages-2161406131.jpg",
            "publishedAt": "2024-07-20T12:00:00Z",
            "content": "This story originally appeared on Vox and is part of the Climate Desk collaboration.\r\nA 4-month-old died in Arizona as temperatures climbed into triple digits. A 2-year-old died in a hot car, also in… [+3469 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "BBC News"
            },
            "author": null,
            "title": "Teenager murdered baby boy by shaking him to death",
            "description": "Carl Alesbrook is convicted of killing four-month old Elijah Shemwell.",
            "url": "https://www.bbc.com/news/articles/cy68dg898pqo",
            "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/d793/live/608f54f0-3df6-11ef-96a8-e710c6bfc866.png",
            "publishedAt": "2024-07-11T13:16:09Z",
            "content": "A teenager has been found guilty of murdering a baby boy by shaking him to death.\r\nElijah Shemwell died on 5 January, 2022, three days after he was found to be pale, limp and drowsy at his mother's h… [+1235 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "BBC News"
            },
            "author": null,
            "title": "UK's richest family convicted of exploiting servants",
            "description": "Four family members were given prison sentences ranging from four to four-and-a-half years.",
            "url": "https://www.bbc.com/news/articles/c3ggl6pe52eo",
            "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/3f8c/live/288767b0-2fea-11ef-a044-9d4367d5b599.jpg",
            "publishedAt": "2024-06-21T17:37:44Z",
            "content": "A Swiss court has sentenced four members of the UK's richest family to prison sentences ranging from four to four-and-a-half years. \r\nPrakash and Kamal Hinduja as well as son Ajay and his wife Namrat… [+1353 chars]"
          },
          {
            "source": {
              "id": "espn",
              "name": "ESPN"
            },
            "author": null,
            "title": "Follow live: India, South Africa meet in World Cup final",
            "description": "Check India vs South Africa, ICC Men's T20 World Cup 2024 2024, Final Match scoreboard, ball by ball commentary, updates only on ESPN.com. Check India vs South Africa Final Videos, Reports Articles Online.",
            "url": "https://www.espn.com/cricket/series/8604/game/1415755/",
            "urlToImage": "https://a.espncdn.com/combiner/i?img=/i/espn/espn_logos/espncricinfo.png",
            "publishedAt": "2024-06-29T14:38:58Z",
            "content": "10.26 The anthems are done, and we're ready to begin. Will India reclaim the trophy they last won - with consequences that changed the face of cricket - in 2007, or will South Africa lift their first… [+22481 chars]"
          },
          {
            "source": {
              "id": "business-insider",
              "name": "Business Insider"
            },
            "author": "Charissa Cheong",
            "title": "I lost my dream job in the US because I couldn't get a work visa. In Canada, the pathway has been much smoother.",
            "description": "Vaishali Gauba felt defeated when she moved back to India after she couldn't get a work visa in the US — but the visa path was much clearer in Canada.",
            "url": "https://www.businessinsider.com/work-visa-moved-usa-canada-immigrants-2024-7",
            "urlToImage": "https://i.insider.com/667c51e450b021b5cae9acf8?width=1200&format=jpeg",
            "publishedAt": "2024-07-08T10:25:14Z",
            "content": "Vaishali Gauba was given a work visa in Canada after moving there in 2022. Courtesy of Mayank Sharma; Getty Images; Jenny Chang-Rodriguez/BI\r\n\u003Cul\u003E\u003Cli\u003EVaishali Gauba dreamed of being a journalist in t… [+6271 chars]"
          },
          {
            "source": {
              "id": "espn",
              "name": "ESPN"
            },
            "author": null,
            "title": "Follow live: India, Australia meet with semifinal places at stake",
            "description": "Check Australia vs India, ICC Men's T20 World Cup 2024 2024, 51st Match, Super Eights, Group 1 Match Timings, scoreboard, ball by ball commentary, updates only on ESPN.com. Check Australia vs India 51st Match, Super Eights, Group 1 ✓ Videos, ✓ Reports ✓ Artic…",
            "url": "https://www.espn.com/cricket/series/8604/game/1415751/",
            "urlToImage": "https://a.espncdn.com/i/cricket/cricinfo/1409799_1400x933.jpg",
            "publishedAt": "2024-06-24T14:20:19Z",
            "content": "10.20am: \"Crowd still steadily coming in but by no means full as things stand,\" says Matt R. \"India shirts heavily outnumbering Australia.\" Almost time for the anthems at the Daren Sammy\r\n10.15am: Ho… [+7644 chars]"
          },
          {
            "source": {
              "id": "wired",
              "name": "Wired"
            },
            "author": "Lily Hay Newman, Matt Burgess, Andy Greenberg",
            "title": "How One Bad CrowdStrike Update Crashed the World’s Computers",
            "description": "A defective CrowdStrike kernel driver sent computers around the globe into a reboot death spiral, taking down air travel, hospitals, banks, and more with it. Here’s how that’s possible.",
            "url": "https://www.wired.com/story/crowdstrike-outage-update-windows/",
            "urlToImage": "https://media.wired.com/photos/669a5840ea323ec07ffe3042/191:100/w_1280,c_limit/071924_IT-Outage-ASAP-3.jpg",
            "publishedAt": "2024-07-19T14:46:19Z",
            "content": "That deeper access also introduces a far higher possibility that security softwareand updates to that softwarewill crash the whole system, says Matthieu Suiche, head of detection engineering at the s… [+3010 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "BBC News"
            },
            "author": null,
            "title": "England fans' weird and wonderful road to Euro 2024 final",
            "description": "From celebrating with the Killers to renaming street signs, the Euros has been full of unique fan moments.",
            "url": "https://www.bbc.com/news/articles/ckmg5l3y5v8o",
            "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/d418/live/34e7e8c0-4036-11ef-b74c-bb483a802c97.jpg",
            "publishedAt": "2024-07-13T03:13:12Z",
            "content": "By Tim Dodd, BBC News, England\r\nThe England celebrations were shown on a big screen at The Killers' O2 gig on Wednesday\r\nEngland have done it again - they've made it to a Euros final. Facing Spain on… [+7331 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Yahoo Entertainment"
            },
            "author": "Reuters",
            "title": "India kicks off $11.5 billion spectrum auction; analysts expect lacklustre bidding",
            "description": "India has offered telecom spectrum worth around 962.38 billion rupees ($11.53 billion) for auction on Tuesday, it said in a release, even as analysts expect ...",
            "url": "https://sg.finance.yahoo.com/news/india-kicks-off-11-5-061408594.html",
            "urlToImage": "https://media.zenfs.com/en/reuters.com/b08c3db009365b809315fdfeca6e93ac",
            "publishedAt": "2024-06-25T06:14:08Z",
            "content": "BENGALURU (Reuters) - India has offered telecom spectrum worth around 962.38 billion rupees ($11.53 billion) for auction on Tuesday, it said in a release, even as analysts expect lacklustre participa… [+1730 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Yahoo Entertainment"
            },
            "author": "Saurabh Sharma",
            "title": "North India eateries told to display employee names in Hindu holy month, sparking anger",
            "description": "Police in northern India have asked owners of restaurants to  list the names of their workers on display boards during a Hindu holy month that begins next...",
            "url": "https://www.yahoo.com/news/north-india-eateries-told-display-095000804.html",
            "urlToImage": "https://media.zenfs.com/en/reuters.com/05852fca5f17387641aa5755c8827b74",
            "publishedAt": "2024-07-18T09:50:00Z",
            "content": "By Saurabh Sharma\r\nLUCKNOW, India (Reuters) - Police in northern India have asked owners of restaurants to list the names of their workers on display boards during a Hindu holy month that begins next… [+2351 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "The Atlantic"
            },
            "author": "Sushmita Pathak",
            "title": "India Is Building a Mega-River",
            "description": "It could bring water to parched land—but scientists aren’t sure it’s worth the risk.",
            "url": "https://www.theatlantic.com/science/archive/2024/06/india-national-river-linking-project/678767/?utm_source=feed",
            "urlToImage": null,
            "publishedAt": "2024-06-23T12:00:00Z",
            "content": "This article originally appeared in Hakai Magazine.In India, severe water shortages in one part of the country often coincide with acute flooding in another. When these dual tragedies occur, Indians … [+6313 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "BBC News"
            },
            "author": null,
            "title": "India to probe iPhone factory hiring practices",
            "description": "The firm has come under the scanner for allegedly not employing married women at its factory in Tamil Nadu state.",
            "url": "https://www.bbc.com/news/articles/cydvp336y3no",
            "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/404d/live/0e1bad10-3444-11ef-bdc5-41d7421c2adf.jpg",
            "publishedAt": "2024-06-27T05:55:59Z",
            "content": "The Indian government has sought a detailed report from Tamil Nadu state following media reports that Apple supplier Foxconn was allegedly rejecting married women for iPhone assembly jobs.\r\nA Reuters… [+1644 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "BBC News"
            },
            "author": null,
            "title": "India event organiser arrested after fatal crush",
            "description": "Nearly 121 people died in a crush at a religious gathering in the northern Indian state of Uttar Pradesh.",
            "url": "https://www.bbc.com/news/articles/c725dxwdx19o",
            "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/4e8d/live/372f9510-3ce4-11ef-bbe0-29f79e992ddd.jpg",
            "publishedAt": "2024-07-08T07:03:46Z",
            "content": "The chief organiser of a religious gathering in northern India, where 121 people were killed in a crush, has surrendered to the police, his lawyer says.\r\nThe incident, which took place in Uttar Prade… [+2090 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Cool Hunting"
            },
            "author": "CH Contributor",
            "title": "Micato Safaris Offers the Ultimate Tour of India",
            "description": "This ultra luxurious travel organization is far from your average tour operator Micato Safaris isn’t your average tour operator. This family-run company specializes in crafting bespoke travel experiences for the socially conscious …",
            "url": "http://coolhunting.com/travel/micato-safaris-offers-the-ultimate-tour-of-india/",
            "urlToImage": "https://150102931.v2.pressablecdn.com/wp-content/uploads/2024/07/IMG_5214-scaled.jpg",
            "publishedAt": "2024-07-16T11:31:58Z",
            "content": "This ultra luxurious travel organization is far from your average tour operator\n\n\nRead\nTravel\r\n\n\n\n\n\nMicato Safaris Offers the Ultimate Tour of India\r\n\n\n\nThis ultra luxurious travel organization is fa… [+13141 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "BBC News"
            },
            "author": null,
            "title": "Lavish Ambani wedding divides opinions in India",
            "description": "The noise around the lavish wedding has drawn public fascination - and ire.",
            "url": "https://www.bbc.com/news/videos/cgr5073mz74o",
            "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/d1ad/live/3a221180-404f-11ef-9e1c-3b4a473456a6.jpg",
            "publishedAt": "2024-07-12T13:22:41Z",
            "content": "Asias richest man Mukesh Ambanis son Anant Ambani is getting married on Friday evening after months of lavish celebrations. \r\nThe marathon wedding festivities started in March and saw many internatio… [+136 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Yahoo Entertainment"
            },
            "author": "KRUTIKA PATHI and JIM HEINTZ",
            "title": "Indian Prime Minister Modi makes first visit to ally Russia since the start of its war on Ukraine",
            "description": "India’s prime minister begins a two-day visit to Russia on Monday, his first since Moscow launched its invasion of Ukraine, a war that has complicated the...",
            "url": "https://www.yahoo.com/news/indian-prime-minister-modi-makes-040331968.html",
            "urlToImage": "https://s.yimg.com/ny/api/res/1.2/vYrt3AFh1UZ.bK26QyLMnA--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDA-/https://media.zenfs.com/en/ap.org/36ffe0c4d524edf3763754fdc5a95199",
            "publishedAt": "2024-07-08T04:03:31Z",
            "content": "Indias prime minister begins a two-day visit to Russia on Monday, his first since Moscow launched its invasion of Ukraine, a war that has complicated the relationship between the longtime allies and … [+5203 chars]"
          },
          {
            "source": {
              "id": "time",
              "name": "Time"
            },
            "author": "Biswajeet Banerjee / AP",
            "title": "At Least 27 Are Killed in a Stampede at a Religious Event in India, Officials Say",
            "description": "More than 150 people were also admitted to hospitals after the crush in a village in Hathras district of Uttar Pradesh state.",
            "url": "https://time.com/6994432/deadly-stampede-india-hathras-uttar-pradash/",
            "urlToImage": null,
            "publishedAt": "2024-07-02T12:01:31Z",
            "content": "LUCKNOW, India Officials say at least 27 people have been killed in a stampede at a religious gathering in northern India.\r\nMore than 150 people were admitted to hospitals after the crush in a villag… [+620 chars]"
          },
          {
            "source": {
              "id": "time",
              "name": "Time"
            },
            "author": "Krutika Pathi and Jim Heintz / AP",
            "title": "India’s Modi Makes Rare Visit to Russia’s Putin as Ties Remain Strained Over War in Ukraine",
            "description": "The partnership between India and Russia has become fraught amid the war in Ukraine, as Russia has moved closer to India’s main rival China.",
            "url": "https://time.com/6995683/india-modi-putin-russia-visit-ukraine-war-china/",
            "urlToImage": "https://api.time.com/wp-content/uploads/2024/07/Modi-Putin-Russia-Visit-Ukraine-China.jpg?quality=85&w=1024&h=628&crop=1",
            "publishedAt": "2024-07-08T08:20:00Z",
            "content": "Indias prime minister begins a two-day visit to Russia on Monday, his first since Moscow launched its invasion of Ukraine, a war that has complicated the relationship between the longtime allies and … [+5330 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "NPR"
            },
            "author": "Charles Maynes",
            "title": "India's Modi goes to Moscow for his 1st visit since Russia invaded Ukraine",
            "description": "Indian Prime Minister Narendra Modi is in Moscow for a two-day visit with Russian President Vladimir Putin.",
            "url": "https://www.npr.org/2024/07/08/nx-s1-5032082/india-russia-modi-visit-putin",
            "urlToImage": "https://npr.brightspotcdn.com/dims3/default/strip/false/crop/4066x2287+0+58/resize/1400/quality/100/format/jpeg/?url=http%3A%2F%2Fnpr-brightspot.s3.amazonaws.com%2F8d%2F4a%2Faa12f27b4a91a2c3c8323f9d1084%2Fgettyimages-2160599982.jpg",
            "publishedAt": "2024-07-08T18:54:09Z",
            "content": "MOSCOW Indian Prime Minister Narendra Modi is in Moscow for a two-day visit with Russian President Vladimir Putin his first trip to Russia since the Kremlin ordered its full-scale invasion of Ukraine… [+5332 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Gizmodo.com"
            },
            "author": "Passant Rabie",
            "title": "Truck Receives Laser Signal from Space in First-of-Its-Kind Demonstration",
            "description": "The test is part of ongoing efforts to increase space-to-Earth communication speeds by 1,000-fold.",
            "url": "https://gizmodo.com/truck-receives-laser-signal-from-space-in-first-of-its-kind-demonstration-2000473603",
            "urlToImage": "https://gizmodo.com/app/uploads/2024/07/TeraNet1.jpg",
            "publishedAt": "2024-07-16T15:00:18Z",
            "content": "A German satellite transmitted a laser signal to a ground station mounted on a Jeep in a breakthrough test that could significantly alter space-to-Earth communication, speeding it up and avoiding dat… [+3348 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Digital Trends"
            },
            "author": "Nadeem Sarwar",
            "title": "An iPhone plant in India reportedly avoided hiring married women",
            "description": "According to Reuters, married women were deliberately not hired a facility that assembles iPhones in India. This won't be the first such incident for Apple.",
            "url": "https://www.digitaltrends.com/mobile/an-iphone-plant-in-india-foxconn-reportedly-avoided-hiring-married-women/",
            "urlToImage": "https://www.digitaltrends.com/wp-content/uploads/2024/06/apple-store-outside.jpg?resize=1200%2C630&p=1",
            "publishedAt": "2024-06-26T12:47:04Z",
            "content": "Digital Trends\r\nApple — and its contract manufacturer, Foxconn — don’t have a particularly stellar track record with labor rights and affording workers the best conditions to make arguably the most p… [+3077 chars]"
          },
          {
            "source": {
              "id": "time",
              "name": "Time"
            },
            "author": "Astha Rajvanshi",
            "title": "Why Modi and Putin Are Friends",
            "description": "Modi used a recent trip to Russia not to challenge Putin over Ukraine, but instead to affirm longstanding ties between the two countries.",
            "url": "https://time.com/6996536/india-russia-modi-putin-visit/",
            "urlToImage": "https://api.time.com/wp-content/uploads/2024/07/AP24191502491132.jpg?quality=85&w=1200&h=628&crop=1",
            "publishedAt": "2024-07-09T17:58:47Z",
            "content": "Hours before Indias Prime Minister Narendra Modi landed in Moscow on July 8, Russia fired missiles on Ukraine that killed at least 41 people, including four children at a children's hospital in Kyiv.… [+5125 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Gizmodo.com"
            },
            "author": "Kyle Barr",
            "title": "Chaos Reigns as Global Outage Breaks Everything from Airlines to Emergency Services",
            "description": "Microsoft confirmed there’s an ongoing outage connected to IT company CloudStrike. There's a patch, though we're still feeling the impacts.",
            "url": "https://gizmodo.com/chaos-reigns-as-global-outage-breaks-everything-from-airlines-to-emergency-services-2000476734",
            "urlToImage": "https://gizmodo.com/app/uploads/2024/07/GettyImages-2162656122.jpg",
            "publishedAt": "2024-07-19T13:15:37Z",
            "content": "The whole world was thrown for a loop Friday after Microsoft confirmed theres a humongous, ongoing outage connected to the IT security company CrowdStrike. While the makers of Windows said the underl… [+2929 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "BBC News"
            },
            "author": null,
            "title": "World Cup glory a vindication for India cricket legends",
            "description": "India defeated South Africa by seven runs on Saturday to bring home a World Cup after 13 years.",
            "url": "https://www.bbc.com/news/articles/c3ge87ew7kyo",
            "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/85c7/live/d448fd00-3771-11ef-a780-47cb50223b50.jpg",
            "publishedAt": "2024-07-01T09:38:48Z",
            "content": "By Cherylann Mollan, BBC News\r\nFans celebrate on Delhi streets after India's win\r\nIndians are continuing to celebrate their cricket team's triumph at the T20 World Cup, which is being seen as a fitti… [+4674 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "BBC News"
            },
            "author": null,
            "title": "Dozens killed in stampede at India religious event",
            "description": "At least 27 people have been killed in a stampede at a religious event in India's Uttar Pradesh state.",
            "url": "https://www.bbc.com/news/articles/cv2g7wgj83no",
            "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/0f2c/live/60f697b0-1203-11ef-82e8-cd354766a224.png",
            "publishedAt": "2024-07-02T11:38:56Z",
            "content": "At least 27 people, mostly women, have been killed in northern India in a stampede at a religious gathering, officials have said.\r\nThe incident took place at a satsang (a Hindu religious event) in Ha… [+368 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Xataka.com"
            },
            "author": "Alejandro Alcolea",
            "title": "Tejas recicladas para crear edificios que respiran: la tecnología india para enfriar sin aire acondicionado",
            "description": "El planeta está cada vez más caliente. El cambio climático está consiguiendo que cada vez estemos más cerca de superar la línea de los 1,5º marcada hace unos años. Al margen de las variaciones de temperatura extremas de algunas zonas, eso significa que hay ot…",
            "url": "https://www.xataka.com/energia/tejas-recicladas-para-crear-edificios-que-respiran-tecnologia-india-para-enfriar-aire-acondicionado",
            "urlToImage": "https://i.blogs.es/27061c/aire-acondicionado/840_560.jpeg",
            "publishedAt": "2024-06-30T10:30:37Z",
            "content": "El planeta está cada vez más caliente. El cambio climático está consiguiendo que cada vez estemos más cerca de superar la línea de los 1,5º marcada hace unos años. Al margen de las variaciones de tem… [+5310 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Yahoo Entertainment"
            },
            "author": "Leslie Sattler",
            "title": "Rural, low-income areas suffer as megacity depletes water supplies: 'All that water from around us goes to the people in the big city'",
            "description": "\"Nothing has changed for us.\"",
            "url": "https://www.yahoo.com/news/rural-low-income-areas-suffer-230000555.html",
            "urlToImage": "https://s.yimg.com/ny/api/res/1.2/gysD8CgeW9.uFU4EhkDKxw--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDA-/https://media.zenfs.com/en/the_cool_down_737/cdaaf9a8c3602f0fc0fb2401f27d694f",
            "publishedAt": "2024-06-30T23:00:00Z",
            "content": "As rising global temperatures fuel extreme droughts, a disturbing scenario is playing out in India the country's rural villages are running out of water as growing cities siphon away supplies.\r\nWhat'… [+1845 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Yahoo Entertainment"
            },
            "author": null,
            "title": "India approves $1.63bn renewable energy evacuation schemes",
            "description": null,
            "url": "https://consent.yahoo.com/v2/collectConsent?sessionId=1_cc-session_cb1031bb-ea6e-4f4e-a7d5-1e34dc375d41",
            "urlToImage": null,
            "publishedAt": "2024-06-24T10:32:42Z",
            "content": "If you click 'Accept all', we and our partners, including 237 who are part of the IAB Transparency &amp; Consent Framework, will also store and/or access information on a device (in other words, use … [+678 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Im1776.com"
            },
            "author": "Avetis Muradyan",
            "title": "The Company Men",
            "description": "What we can learn today from the East India Company",
            "url": "https://im1776.com/2024/06/19/the-company-men/",
            "urlToImage": "https://im1776.com/wp-content/uploads/2024/06/EIC-men-800x450.webp",
            "publishedAt": "2024-06-24T19:36:20Z",
            "content": "Captain Hawkins was the father of all account managers. His expense account totaled an annual sum of £3,200 (~$0.5M in 2020 USD) paid from the treasury of the Mughal Empire. His knowledge of Turkish … [+12794 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Yahoo Entertainment"
            },
            "author": "Pratap Chakravarty",
            "title": "Putin pledges to free Indians strong-armed into serving in Russian army",
            "description": "Russia has promised to repatriate Indians pressured into military service, some of them in Ukraine, after talks between President Vladimir Putin and Prime...",
            "url": "https://uk.news.yahoo.com/putin-pledges-free-indians-strong-135847670.html",
            "urlToImage": "https://media.zenfs.com/en/rfi_english_75/c86411e1d037e679f966e60a51d32905",
            "publishedAt": "2024-07-13T13:58:47Z",
            "content": "Russia has promised to repatriate Indians pressured into military service, some of them in Ukraine, after talks between President Vladimir Putin and Prime Minister Narendra Modi. Up to 50 Indian nati… [+1532 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "9to5Mac"
            },
            "author": "Ben Lovejoy",
            "title": "Apple reviving plans to make iPads in India – AirPods too",
            "description": "Apple’s plan to make iPads in India were put on hold after failed negotiations with the government over tax breaks, but the company is now reportedly making a fresh attempt.\n\n\n\nIt’s now more than a year after we’d expected iPad production in India to begin, a…",
            "url": "https://9to5mac.com/2024/07/09/make-ipads-in-india/",
            "urlToImage": "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2024/07/Making-iPads-in-India.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
            "publishedAt": "2024-07-09T12:19:55Z",
            "content": "Apple’s plan to make iPads in India were put on hold after failed negotiations with the government over tax breaks, but the company is now reportedly making a fresh attempt.\r\nIt’s now more than a yea… [+2296 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "MacRumors"
            },
            "author": "Joe Rossignol",
            "title": "Apple's Efforts to Automate iPhone Assembly Detailed in New Report",
            "description": "The Information today reported that shortly after COVID-19-related lockdowns and protests in China impacted iPhone assembler Foxconn in late 2022, Apple's senior vice president of operations Sabih Khan instructed managers to reduce the number of workers on iP…",
            "url": "https://www.macrumors.com/2024/06/24/apple-automating-iphone-assembly-report/",
            "urlToImage": "https://images.macrumors.com/t/rxVDS7FG7Al4C_Q_X63HYPsr5oI=/1600x/article-new/2024/06/iPhone-Assembly.jpg",
            "publishedAt": "2024-06-24T21:00:00Z",
            "content": "The Information today reported that shortly after COVID-19-related lockdowns and protests in China impacted iPhone assembler Foxconn in late 2022, Apple's senior vice president of operations Sabih Kh… [+1289 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Android Central"
            },
            "author": "vishnu.skar@gmail.com (Vishnu Sarangapurkar)",
            "title": "OnePlus 12 and OnePlus Open get the latest June Android security patches",
            "description": "It is that time of the month when we expect security patches to roll out to Android devices, and some of the OnePlus devices are getting them this week.",
            "url": "https://www.androidcentral.com/apps-software/oneplus-12-and-oneplus-open-gain-june-2024-security-patch",
            "urlToImage": "https://cdn.mos.cms.futurecdn.net/eTYvoXTAaPFaaDtW2nksDG-1200-80.jpg",
            "publishedAt": "2024-07-09T15:42:06Z",
            "content": "What you need to know\r\n\u003Cul\u003E\u003Cli\u003EOnePlus 12 and OnePlus Open get the June Android security patch this week.\u003C/li\u003E\u003Cli\u003EAdditionally, the latest update has several improvements, new features, and bug fixes… [+3607 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Android Central"
            },
            "author": "vishnu.skar@gmail.com (Vishnu Sarangapurkar)",
            "title": "OnePlus Nord 4 packs in a full metal body design and Snapdragon 7 Plus Gen 3",
            "description": "OnePlus launched its new Nord phone alongside a pair of Nord Buds, the OnePlus Watch 2R, and the OnePlus Pad 2.",
            "url": "https://www.androidcentral.com/phones/oneplus-nord-4-with-snapdragon-7-plus-gen-3-goes-official",
            "urlToImage": "https://cdn.mos.cms.futurecdn.net/5h4VJsd7X6yWSTN9QKp829-1200-80.jpg",
            "publishedAt": "2024-07-16T17:04:27Z",
            "content": "What you need to know\r\n\u003Cul\u003E\u003Cli\u003EOnePlus Nord 4 goes official in multiple regions with a sleek body and full metal build.\u003C/li\u003E\u003Cli\u003EThe mid-range phone further features a dual-tone finish at the back nex… [+2841 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Android Central"
            },
            "author": "techkritiko@gmail.com (Jay Bonggolto)",
            "title": "The CMF Phone 1 is a customizable budget phone starting at $199",
            "description": "With the hype finally calming down, here’s the lowdown on the CMF Phone 1.",
            "url": "https://www.androidcentral.com/phones/the-cmf-phone-1-is-a-customizable-budget-phone-starting-at-dollar199",
            "urlToImage": "https://cdn.mos.cms.futurecdn.net/dg8eJJs657Zvv9Fposh6B4-1200-80.jpg",
            "publishedAt": "2024-07-08T09:00:21Z",
            "content": "What you need to know\r\n\u003Cul\u003E\u003Cli\u003EThe CMF Phone 1 starts at $199 in the US (8GB/128GB), ₹15,999 in India (6GB/128GB), and €269 / £239 in Europe (8GB/256GB).\u003C/li\u003E\u003Cli\u003EIn North America, it's available only… [+2997 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Yahoo Entertainment"
            },
            "author": "Tina Deines",
            "title": "Engineers warn prolonged outages could soon strike one of the world's most populous countries: 'If the situation continues, there are fair chances of a grid disturbance'",
            "description": "The situation is becoming more \"serious by the day.\"",
            "url": "https://www.yahoo.com/news/engineers-warn-prolonged-outages-could-230000361.html",
            "urlToImage": "https://s.yimg.com/ny/api/res/1.2/TgMDjuZ8EGENKVzkpiyStA--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD02NzU-/https://media.zenfs.com/en/the_cool_down_737/de5e360f71cac371b54df636f102e581",
            "publishedAt": "2024-07-07T23:00:00Z",
            "content": "Indian engineers are warning about possible prolonged energy blackouts in the north of the country due to increased demand amid searing heat, The Guardian reported.\r\nWhat's happening?\r\nThe publicatio… [+2350 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Hipertextual"
            },
            "author": "Luis Miranda",
            "title": "Se acabó el truco: YouTube cancela cuentas Premium obtenidas por VPN",
            "description": "Si eres de los que aplicó el truco de una VPN para conseguirte una suscripción barata de YouTube Premium, tenemos malas noticias. YouTube comenzó a cancelar las membresías que se obtenían en otro país a un coste menor. La tecnológica notificó a los usuarios q…",
            "url": "http://hipertextual.com/2024/06/youtube-cancela-cuentas-premium-obtenidas-vpn",
            "urlToImage": "https://imgs.hipertextual.com/wp-content/uploads/2023/02/youtube.jpeg",
            "publishedAt": "2024-06-20T19:09:56Z",
            "content": "Si eres de los que aplicó el truco de una VPN para conseguirte una suscripción barata de YouTube Premium, tenemos malas noticias. YouTube comenzó a cancelar las membresías que se obtenían en otro paí… [+3348 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "BBC News"
            },
            "author": null,
            "title": "Common blood-thinning drug neutralises cobra venom",
            "description": "Heparin can neutralise the necrosis-causing toxins in some spitting cobras' venom, scientists discover.",
            "url": "https://www.bbc.com/news/articles/cv2gwv284y1o",
            "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/bd32/live/ec1ec990-4375-11ef-81b7-eb26ff9f97f3.jpg",
            "publishedAt": "2024-07-17T18:15:42Z",
            "content": "A spitting cobra's incredibly potent venom can quickly destroy skin, muscle and bone around the site of a bite\r\nA drug commonly prescribed to thin blood can be repurposed as a cheap antidote to cobra… [+2757 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Xataka.com"
            },
            "author": "Javier Marquez",
            "title": "India es el segundo mayor mercado de smartphones a nivel mundial. Y pese a ello millones todavía usan teléfonos básicos",
            "description": "India lleva años experimentando un notable crecimiento económico y poblacional. Como resultado de esta dinámica, el país actualmente liderado por Narendra Modi se ha convertido en el segundo mercado de smartphones más grande del mundo después de China.\n\u003C!-- B…",
            "url": "https://www.xataka.com/moviles/india-segundo-mayor-mercado-smartphones-a-nivel-mundial-pese-a-ello-millones-todavia-usan-telefonos-basicos",
            "urlToImage": "https://i.blogs.es/353001/india-telefonos/840_560.jpeg",
            "publishedAt": "2024-07-16T00:57:09Z",
            "content": "India lleva años experimentando un notable crecimiento económico y poblacional. Como resultado de esta dinámica, el país actualmente liderado por Narendra Modi se ha convertido en el segundo mercado … [+2451 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Xataka.com"
            },
            "author": "Alejandro Alcolea",
            "title": "La población de China, India y África, comparadas con la del resto del mundo en un revelador mapa",
            "description": "Se estima que, en los albores de la agricultura, hace unos 10.000 años, éramos unos cinco millones de personas en la Tierra. Es una cantidad ridícula si la comparamos con los 8.100 millones de habitantes en la actualidad, pero lo que da vértigo de verdad es q…",
            "url": "https://www.xataka.com/magnet/poblacion-china-india-africa-comparadas-resto-mundo-revelador-mapa",
            "urlToImage": "https://i.blogs.es/e8000b/mapa-2/840_560.jpeg",
            "publishedAt": "2024-07-20T09:30:48Z",
            "content": "Se estima que, en los albores de la agricultura, hace unos 10.000 años, éramos unos cinco millones de personas en la Tierra. Es una cantidad ridícula si la comparamos con los 8.100 millones de habita… [+3249 chars]"
          },
          {
            "source": {
              "id": "business-insider",
              "name": "Business Insider"
            },
            "author": "Olivia Singh,Palmer Haasch,Ayomikun Adekaiyero",
            "title": "15 burning questions we still have after watching the season 3 finale of 'Bridgerton'",
            "description": "The remaining episodes of season three of \"Bridgerton\" were released on June 13, wrapping up major storylines but leaving fans with some cliffhangers.",
            "url": "https://www.businessinsider.com/bridgerton-season-3-finale-unanswered-questions-cliffhangers-2024-6",
            "urlToImage": "https://i.insider.com/666af5f0764df1611259635a?width=1200&format=jpeg",
            "publishedAt": "2024-06-23T12:17:06Z",
            "content": "(Clockwise): Hannah New as Lady Tilley Arnold, Nicola Coughlan as Penelope Featherington, Luke Newton as Colin Bridgerton, and Luke Thompson as Benedict Bridgerton on season three, episode five of \"B… [+15024 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Cool Hunting"
            },
            "author": "Evan Orensten",
            "title": "Shala Yoga Rug",
            "description": "Manuka’s Shala yoga rug is handwoven in India from apparel scraps and provides an attractive and practical solution to your outdoor yoga or meditation practice, though it can also double as a …",
            "url": "http://coolhunting.com/buy/shala-yoga-rug/",
            "urlToImage": "https://150102931.v2.pressablecdn.com/wp-content/uploads/2024/06/Image.jpg",
            "publishedAt": "2024-06-24T02:25:08Z",
            "content": "Casa ObsidianaCasa Obsidiana is a new tequila brand created by two families with deep connections to agave and wine making who have been friends for more than twenty years. Jorge and Roberto Beckmann… [+974 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "AppleInsider"
            },
            "author": "news@appleinsider.com (Malcolm Owen)",
            "title": "Apple's India business surges by 33% as iPhone sales grow",
            "description": "Apple's sales in India have jumped up considerably over the last year, a move aided by the iPhone maker's moves to encourage consumer demand in the market.Mumbai, IndiaIndia is an important developing market for many companies, including Apple. With so many p…",
            "url": "https://appleinsider.com/articles/24/07/15/apples-india-business-surges-by-33-as-iphone-sales-grow",
            "urlToImage": "https://photos5.appleinsider.com/gallery/60364-124141-54637-110448-51897-102940-50774-100235-50489-99331-18914-18533-india-mumbai-xl-xl-xl-xl-xl-xl.jpg",
            "publishedAt": "2024-07-15T12:41:36Z",
            "content": "Mumbai, India\r\nApple's sales in India have jumped up considerably over the last year, a move aided by the iPhone maker's moves to encourage consumer demand in the market. \r\nIndia is an important deve… [+1698 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "AppleInsider"
            },
            "author": "news@appleinsider.com (Amber Neely)",
            "title": "Married women face hiring challenges at Foxconn plants in India",
            "description": "Foxconn has been accused of excluding married women from jobs at its main iPhone assembly plant in India, citing their family responsibilities as the reason.Mumbai, IndiaDespite Indian Prime Minister Narendra Modi's efforts to increase women in the workforce,…",
            "url": "https://appleinsider.com/articles/24/06/25/married-women-face-hiring-challenges-at-foxconn-plants-in-india",
            "urlToImage": "https://photos5.appleinsider.com/gallery/54637-110448-51897-102940-50774-100235-50489-99331-18914-18533-india-mumbai-xl-xl-xl-xl-xl.jpg",
            "publishedAt": "2024-06-25T14:16:47Z",
            "content": "Mumbai, India\r\nFoxconn has been accused of excluding married women from jobs at its main iPhone assembly plant in India, citing their family responsibilities as the reason. \r\nDespite Indian Prime Min… [+3143 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Slashdot.org"
            },
            "author": "msmash",
            "title": "China Dominates Generative AI Patent Filings, UN Says",
            "description": "China has requested significantly more generative AI patents than any other country, the U.N. intellectual property agency (the World Intellectual Property Organization) is reporting. According to WIPO's first-ever report on GenAI patents, China submitted ove…",
            "url": "https://yro.slashdot.org/story/24/07/05/1421237/china-dominates-generative-ai-patent-filings-un-says",
            "urlToImage": "https://a.fsdn.com/sd/topics/ai_64.png",
            "publishedAt": "2024-07-05T14:42:00Z",
            "content": "Sign up for the Slashdot newsletter! OR check out the new Slashdot job board to browse remote jobs or jobs in your areaDo you develop on GitHub? You can keep using GitHub but automatically sync your … [+268 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "AppleInsider"
            },
            "author": "news@appleinsider.com (William Gallagher)",
            "title": "Apple looks to India for iPads and AirPod charging cases",
            "description": "Apple is reportedly investigating expanding iPad manufacturing to India, as well as AirPod charging cases, following its rapidly growing iPhone production in the country.Mumbai, IndiaAs part of its move to reduce its dependence on China as a single source of …",
            "url": "https://appleinsider.com/articles/24/07/08/apple-looks-to-india-for-ipads-and-airpod-charging-cases",
            "urlToImage": "https://photos5.appleinsider.com/gallery/54637-110448-51897-102940-50774-100235-50489-99331-18914-18533-india-mumbai-xl-xl-xl-xl-xl.jpg",
            "publishedAt": "2024-07-08T17:16:39Z",
            "content": "Mumbai, India\r\nApple is reportedly investigating expanding iPad manufacturing to India, as well as AirPod charging cases, following its rapidly growing iPhone production in the country.\r\nAs part of i… [+1566 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Yahoo Entertainment"
            },
            "author": "Steve Dent",
            "title": "Faulty cybersecurity update takes out banks, airlines and other major companies worldwide",
            "description": "A massive Microsoft Windows BSOD (blue screen of death) outage has impacted multiple companies worldwide including airlines, broadcasters and others. The problem was a caused by a faulty update from security giant CrowdStrike that forced PCs and servers into …",
            "url": "https://consent.yahoo.com/v2/collectConsent?sessionId=1_cc-session_af6efd8c-fb64-4bea-bf30-be9d7c096f27",
            "urlToImage": null,
            "publishedAt": "2024-07-19T08:51:43Z",
            "content": "If you click 'Accept all', we and our partners, including 236 who are part of the IAB Transparency &amp; Consent Framework, will also store and/or access information on a device (in other words, use … [+678 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Hipertextual"
            },
            "author": "Rubén Chicharro",
            "title": "Se filtra el precio del Galaxy Ring, el anillo inteligente de Samsung",
            "description": "El Galaxy Ring, el anillo inteligente que Samsung mostró en la pasada edición del Mobile World Congress de Barcelona, podría salir a la venta el próximo 10 de julio, según revelaron algunos rumores e, incluso, la propia compañía a través de una demanda contra…",
            "url": "http://hipertextual.com/2024/06/se-filtra-el-precio-del-galaxy-ring-el-anillo-inteligente-de-samsung",
            "urlToImage": "https://imgs.hipertextual.com/wp-content/uploads/2024/02/galaxy-ring-003.jpg",
            "publishedAt": "2024-06-25T11:12:03Z",
            "content": "El Galaxy Ring, el anillo inteligente que Samsung mostró en la pasada edición del Mobile World Congress de Barcelona, podría salir a la venta el próximo 10 de julio, según revelaron algunos rumores e… [+2373 chars]"
          },
          {
            "source": {
              "id": "business-insider",
              "name": "Business Insider"
            },
            "author": "Huileng Tan",
            "title": "Putin wants to strengthen a big challenger to Western dominance",
            "description": "BRICS is expanding, with Thailand and Malaysia recently expressing interest to join the bloc.",
            "url": "https://www.businessinsider.com/russia-economy-putin-touts-brics-parliament-structure-west-sanctions-dedollarization-2024-7",
            "urlToImage": "https://i.insider.com/6695d7c19caa6ed01e01dff3?width=1200&format=jpeg",
            "publishedAt": "2024-07-16T08:51:36Z",
            "content": "Russian President Vladimir Putin has been talking about a BRICS parliament.Getty Images\r\n\u003Cul\u003E\u003Cli\u003ERussian President Vladimir Putin is eyeing a bigger global role for the BRICS bloc.\u003C/li\u003E\u003Cli\u003EPutin rece… [+3236 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Hipertextual"
            },
            "author": "Rubén Chicharro",
            "title": "El CMF Phone 1 es el móvil más diferente que he probado nunca",
            "description": "Nothing, la compañía fundada por Carl Pei, uno de los creadores de OnePlus, tiene una marca destinada a lanzar productos económicos llamada CMF, que hasta hace unos meses se centraba en mercados en desarrollo tales como la India. En noviembre, llegó a España …",
            "url": "http://hipertextual.com/2024/07/el-cmf-phone-1-es-el-movil-mas-diferente-que-he-probado-nunca",
            "urlToImage": "https://imgs.hipertextual.com/wp-content/uploads/2024/07/cmf-phone-1-001.jpg",
            "publishedAt": "2024-07-08T09:00:48Z",
            "content": "Nothing, la compañía fundada por Carl Pei, uno de los creadores de OnePlus, tiene una marca destinada a lanzar productos económicos llamada CMF, que hasta hace unos meses se centraba en mercados en d… [+5989 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "BBC News"
            },
            "author": null,
            "title": "Modi's balancing act as he meets Putin in Moscow",
            "description": "Mr Modi's visit coincides with a Nato summit, where Russia's invasion of Ukraine will be a major theme.",
            "url": "https://www.bbc.com/news/articles/cpd91pe5r9go",
            "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/34e0/live/3b643c00-3dbe-11ef-9e1c-3b4a473456a6.jpg",
            "publishedAt": "2024-07-09T10:40:40Z",
            "content": "By Anbarasan Ethirajan, BBC News, Delhi\r\nIndia PM Modi meets Russian President Putin\r\nIndian Prime Minister Narendra Modi is being keenly watched by his Western allies as he meets Russian President V… [+7024 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Phandroid - News for Android"
            },
            "author": "Specious Coda-Bishop",
            "title": "Samsung Galaxy M35 releases in India",
            "description": "The Samsung Galaxy M35 5G stands out as a well-rounded, affordable smartphone without compromising key features. Whether you need a reliable device for daily tasks, photography, or gaming, the Galaxy M35 5G offers an impressive array of capabilities at a budg…",
            "url": "https://phandroid.com/2024/07/17/samsung-galaxy-m35-releases-in-india/",
            "urlToImage": "https://phandroid.com/wp-content/uploads/2024/07/GalaxyM35.png",
            "publishedAt": "2024-07-17T20:23:37Z",
            "content": "Samsungs latest addition to the mid-range smartphone market, the Samsung Galaxy M35 5G, promises to deliver impressive performance and features at an affordable price. Right now its being released in… [+2521 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Gizmodo.com"
            },
            "author": "Isaac Schultz",
            "title": "We'll Have to Wait a Bit Longer for the World's Biggest Fusion Reactor",
            "description": "Earlier this morning, the International Thermonuclear Experimental Reactor (ITER) Organization announced what has long been known: The largest tokamak in the world will be delayed further, prolonging the awaited nuclear fusion machine’s operations by at least…",
            "url": "https://gizmodo.com/delay-largest-fusion-reactor-iter-tokamak-clean-energy-1851575039",
            "urlToImage": "https://i.kinja-img.com/image/upload/c_fill,h_675,pg_1,q_80,w_1200/90115cdf9a778cc15aa3a5bd51def840.jpg",
            "publishedAt": "2024-07-03T16:55:00Z",
            "content": "Earlier this morning, the International Thermonuclear Experimental Reactor (ITER) Organization announced what has long been known: The largest tokamak in the world will be delayed further, prolonging… [+5007 chars]"
          },
          {
            "source": {
              "id": "business-insider",
              "name": "Business Insider"
            },
            "author": "Tom Carter",
            "title": "How Chinese EV makers are slowly taking over the world",
            "description": "China's Tesla rivals, like BYD, are expanding rapidly in developing markets like Brazil, Mexico, and Southeast Asia.",
            "url": "https://www.businessinsider.com/byd-saic-chinese-ev-makers-plot-world-takeover-2024-6",
            "urlToImage": "https://i.insider.com/6669b825764df1611258f121?width=1200&format=jpeg",
            "publishedAt": "2024-06-22T09:22:01Z",
            "content": "Chinese EV players are expanding rapidly in developing markets like Brazil, Mexico, and Southeast Asia.iStock; Rebecca Zisser/BI\r\n\u003Cul\u003E\u003Cli\u003EChina's EV upstarts appear to be plotting world domination. \u003C… [+12687 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "9to5Mac"
            },
            "author": "Ryan Christoffel",
            "title": "India calls out Apple’s ‘abusive conduct and practices’ with App Store as antitrust woes continue",
            "description": "Apple’s antitrust woes are continuing to spread around the globe, as evidenced by a new report. Following the path tread by the EU, India is the latest nation to take issue with Apple’s App Store practices, as the first results of a years-long investigation h…",
            "url": "https://9to5mac.com/2024/07/12/india-calls-out-apples-abusive-conduct-and-practices-with-app-store-as-antitrust-woes-continue/",
            "urlToImage": "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2024/06/track-manage-apple-app-store-subscriptions.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
            "publishedAt": "2024-07-12T13:40:24Z",
            "content": "Apples antitrust woes are continuing to spread around the globe, as evidenced by a new report. Following the path tread by the EU, India is the latest nation to take issue with Apples App Store pract… [+1556 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Android Police"
            },
            "author": "Chandraveer Mathur",
            "title": "Samsung could open Fold and Flip 6 reservations in India this week",
            "description": "Here's hoping the rest of the world gets the chance, too",
            "url": "https://www.androidpolice.com/samsung-could-open-fold-flip-6-pre-orders-this-week/",
            "urlToImage": "https://static1.anpoimages.com/wordpress/wp-content/uploads/2024/05/galaxy-z-fold6-ap24-hero.jpg",
            "publishedAt": "2024-06-24T21:09:16Z",
            "content": "Summary\r\n\u003Cul\u003E\u003Cli\u003E Samsung's Galaxy Z Fold 6 and Flip 6 expected to launch in July, with pre-reservation rumored to start in India on June 26. \u003C/li\u003E\u003Cli\u003E Rumors suggest modest upgrades with new shell c… [+2520 chars]"
          },
          {
            "source": {
              "id": "business-insider",
              "name": "Business Insider"
            },
            "author": "Charissa Cheong",
            "title": "My parents struggled in blue-collar jobs. Paying off their mortgage and retiring them is my proudest achievement.",
            "description": "Simmy Dhillon's parents worked blue collar jobs to support the family. At age 27, Dhillon has now retired his parents and paid off their mortgage.",
            "url": "https://www.businessinsider.com/entrepreneur-retired-parents-mortgage-2024-6",
            "urlToImage": "https://i.insider.com/667c1d1940cf2af6e4f5d9c5?width=1200&format=jpeg",
            "publishedAt": "2024-06-27T09:32:23Z",
            "content": "Dhillon (far right) started his own business as a college student.Courtesy of Simmy Dhillon\r\n\u003Cul\u003E\u003Cli\u003EGrowing up, Simmy Dhillon watched his parents struggle in blue-collar jobs.\u003C/li\u003E\u003Cli\u003EDuring college… [+6209 chars]"
          },
          {
            "source": {
              "id": "business-insider",
              "name": "Business Insider"
            },
            "author": "Maria Noyen",
            "title": "Inside the Ambani wedding: Details you may have missed, according to a guest who was there all weekend",
            "description": "The Ambani wedding culminated in a three-day extravaganza with celebrity guests that brought Mumbai to a halt. A guest says going felt like a \"dream.\"",
            "url": "https://www.businessinsider.com/ambani-wedding-guest-shares-behind-the-scenes-details-of-festivities-2024-7",
            "urlToImage": "https://i.insider.com/669575f08893442a5156bb98?width=1200&format=jpeg",
            "publishedAt": "2024-07-15T22:02:20Z",
            "content": "Anant Ambani and Radhika Merchant on July 5 at their sangeet.SUJIT JAISWAL/Getty Images\r\n\u003Cul\u003E\u003Cli\u003EAnant Ambani and Radhika Merchant just wrapped up their 3-day wedding extravaganza in Mumbai. \u003C/li\u003E\u003Cli… [+7565 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Dezeen"
            },
            "author": "Alyn Griffiths",
            "title": "India Mahdavi and Crosby Studios create reflective ping pong parlour in Paris",
            "description": "Designer Harry Nuriev of Crosby Studios has transformed India Mahdavi's Paris gallery into a silver-coloured space where visitors can play table tennis in the lead-up to the 2024 Olympic Games. The Match Point installation is the 14th takeover of Mahdavi's Pr…",
            "url": "https://www.dezeen.com/2024/07/09/india-mahdavi-crosby-studios-ping-pong-installation-paris/",
            "urlToImage": "https://static.dezeen.com/uploads/2024/07/hero-crosby-studios-india-mahdavi-gallery-paris_dezeen_2364_col_3-600x600.jpg",
            "publishedAt": "2024-07-09T10:00:45Z",
            "content": "Designer Harry Nuriev of Crosby Studios has transformed India Mahdavi's Paris gallery into a silver-coloured space where visitors can play table tennis in the lead-up to the 2024 Olympic Games.\r\nThe … [+2978 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Yahoo Entertainment"
            },
            "author": "Reuters",
            "title": "Russia wants quick solution to issue of Indians caught up in Ukraine war, top diplomat says",
            "description": "Russia is committed to finding the \"earliest possible solution\" to the issue of Indians being duped into joining its army and fighting in the Ukraine war, a ...",
            "url": "https://www.yahoo.com/news/russia-wants-quick-solution-issue-090639598.html",
            "urlToImage": "https://media.zenfs.com/en/reuters.com/28f91c8420db1ce821a65b57aedae2cb",
            "publishedAt": "2024-07-11T09:06:39Z",
            "content": "NEW DELHI (Reuters) - Russia is committed to finding the \"earliest possible solution\" to the issue of Indians being duped into joining its army and fighting in the Ukraine war, a top Russian diplomat… [+2243 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Xataka.com"
            },
            "author": "Rubén Andrés",
            "title": "Se han gastado 600 millones y llevan siete meses de fiesta: la interminable boda del heredero del hombre más rico de India",
            "description": "Para bien o para mal, casarse es algo que no se olvida fácilmente. Sin embargo, la boda sobre la que ponemos el foco va a ser recordada tanto por los novios, como por todos sus invitados.\n\u003C!-- BREAK 1 --\u003E\nLos novios llevan siete meses celebrando la preboda, c…",
            "url": "https://www.xataka.com/magnet/se-han-gastado-600-millones-llevan-siete-meses-fiesta-interminable-boda-heredero-hombre-rico-india",
            "urlToImage": "https://i.blogs.es/3856f7/ambani-boda/840_560.jpeg",
            "publishedAt": "2024-07-12T19:11:28Z",
            "content": "Para bien o para mal, casarse es algo que no se olvida fácilmente. Sin embargo, la boda sobre la que ponemos el foco va a ser recordada tanto por los novios, como por todos sus invitados.\r\nLos novios… [+5290 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Xataka.com"
            },
            "author": "Javier Marquez",
            "title": "El ascensor de pasajeros más grande del mundo está en India: es como un pequeño apartamento y puede llevar hasta 100 personas",
            "description": "Bombay fue durante mucho tiempo el epicentro de la industria textil de algodón de la India, pero durante las últimas décadas cambió drásticamente. Desde finales del siglo XX que lleva impulsando una diversificación económica que le ha convertido en la capital…",
            "url": "https://www.xataka.com/ingenieria-y-megaconstrucciones/ascensor-pasajeros-grande-mundo-esta-india-como-pequeno-apartamento-puede-llevar-100-personas",
            "urlToImage": "https://i.blogs.es/a86b13/jio-world-centre-1/840_560.jpeg",
            "publishedAt": "2024-06-23T19:01:31Z",
            "content": "Bombay fue durante mucho tiempo el epicentro de la industria textil de algodón de la India, pero durante las últimas décadas cambió drásticamente. Desde finales del siglo XX que lleva impulsando una … [+2771 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Yahoo Entertainment"
            },
            "author": null,
            "title": "Alibaba to close data centres in Australia, India amid expansion in Southeast Asia, Mexico",
            "description": null,
            "url": "https://consent.yahoo.com/v2/collectConsent?sessionId=1_cc-session_3e4ff13f-14d1-488f-95d2-30cd70dcce22",
            "urlToImage": null,
            "publishedAt": "2024-06-28T09:30:00Z",
            "content": "If you click 'Accept all', we and our partners, including 237 who are part of the IAB Transparency &amp; Consent Framework, will also store and/or access information on a device (in other words, use … [+678 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Yahoo Entertainment"
            },
            "author": "Pratap Chakravarty",
            "title": "Global elite flock to extravagant Indian wedding of billionaire Ambani's son",
            "description": "Global luminaries converged on India for the nuptials of billionaire Mukesh Ambani's son, culminating months of lavish celebrations that showcased the...",
            "url": "https://uk.news.yahoo.com/global-elite-flock-extravagant-indian-090025142.html",
            "urlToImage": "https://media.zenfs.com/en/rfi_english_75/452267e37a44b7d413c399770e3ab42f",
            "publishedAt": "2024-07-16T09:00:25Z",
            "content": "Global luminaries converged on India for the nuptials of billionaire Mukesh Ambani's son, culminating months of lavish celebrations that showcased the tycoon's immense fortune and influence.\r\nThe gue… [+1330 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Scientific American"
            },
            "author": "Smriti Mallapaty, Nature magazine",
            "title": "Cheaper Versions of Popular New Weight-Loss Drugs Are Being Developed",
            "description": "As the patents on various weight-loss drugs near expiration, companies in India and China are vying to make lower-cost versions that will widen access to such treatments",
            "url": "https://www.scientificamerican.com/article/cheaper-versions-of-popular-new-weight-loss-drugs-are-being-developed/",
            "urlToImage": "https://static.scientificamerican.com/dam/m/51f1a7b6c0a29cf/original/2RKH3H7_WEB.jpg?w=1200",
            "publishedAt": "2024-06-21T12:30:00Z",
            "content": "Blockbuster weight-loss drugs such as Wegovy could soon become a lot cheaper — and reach more people — thanks to Chinese and Indian pharmaceutical companies. A long queue of companies is developing c… [+7656 chars]"
          },
          {
            "source": {
              "id": "business-insider",
              "name": "Business Insider"
            },
            "author": "Lakshmi Varanasi",
            "title": "McKinsey says it needs to reinvent itself and that AI is the answer: 'It's going to be most of what we do in the future'",
            "description": "Senior McKinsey partner Ben Ellencweig said the firm is going all-in on AI.",
            "url": "https://www.businessinsider.com/mckinsey-ai-consulting-focus-future-2024-6",
            "urlToImage": "https://i.insider.com/6675f59740cf2af6e4f4d4dc?width=1200&format=jpeg",
            "publishedAt": "2024-06-22T14:49:27Z",
            "content": "McKinsey & Company is betting big on AI. Arnd Wiegmann/Reuters\r\n\u003Cul\u003E\u003Cli\u003EGenerative AI is a major focus at top consulting firms like McKinsey & Company.\u003C/li\u003E\u003Cli\u003EMcKinsey's AI arm QuantumBlack employs … [+2466 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "AppleInsider"
            },
            "author": "news@appleinsider.com (William Gallagher)",
            "title": "India's antitrust regulator accuses Apple of abusing its market dominance",
            "description": "After three years of investigations, Indian regulators have concluded that Apple has been using antitrust behaviours by forcing App Store developers to use its in-app payment system.India says Apple has abused its dominant market share of iOS appsThe Competit…",
            "url": "https://appleinsider.com/articles/24/07/12/indias-antitrust-regulator-accuses-apple-of-abusing-its-market-dominance",
            "urlToImage": "https://photos5.appleinsider.com/gallery/60347-124071-000-lead-App-Store-xl.jpg",
            "publishedAt": "2024-07-12T14:16:11Z",
            "content": "India says Apple has abused its dominant market share of iOS apps\r\nAfter three years of investigations, Indian regulators have concluded that Apple has been using antitrust behaviours by forcing App … [+2324 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "AppleInsider"
            },
            "author": "news@appleinsider.com (William Gallagher)",
            "title": "Indian sends labor officials to grill Foxconn over hiring practices",
            "description": "Following accusations that iPhone manufacturer Foxconn discriminates against hiring married women, the Indian government has questioned executives and is studying documentary evidence.Mumbai, IndiaIn late June 2024, iPhone assembler Foxconn was accused of ref…",
            "url": "https://appleinsider.com/articles/24/07/03/indian-sends-labor-officials-to-grill-foxconn-over-hiring-practices",
            "urlToImage": "https://photos5.appleinsider.com/gallery/54637-110448-51897-102940-50774-100235-50489-99331-18914-18533-india-mumbai-xl-xl-xl-xl-xl.jpg",
            "publishedAt": "2024-07-03T12:29:43Z",
            "content": "Mumbai, India\r\nFollowing accusations that iPhone manufacturer Foxconn discriminates against hiring married women, the Indian government has questioned executives and is studying documentary evidence.… [+2484 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Yahoo Entertainment"
            },
            "author": "Susan Elizabeth Turek",
            "title": "Siblings abandon modern construction methods to build hand-sculpted mud house in mountains: 'If birds and ants can make their homes, why can't we?'",
            "description": "\"Our climate anxiety peaked.\"",
            "url": "https://www.yahoo.com/tech/siblings-abandon-modern-construction-methods-170000740.html",
            "urlToImage": "https://s.yimg.com/ny/api/res/1.2/0jZWuz0tTFzfhf4ftu6LTQ--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDA-/https://media.zenfs.com/en/the_cool_down_737/6d4c7160e88040b8a87a971262a9abb8",
            "publishedAt": "2024-06-29T17:00:00Z",
            "content": "A pair of siblings who abandoned modern construction methods have brought their mudhouse vision to fruition with the help of Indigenous wisdom and the global community.\r\nAs detailed by Architectural … [+3665 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Yahoo Entertainment"
            },
            "author": "Lucas Manfredi",
            "title": "Netflix, Amazon Lead With 53% of Original Streaming Title Orders in First Quarter of 2024, Study Finds",
            "description": "The growth comes from increased investment in international territories, according to Ampere Analysis The post Netflix, Amazon Lead With 53% of Original...",
            "url": "https://finance.yahoo.com/news/netflix-amazon-lead-53-original-083000616.html",
            "urlToImage": "https://media.zenfs.com/en/thewrap.com/f47e6b7075cad4b483aa65a8b3b4bb19",
            "publishedAt": "2024-07-01T08:30:00Z",
            "content": "Netflix and Amazon led the pack for orders of original streaming titles in the first quarter of 2024, accounting for over half (53%) of all commissions globally, according to new findings from Ampere… [+3683 chars]"
          },
          {
            "source": {
              "id": "business-insider",
              "name": "Business Insider"
            },
            "author": "Cameron Manley",
            "title": "South Korea plans to roll out 'Star Wars' laser weapon to melt North Korean drones for just $1.50 a hit",
            "description": "Competing countries are pouring investment into laser weapons. The UK announced this year that it had tested a laser that could be sent to Ukraine.",
            "url": "https://www.businessinsider.com/south-korea-to-deploy-star-wars-laser-weapon-melt-drones-2024-7",
            "urlToImage": "https://i.insider.com/66913faf8893442a51560dbe?width=1200&format=jpeg",
            "publishedAt": "2024-07-13T10:06:27Z",
            "content": "Screenshot showing South Korea's StarWars laser in action.South Korea's Defence Acquisition Programme Administration (DAPA).\r\n\u003Cul\u003E\u003Cli\u003ESouth Korea plans to deploy a low-cost laser weapon to shoot down… [+2312 chars]"
          },
          {
            "source": {
              "id": "business-insider",
              "name": "Business Insider"
            },
            "author": "Aditi Bharade",
            "title": "As Boeing bleeds cash, Airbus predicts it'll double the size of its fleet worldwide in the next 20 years",
            "description": "Airbus reports an optimistic 20-year demand outlook and expects to double its global fleet, as Boeing faces legal issues and losses",
            "url": "https://www.businessinsider.com/airbus-predict-double-current-fleet-20-years-2024-7",
            "urlToImage": "https://i.insider.com/6694dfbb9caa6ed01e01827e?width=1200&format=jpeg",
            "publishedAt": "2024-07-15T09:58:56Z",
            "content": "An Eurowings aircraft at Düsseldorf airport.picture alliance/Getty Images\r\n\u003Cul\u003E\u003Cli\u003EAirbus forecasts that it'll be able to double the size of its global fleet to 48,230 planes by 2043.\u003C/li\u003E\u003Cli\u003EThe dem… [+1882 chars]"
          },
          {
            "source": {
              "id": "ars-technica",
              "name": "Ars Technica"
            },
            "author": "Ashley Belanger",
            "title": "The “Netflix of anime” piracy site abruptly shuts down, shocking users",
            "description": "Animeflix shutters amid intensifying global crackdown on anime piracy.",
            "url": "https://arstechnica.com/tech-policy/2024/07/the-netflix-of-anime-piracy-site-abruptly-shuts-down-shocking-users/",
            "urlToImage": "https://cdn.arstechnica.net/wp-content/uploads/2024/07/The-Fable-press-image-760x380.jpeg",
            "publishedAt": "2024-07-05T17:02:01Z",
            "content": "Enlarge/ Disney+ promotional art for The Fable, an anime series that triggered Animeflix takedown notices.\r\n9\r\nThousands of anime fans were shocked Thursday when the popular piracy site Animeflix vol… [+3224 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "CNET"
            },
            "author": "Kevin Lynch",
            "title": "T20 Cricket World Cup Livestream: How to Watch Afghanistan vs. India From Anywhere - CNET",
            "description": "The Super Eight clash sees the Men In Blue looking to maintain their 100% record in this year's tournament.",
            "url": "https://www.cnet.com/tech/services-and-software/t20-cricket-world-cup-livestream-how-to-watch-afghanistan-vs-india-from-anywhere/",
            "urlToImage": "https://www.cnet.com/a/img/resize/9a8e1894c42cd29e43af58fd32b7095b316741c3/hub/2024/06/20/84e28432-087a-4362-b912-e19506e99328/gettyimages-2157589384.jpg?auto=webp&fit=crop&height=675&width=1200",
            "publishedAt": "2024-06-20T11:33:24Z",
            "content": "Afghanistan will be looking to pull off a major shock on Thursday as they take on unbeaten India in Barbados for this T20 World Cup Super Eight clash. \r\nThe Afghans have impressed and boast the tourn… [+5145 chars]"
          }
        ]
      }
      }

      const filteredNews=res.data.articles.filter(article => article.title !== '[Removed]' && article.author !== null)
      dispatch(fetchNewsSuccess(filteredNews));
    }
    catch(error){
      console.log('error');
      dispatch(fetchNewsFailed(error.errorMsg));
    }
  }
}

//Note : Here dispatching action creators through special action creators(here it is "fetchNews").



/* 
Note:
(1)
-We know that action creators only return object.
- For returning async function we use "redux-thunk".
- Redux Thunk:
  - External dependency
  - Create special creators which allow (action creators) to return async function also(not ony object)
  - Handle async requests.
  - Returned async function has a "dispatch" parameter.
  - Within this special action creators, other action creators can be dispatched.
  
  
  (2)What is happening in "fetchNews" action creator:
    -Before API calling : fetchNewsLoading()
    -After API calling, if successful : fetchNewsSuccess()
    -After API calling, if unsuccessful : fetchNewsFailed()
    
*/