import React from "react";
import Post from "./post";

let e = React.createElement;

export default class NewsFeed extends React.Component {
    render() {
        let comments = [    
            {
                content: 'My dad owns a dealership.',
                username: 'Tommy',
                date: '05-07-2022'
            },

            {
                content: 'A/S/L? You live in Cali?',
                username: 'Big Barb',
                date: '05-07-2022'
            },
            {
                content: 'Cool pix!',
                username: 'Bobert',
                date: '05-07-2022'
            }
        ];


        return (
            <div className="container">
                <Post {...{comments: comments, content: 'This is my post content'}} />
                <br />
                <br />
                <Post {...{comments: comments, content: 'Here is another post'}} />
                <br />
                <br />
                <Post {...{comments: comments, content: 'Support my GoFundMe!'}} />
            </div>
        );
        

    }
}