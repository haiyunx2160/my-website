import React from 'react';
import Card from "./Card";


class Portfolios extends React.Component{

    render() {
        return(
            <div className='container'>
                <div className='row'>
                    <div className='col-12 col-lg-4 col-md-6'>
                        <Card title='Recipes Book'
                              imageName ='recipesBook'
                              skills= {['Angular', 'Bootstrap', 'Firebase']}
                              url='http://ng-haiyun-recipes.s3-website-us-east-1.amazonaws.com/'/>
                    </div>
                    <div className='col-12 col-lg-4 col-md-6'>
                        <Card title='Student Profiles'
                              imageName ='studentProfile'
                              skills= {['React', 'Redux', 'Bootstrap', 'Firebase']}
                              url='http://ng-student-profile.s3-website-us-east-1.amazonaws.com/'/>
                    </div>
                    <div className='col-12 col-lg-4 col-md-6'>
                        <Card title='Londoners Forum'
                              imageName ='londoners'
                              skills= {['PHP', 'JQuery', 'MySql']}
                              url='https://github.com/haiyunx2160/portfolio/tree/master/the%20Londoners%20forum'/>
                    </div>
                    <div className='col-12 col-lg-4 col-md-6'>
                        <Card title='Video Search'
                              imageName ='videoSearch'
                              skills= {['React', 'API']}
                              url='http://react-video-search.s3-website-us-east-1.amazonaws.com/'/>
                    </div>
                    <div className='col-12 col-lg-4 col-md-6'>
                        <Card title='Image Search'
                              imageName ='imageSearch'
                              skills= {['React', 'API']}
                              url='http://react-images-search.s3-website-us-east-1.amazonaws.com/'/>
                    </div>
                    <div className='col-12 col-lg-4 col-md-6'>
                        <Card title='Streamer'
                              imageName ='streamer'
                              skills= {['React', 'Redux']}
                              url='https://github.com/haiyunx2160/portfolio/tree/master/Live%20stream'/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Portfolios;
