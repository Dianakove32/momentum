const dataNews=[
    {
        name:"Australia warns Google and Apple over app stores",
        image:"https://ichef.bbci.co.uk/news/976/cpsprodpb/12D07/production/_118236077_appspic.jpg",
        url:"https://www.bbc.com/news/business-56910965"
    },
    {
        name:"Birds of Oz: The charming natives that found TikTok fame",
        image:"data:image/jpeg;base64,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",
        url:"https://www.bbc.com/news/av/world-australia-56883027"
    },
    {
        name:"Mon Laferte: Chile's pop export on repression and injustice",
        image:"https://ichef.bbci.co.uk/news/976/cpsprodpb/169FB/production/_109676629_058009807-1.jpg",
        url:"https://www.bbc.com/news/world-latin-america-56899171"
    },
    {
        name:"Biden 100 days: What we all got wrong about him",
        image:"https://ichef.bbci.co.uk/news/976/cpsprodpb/6D95/production/_118235082_biden_getty.jpg",
        url:"https://www.bbc.com/news/world-us-canada-56903805"
    },
    {
        name:"Google owner sees record profits as lockdown boom continues",
        image:"https://ichef.bbci.co.uk/news/976/cpsprodpb/BD95/production/_118233584_gettyimages-1219181276.jpg",
        url:"https://www.bbc.com/news/business-56910255"
    },
    {
        name:"CEO Secrets: Why crying can help you succeed in business",
        image:"https://ichef.bbci.co.uk/news/1024/branded_news/4DC5/production/_117890991_p09d3nbz.jpg",
        url:"https://www.bbc.com/news/business-56683783"
    },

    {
        name:"Google owner sees record profits as lockdown boom continues",
        image:"https://ichef.bbci.co.uk/news/1536/cpsprodpb/495B/production/_117697781_6ce2e108-73b5-471b-92fd-26941fd673c3.jpg",
        url:"https://www.bbc.com/news/business-56910255"
    },
    {
        name:"CEO Secrets: Why crying can help you succeed in business",
        image:"https://ichef.bbci.co.uk/news/1024/branded_news/FBE4/production/_117348446_gettyimages-1228782838.jpg",
        url:"https://www.bbc.com/news/business-56683783"
    },
    {
        name:"US Covid-19 guidance: Fully vaccinated people do not need masks outside",
        image:"https://c.files.bbci.co.uk/58F0/production/_114786722_ceo_snackcess_box_comp.jpg",
        url:"https://www.bbc.com/news/world-us-canada-56908373"
            },
]
export default dataNews;