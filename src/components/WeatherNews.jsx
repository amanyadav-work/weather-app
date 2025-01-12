import React, { useEffect, useState } from 'react'

const WeatherNews = ({newsAPIkey}) => {
    const [News, setNews] = useState({});

    const NewsData = async () => {
        // const data = await fetch('/WeatherNewsTest.json');
        const data = await fetch(`https://newsapi.org/v2/top-headlines?apiKey=${newsAPIkey}&q=weather`);
        let parsedData = await data.json();
        if(parsedData.articles && parsedData.articles.length>0){
        setNews(parsedData);
    }
    else{
        const fallback = await fetch('/WeatherNewsTest.json');
        const fallbackdata = await fallback.json();  
        setNews(fallbackdata);
    }
    }

    useEffect(() => {
        NewsData();
    }, [])

    return (


        <>
            {News.articles &&
                News.articles.map((item, i) => {
                    return <a key={i} href={item.url} >
                        {i === 0 ? (
                            <div className="card mb-3 position-relative" >
                                <span className="position-absolute top-0 start-100 translate-middle p-2 bg-danger border border-light rounded-circle">
                                    <span className="visually-hidden">New alerts</span>
                                </span>
                                <img className="sizings" style={{height:"120px", borderRadius:" 7px 0px 0px 0px"}} src={item.urlToImage ? item.urlToImage : "/Placeholder.jpg"} alt="Card image cap" />
                                <div className="card-body newsbody">
                                    <h5 className="card-title titlenews">{item.title}</h5>
                                    <p className="card-text ">{item.description.length > 120 ? item.description.slice(0, 120) + "..." : item.description}</p>
                                </div>
                            </div>
                        ) :
                            <div className="card mb-3" >
                                <img className="sizings" src={item.urlToImage ? item.urlToImage : "/Placeholder.jpg"} alt="Card image cap" />
                                <div className="card-body newsbody">
                                    <h5 className="card-title titlenews">{item.title}</h5>
                                    <p className="card-text ">{item.description.length > 31 ? item.description.slice(0, 31) + "..." : item.description}</p>
                                </div>
                            </div>}
                    </a>
                })

            }

        </>
    )
}

export default WeatherNews
