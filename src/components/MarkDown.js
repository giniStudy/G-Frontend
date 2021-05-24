import React from 'react';
import ReactMarkdown from 'react-markdown';
import styled from 'styled-components';

const MarkDownStyle = styled.div`
    font-size : 1rem;
    line-height : 2.5rem;
`;

const InlineCode =  styled.span`
    background-color : darkgray;
    color: white;
`;

const components = {
    code({node, inline, className, children, ...props}){
        console.log(children[0]);
        const match = /language-(\w+)/.exec(className || '')
        return !inline && match ? (<>test</>) : (<InlineCode>{children[0]}</InlineCode>) 
    }
}
/**
 * https://github.com/remarkjs/react-markdown#node-types
 * 커스텀 컴포넌트 
 */
export default function MarkDown ({children}){


    return (
        <MarkDownStyle>
            <ReactMarkdown components={components}
            >
                {children}
            </ReactMarkdown>
        </MarkDownStyle>
    );
};