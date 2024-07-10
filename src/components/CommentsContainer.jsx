import React from 'react'
import CommentsList from './CommentsList';

const commentsData = [
    {
        name: "Akshay saini",
        text: "Lorem ipsum dolar sit amet,consectetur adip",
        replies: [],
    },
    {
        name: "Akshay saini",
        text: "Lorem ipsum dolar sit amet,consectetur adip",
        replies: [
            {
            name: "Akshay saini",
            text: "Lorem ipsum dolar sit amet,consectetur adip",
            replies: [],
            },
            {
            name: "Akshay saini",
            text: "Lorem ipsum dolar sit amet,consectetur adip",
            replies: [],
            },
            {
            name: "Akshay saini",
            text: "Lorem ipsum dolar sit amet,consectetur adip",
            replies: [
                {
                name: "Akshay saini",
                text: "Lorem ipsum dolar sit amet,consectetur adip",
                replies: [
                    {
                        name: "Akshay saini",
                        text: "Lorem ipsum dolar sit amet,consectetur adip",
                        replies: [
                            {
                                name: "Akshay saini",
                                text: "Lorem ipsum dolar sit amet,consectetur adip",
                                replies: [{
                                    name: "Akshay saini",
                                    text: "Lorem ipsum dolar sit amet,consectetur adip",
                                    replies: [],
                                },],
                            },{
                                name: "Akshay saini",
                                text: "Lorem ipsum dolar sit amet,consectetur adip",
                                replies: [],
                            },
                        ],
                    },
                  ],
                },
               ],
            },
         ],
    },
    {
        name: "Akshay saini",
        text: "Lorem ipsum dolar sit amet,consectetur adip",
        replies: [],
    },
    {
        name: "Akshay saini",
        text: "Lorem ipsum dolar sit amet,consectetur adip",
        replies: [],
    },
    {
        name: "Akshay saini",
        text: "Lorem ipsum dolar sit amet,consectetur adip",
        replies: [],
    },
]

const CommentsContainer = () => {
  return (
    <div className='m-5 p-2'>
        <h1 className='text-2xl font-bold'>comments</h1>
        <CommentsList comments={commentsData}/>
    </div>
  )
};

export default CommentsContainer;